import React from 'react'
import { motion } from 'framer-motion'
import type { HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode
  glow?: boolean
  className?: string
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  glow = false,
  className,
  ...props
}) => {
  return (
    <motion.div
      className={cn(
        'relative rounded-2xl transition-all duration-300',
        'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl',
        'border border-slate-200/90 dark:border-slate-800/90',
        'shadow-sm hover:shadow-md dark:shadow-none',
        glow && 'hover:border-indigo-400/50 dark:hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/10 dark:hover:shadow-indigo-500/20',
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}
