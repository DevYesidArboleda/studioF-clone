'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from '@/app/actions'

export function FormTab() {
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)
    setMessage('')

    const formData = new FormData(event.currentTarget)
    const response = await sendEmail(formData)

    setIsLoading(false)
    setMessage(response.message)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input name="name" placeholder="Nombre" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Textarea name="message" placeholder="Mensaje" required />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Enviar'}
      </Button>
      {message && <p className="text-sm text-green-600">{message}</p>}
    </form>
  )
}

