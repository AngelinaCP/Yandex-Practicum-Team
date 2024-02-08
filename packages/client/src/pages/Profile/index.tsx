import React, { FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { useToggle } from '@/hooks'
import { useAppSelector } from '@/store/store'
import { setUser, selectUser } from '@/store/features/userSlice'
import { IUser } from '@/store/api/types'
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

interface IProfileFormFields<T> {
  first_name: T
  second_name: T
  phone: T
  email: T
  login: T
  display_name: T
}
interface IPasswordFormFields<T> {
  old_password: T
  new_password: T
}
interface IProfileInputs
  extends HTMLFormControlsCollection,
    IProfileFormFields<HTMLInputElement> {}
interface IPasswordInputs
  extends HTMLFormControlsCollection,
    IPasswordFormFields<HTMLInputElement> {}
interface IProfileForm extends HTMLFormElement {
  readonly elements: IProfileInputs
}
interface IPasswordForm extends HTMLFormElement {
  readonly elements: IPasswordInputs
}

export const ProfilePage = () => {
  const [logoutUser] = useLogoutUserMutation()
  const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation()
  const [
    changeAvatar,
    { isLoading: isLoadingAvatar, isSuccess: isSuccessAvatar },
  ] = useChangeAvatarMutation()
  const [
    changeProfile,
    {
      isLoading: isProfileLoading,
      isSuccess: isProfileSuccess,
      isError: isProfileError,
    },
  ] = useChangeProfileMutation()
  const [showModal, toggleShowModal] = useToggle(false)
  const [showAvatarModal, toggleShowAvatarModal] = useToggle(false)
  const [isEdit, toggleIsEdit] = useToggle(false)
  const currentUser = useAppSelector(state => selectUser(state))
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState<IUser | null>(currentUser)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }

  const handleSubmitPassword = (event: FormEvent<IPasswordForm>) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    changePassword(values)
  }

  const handleSubmitAvatar = (event: FormEvent) => {
    event.preventDefault()
    if (selectedFile) {
      changeAvatar(selectedFile)
    }
  }

  const handleSubmitProfile = (event: FormEvent<IProfileForm>) => {
    event.preventDefault()
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form).entries())
    changeProfile(values)
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setUserInfo({ ...userInfo, [name]: value } as IUser)
  }

  useEffect(() => {
    if (isSuccess) toggleShowModal()
    if (isSuccessAvatar) toggleShowAvatarModal()
    if (isProfileSuccess) toggleIsEdit()
    if (isProfileError) {
      setUser(currentUser as IUser)
      setUserInfo(currentUser as IUser)
    }
  }, [isSuccess, isSuccessAvatar, isProfileSuccess, isProfileError])

  return (
    <Card width="580px" height="auto">
      <Avatar image={userInfo?.avatar} changeAvatar={toggleShowAvatarModal} />
      <StyledForm onSubmit={handleSubmitProfile}>
        {isProfileLoading && <LoaderSpinner />}
        <StyledFormGroup>
          <Input
            name="first_name"
            label="Имя"
            required={true}
            value={userInfo?.first_name}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="second_name"
            label="Фамилия"
            required={true}
            value={userInfo?.second_name}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="email"
            label="E-mail"
            required={true}
            value={userInfo?.email}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="phone"
            label="Телефон"
            required={true}
            value={userInfo?.phone}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
        </StyledFormGroup>
        <StyledFormGroup>
          <Input
            name="login"
            label="Логин"
            required={true}
            value={userInfo?.login}
            disabled={!isEdit}
            onChange={handleInputChange}
          />
          <Input
            name="display_name"
            label="Псевдоним"
            required={false}
            value={userInfo?.display_name}
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
            <StyledForm onSubmit={handleSubmitPassword}>
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
