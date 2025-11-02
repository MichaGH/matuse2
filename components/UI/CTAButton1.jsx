'use client'

import Link from 'next/link'

export default function CTAButton1({ href = '#', text = 'Learn more', className = '' }) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        px-6 py-3
        border border-slate-900
        font-secondary text-sm uppercase tracking-wider font-medium
        text-slate-900
        bg-transparent
        transition-all duration-300
        hover:bg-slate-900 hover:text-white
        hover:-translate-y-[1px]
        active:translate-y-0
        ${className}
      `}
    >
      {text}
    </Link>
  )
}
