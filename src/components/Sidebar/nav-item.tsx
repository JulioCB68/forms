import { ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType
  href: string
  active?: boolean
}

export function NavItem({
  title,
  icon: Icon,
  href: redirect,
  active,
}: NavItemProps) {
  return (
    <Link
      href={redirect}
      className={`group flex items-center gap-3 rounded px-3 py-2 transition-all hover:bg-violet-50 ${active && 'bg-violet-50 text-primary text-violet-500'}`}
    >
      <Icon className="h-4 w-4 group-hover:text-violet-500" />
      <span
        className={`font-medium text-zinc-700 group-hover:text-violet-500 ${active && 'text-violet-800'}`}
      >
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </Link>
  )
}
