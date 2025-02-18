'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { submitFormData } from './actions'
import { useState } from 'react'

// Define validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
})

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null)

  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('message', data.message)

    try {
      const result = await submitFormData(formData)
      setSubmitStatus(result)
      
      // Reset the form after successful submission
      if (result.success) {
        reset()
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An error occurred while submitting the form'
      })
    }
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input 
            {...register('name')}
            placeholder="Your Name"
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <Input 
            {...register('email')}
            type="email"
            placeholder="Your Email"
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <Textarea 
            {...register('message')}
            placeholder="Your Message"
            className={errors.message ? 'border-red-500' : ''}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>

        {submitStatus && (
          <div className={`
            mt-4 p-3 rounded 
            ${submitStatus.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}
          `}>
            {submitStatus.message}
          </div>
        )}
      </form>
    </div>
  )
}