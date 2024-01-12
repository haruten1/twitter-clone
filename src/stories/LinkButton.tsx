import React, { FC } from 'react'

type Props = {
  href: string
  className?: string
  children: React.ReactNode
}

/**
 * リンク用の標準のボタンです
 */
export const LinkButton: FC<Props> = ({ children, href, className }) => {
  return (
    <a
      href={href}
      className={`block w-full rounded-3xl bg-sky-500 py-[10px] text-center text-[17px] font-bold text-white transition-all duration-300 ease-out hover:bg-sky-700 ${className}`}
    >
      {children}
    </a>
  )
}
