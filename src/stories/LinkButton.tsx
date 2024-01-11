import React, { FC } from 'react'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

export const LinkButton: FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={`block w-full rounded-3xl bg-sky-500 py-[10px] text-center text-[17px] font-bold transition-all duration-300 ease-out hover:bg-sky-700 ${className}`}
    >
      {children}
    </a>
  )
}
