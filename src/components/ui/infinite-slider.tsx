'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'
import useMeasure from 'react-use-measure'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  gap?: number
  duration?: number
  durationOnHover?: number
  direction?: 'horizontal' | 'vertical'
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = 'horizontal',
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const controls = useAnimation()
  const isHovered = useRef(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationFrame: number

    const startAnimation = async () => {
      const dimension = direction === 'horizontal' ? width : height
      const currentDuration = isHovered.current && durationOnHover ? durationOnHover : duration

      if (dimension === 0) return

      if (direction === 'horizontal') {
        await controls.start({
          x: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: currentDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      } else {
        await controls.start({
          y: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: currentDuration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      }
    }

    const handleResize = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(startAnimation)
    }

    handleResize()

    return () => {
      cancelAnimationFrame(animationFrame)
      controls.stop()
    }
  }, [controls, direction, duration, durationOnHover, gap, reverse, width, height])

  const handleHoverStart = () => {
    isHovered.current = true
    if (durationOnHover) {
      controls.stop()
      const dimension = direction === 'horizontal' ? width : height
      if (direction === 'horizontal') {
        controls.start({
          x: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: durationOnHover,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      } else {
        controls.start({
          y: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: durationOnHover,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      }
    }
  }

  const handleHoverEnd = () => {
    isHovered.current = false
    if (durationOnHover) {
      controls.stop()
      const dimension = direction === 'horizontal' ? width : height
      if (direction === 'horizontal') {
        controls.start({
          x: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      } else {
        controls.start({
          y: reverse ? dimension / 2 + gap / 2 : -(dimension / 2 + gap / 2),
          transition: {
            duration: duration,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          },
        })
      }
    }
  }

  const childrenArray = React.Children.toArray(children)
  const duplicatedChildren = [...childrenArray, ...childrenArray]

  return (
    <div
      ref={containerRef}
      className={cn('overflow-hidden', className)}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        ref={ref}
        className={cn(
          'flex',
          direction === 'horizontal' ? 'flex-row' : 'flex-col'
        )}
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
        }}
        animate={controls}
      >
        {duplicatedChildren.map((child, index) => (
          <div
            key={index}
            className={cn(
              'flex-shrink-0',
              direction === 'horizontal' ? 'h-auto' : 'w-auto'
            )}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  )
}