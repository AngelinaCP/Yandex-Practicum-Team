import React, { FormEvent, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useToggle } from '@/hooks'
import { RootState, useAppSelector } from '@/store/store'
import {
  useChangePasswordMutation,
  useChangeAvatarMutation,
} from '@/store/api/authApi'
import { LoaderSpinner } from '@/components/Loading'
import Card from '@/components/Card'
import Input from '@/components/Input'
import Button from '@/components/Button'
import Link from '@/components/Link'
import { Avatar } from '@/components/Avatar'
import { Modal } from '@/components/Modal'
import { FileInput } from '@/pages/Profile/fileInput'
import {
  StyledForm,
  StyledFormGroup,
  StyledFormGroupModal,
} from '@/pages/Profile/style'

export const ProfilePage = () => {
  const [changePassword, { isLoading, isSuccess }] = useChangePasswordMutation()
  const [
    changeAvatar,
    { isLoading: isLoadingAvatar, isSuccess: isSuccessAvatar },
  ] = useChangeAvatarMutation()
  const [showModal, toggleShowModal] = useToggle(false)
  const [showAvatarModal, toggleShowAvatarModal] = useToggle(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (file: File | null) => {
    setSelectedFile(file)
  }
  const selectUser = (state: RootState) => state.userState.user

  useEffect(() => {
    if (isSuccess) toggleShowModal()
    if (isSuccessAvatar) toggleShowAvatarModal()
  }, [isSuccess, isSuccessAvatar])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
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

  const handleSubmitAvatar = async (event: FormEvent) => {
    event.preventDefault()
    if (selectedFile) changeAvatar(selectedFile)
  }

  return (
    <Card width="580px" height="510px">
      <Avatar
        image={useAppSelector(state => selectUser(state))?.avatar}
        changeAvatar={toggleShowAvatarModal}
      />
      <StyledFormGroup>
        <Input
          name="first_name"
          label="Имя"
          required={true}
          value={useAppSelector(state => selectUser(state))?.first_name}
        />
        <Input
          name="second_name"
          label="Фамилия"
          required={true}
          value={useAppSelector(state => selectUser(state))?.second_name}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <Input
          name="email"
          label="E-mail"
          required={true}
          value={useAppSelector(state => selectUser(state))?.email}
        />
        <Input
          name="phone"
          label="Телефон"
          required={true}
          value={useAppSelector(state => selectUser(state))?.phone}
        />
      </StyledFormGroup>
      <StyledFormGroup>
        <Input
          name="login"
          label="Логин"
          required={true}
          value={useAppSelector(state => selectUser(state))?.login}
        />
        <Button onClick={toggleShowModal}>сменить пароль</Button>
      </StyledFormGroup>
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
              <StyledFormGroupModal>
                <Button onClick={toggleShowModal}>Отмена</Button>
                <Button type="submit" $primary={true}>
                  Сохранить
                </Button>
              </StyledFormGroupModal>
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
              <StyledFormGroupModal>
                <Button onClick={toggleShowAvatarModal}>Отмена</Button>
                <Button type="submit" $primary={true}>
                  Сохранить
                </Button>
              </StyledFormGroupModal>
            </StyledForm>
          </Modal>,
          document.body
        )}
    </Card>
  )
}
