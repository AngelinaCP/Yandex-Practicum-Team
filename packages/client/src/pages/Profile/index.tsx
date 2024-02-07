import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useToggle } from '@/hooks'
import { RootState, useAppDispatch, useAppSelector } from '@/store/store'
import { setUser } from '@/store/features/userSlice'
import {
  useChangePasswordMutation,
  useChangeAvatarMutation,
  useLogoutUserMutation,
  useChangeProfileMutation,
} from '@/store/api/authApi'
import { LoaderSpinner } from '@/components/Loading'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { Avatar } from '@/components/Avatar'
import { Modal } from '@/components/Modal'
import { FileInput } from '@/pages/Profile/fileInput'
import { StyledForm, StyledFormGroup } from '@/pages/Profile/style'

export const ProfilePage = () => {
  const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation()
  const [logoutUser] = useLogoutUserMutation()
  const [
    changeAvatar,
    { isLoading: isLoadingAvatar, isSuccess: isSuccessAvatar },
  ] = useChangeAvatarMutation()
  const [changeProfile] = useChangeProfileMutation()
  const [showModal, toggleShowModal] = useToggle(false)
  const [showAvatarModal, toggleShowAvatarModal] = useToggle(false)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const selectUser = (state: RootState) => state.userState.user
  const currentUser = useAppSelector(state => selectUser(state))
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { new_password, old_password } =
      event.target as typeof event.target & {
        new_password: { value: string }
        old_password: { value: string }
      }
    changePassword({
      newPassword: new_password.value,
      oldPassword: old_password.value,
    })
  }

  const handleSubmitAvatar = (event: FormEvent) => {
    event.preventDefault()
    if (selectedFile) {
      changeAvatar(selectedFile)
    }
  }

  const handleSubmitProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    toggleIsEdit()
    const { first_name, second_name, phone, email, login, display_name } =
      event.target as typeof event.target & {
        first_name: { value: string }
        second_name: { value: string }
        phone: { value: string }
        email: { value: string }
        login: { value: string }
        display_name: { value: string }
      }
    changeProfile({
      first_name: first_name.value,
      second_name: second_name.value,
      phone: phone.value,
      email: email.value,
      login: login.value,
      display_name: display_name.value,
    })
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (currentUser) dispatch(setUser({ ...currentUser, [name]: value }))
  }

  useEffect(() => {
    if (isSuccess) toggleShowModal()
    if (isSuccessAvatar) toggleShowAvatarModal()
  }, [isSuccess, isSuccessAvatar])

  return (
    <Card width="580px" height="auto">
      <Avatar
        image={currentUser?.avatar}
        changeAvatar={toggleShowAvatarModal}
      />
      <StyledForm onSubmit={handleSubmitProfile}>
        <StyledFormGroup>
          <Input
            name="first_name"
            label="Имя"
            required={true}
            value={currentUser?.first_name}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="second_name"
            label="Фамилия"
            required={true}
            value={currentUser?.second_name}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="email"
            label="E-mail"
            required={true}
            value={currentUser?.email}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="phone"
            label="Телефон"
            required={true}
            value={currentUser?.phone}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="login"
            label="Логин"
            required={true}
            value={currentUser?.login}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="display_name"
            label="Псевдоним"
            required={false}
            value={currentUser?.display_name}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Button onClick={toggleShowModal}>сменить пароль</Button>
          {isEdit && (
            <Button type="submit" $primary={true}>
              Сохранить
            </Button>
          )}
          {!isEdit && <Button onClick={toggleIsEdit}>Редактировать</Button>}
        </StyledFormGroup>
      </StyledForm>
      <Button
        onClick={() => {
          logoutUser()
          navigate('/')
        }}>
        Выход
      </Button>
      <Link to="/">вернуться на главную</Link>
      {showModal &&
        createPortal(
          <Modal open={showModal}>
            {isLoading && <LoaderSpinner />}
            <StyledForm onSubmit={handleSubmit}>
              <Input
                type="password"
                name="old_password"
                label="Старый пароль"
                required={true}
              />
              <Input
                type="password"
                name="new_password"
                label="Новый пароль"
                required={true}
              />
              <StyledFormGroup>
                <Button onClick={toggleShowModal}>Отмена</Button>
                <Button type="submit" $primary={true}>
                  Сохранить
                </Button>
              </StyledFormGroup>
            </StyledForm>
          </Modal>,
          document.body
        )}
      {showAvatarModal &&
        createPortal(
          <Modal open={showAvatarModal}>
            {isLoadingAvatar && <LoaderSpinner />}
            <StyledForm onSubmit={handleSubmitAvatar}>
              <FileInput onFileChange={handleFileChange} />
              <StyledFormGroup>
                <Button onClick={toggleShowAvatarModal}>Отмена</Button>
                <Button type="submit" $primary={true}>
                  Сохранить
                </Button>
              </StyledFormGroup>
            </StyledForm>
          </Modal>,
          document.body
        )}
    </Card>
  )
}
