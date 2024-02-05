import React, { ChangeEvent } from 'react'

interface FileInputProps {
  onFileChange: (file: File | null) => void
}

export const FileInput: React.FC<FileInputProps> = ({ onFileChange }) => {
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    onFileChange(file)
  }

  return <input type="file" onChange={handleFileChange} />
}
