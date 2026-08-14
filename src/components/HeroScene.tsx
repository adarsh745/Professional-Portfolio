import React, { Suspense, lazy } from 'react'
import { useMediaQuery } from '@/hooks/useMediaQuery'

const FloatingCanvas = lazy(() => import('@/components/3D/FloatingCanvas'))

export const HeroScene: React.FC = () => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-[350px] flex items-center justify-center relative">
        <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/20 to-purple-500/20 blur-2xl animate-pulse" />
        <div className="absolute w-36 h-36 rounded-2xl bg-indigo-600/10 border border-indigo-500/30 backdrop-blur-md flex items-center justify-center shadow-lg">
          <span className="text-3xl">🚀</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
      <Suspense
        fallback={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
          </div>
        }
      >
        <FloatingCanvas />
      </Suspense>
    </div>
  )
}
