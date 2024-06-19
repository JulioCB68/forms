/* eslint-disable @next/next/no-img-element */
'use client'

import { ChangeEvent, ComponentProps, useMemo } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import { useFileInput } from '@/context/file-input-context'

import { Checkbox } from '@/components/ui/checkbox'
import { Mail, UploadCloud, User } from 'lucide-react'
import Link from 'next/link'

export type ControlProps = ComponentProps<'input'>

export default function SettingsForm({ multiple = false }: ControlProps) {
  const { id, onFilesSelected, files } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  return (
    <form
      id="settings"
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
    >
      <div className="grid grid-cols-form gap-3">
        <Label htmlFor="firstName">Name</Label>
        <div className="grid grid-cols-2 gap-6">
          <Input id="firstName" defaultValue="" placeholder="First Name" />

          <Input defaultValue="" placeholder="Last Name" />
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="email">Email address</Label>
        <div className="flex h-10 w-full items-center rounded-md border border-input bg-background px-3 py-2">
          <Mail className="h-5 w-5 text-zinc-500" />
          <Input
            id="email"
            type="email"
            defaultValue=""
            placeholder="Your email"
            className="border-none bg-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" placeholder="Your email" />
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label>
          Your photo
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            This will be displayed on your profile.
          </span>
        </Label>

        <div className="flex items-start gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
            {previewURL === null ? (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
                <User className="h-8 w-8 text-violet-500" />
              </div>
            ) : (
              <img
                src={previewURL}
                alt=""
                className="h-16 w-16 rounded-full object-cover"
              />
            )}
          </div>

          <Label
            htmlFor={id}
            className="group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
          >
            <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
              <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
            </div>

            <div className="flex flex-col items-center gap-1">
              <span className="text-sm">
                <span className="font-semibold text-violet-700">
                  Click to upload
                </span>{' '}
                or drag and drop
              </span>
              <span className="text-xs">
                SVG, PNG, JPG or GIF (max. 800x400px)
              </span>
            </div>
            <Input
              id={id}
              type="file"
              className="hidden"
              onChange={handleFilesSelected}
            />
          </Label>
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="cover-letter">
          Cover Letter
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Write a short introduction.
          </span>
        </Label>
        <Textarea id="cover-letter" placeholder="Type your message here." />
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="linkedin">
          Linkedin Profile
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Share your Linkedin profile.
          </span>
        </Label>
        <Input id="linkedin" />
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="github">
          Github Profile
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Share your Github profile.
          </span>
        </Label>
        <Input id="github" />
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="role">
          Role
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Share your latest role.
          </span>
        </Label>
        <Input id="role" defaultValue="CTO" />
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="language">
          Language
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Choose your preferred language.
          </span>
        </Label>
        <Select defaultValue="en">
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="es">Español</SelectItem>
            <SelectItem value="fr">Français</SelectItem>
            <SelectItem value="de">Deutsch</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="language">
          Notification Preferences
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Choose your notification preferences.
          </span>
        </Label>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-2">
            <Switch id="email-notifications" />
            <Label htmlFor="email-notifications">Email Notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="push-notifications" />
            <Label htmlFor="push-notifications">Push Notifications</Label>
          </div>
          <div className="flex items-center gap-2">
            <Switch id="sms-notifications" />
            <Label htmlFor="sms-notifications">SMS Notifications</Label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="role">
          Communication Preferences
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Choose your communication preferences.
          </span>
        </Label>
        <RadioGroup>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="email" value="email" />
            <Label htmlFor="email">Email</Label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem id="phone" value="phone" />
            <Label htmlFor="phone">Phone</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="grid grid-cols-form gap-3 pt-5">
        <Label htmlFor="terms-and-conditions">
          Terms and Conditions
          <span className="mt-0.5 block text-sm font-normal text-zinc-500">
            Please check here stating that you agree to the terms and
            conditions.
          </span>
        </Label>
        <div className="ml-3 flex items-center text-sm">
          <Checkbox
            id="terms-and-conditions"
            name="terms-and-conditions"
            required
          />
          <Label
            htmlFor="terms-and-conditions"
            className="px-2 font-medium text-gray-700 dark:text-gray-300"
          >
            I agree to the{' '}
            <Link
              href="#"
              className="text-violet-700 hover:text-violet-700 dark:text-violet-700 dark:hover:text-violet-700"
              prefetch={false}
            >
              terms and conditions
            </Link>
          </Label>
        </div>
      </div>

      <div className="flex items-center justify-end gap-2 pt-5">
        <Button
          variant={'ghost'}
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
        >
          Cancel
        </Button>
        <Button
          type="submit"
          form="settings"
          className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700"
        >
          Save
        </Button>
      </div>
    </form>
  )
}
