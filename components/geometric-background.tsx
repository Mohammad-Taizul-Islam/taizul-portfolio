'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export function GeometricBackground() {
  const shapes = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    type: ['hexagon', 'triangle', 'square'][Math.floor(Math.random() * 3)],
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    size: 20 + Math.random() * 40
  }))

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-10"
          initial={{
            left: `${shape.position.x}%`,
            top: `${shape.position.y}%`,
            rotate: 0,
            scale: 0
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {shape.type === 'hexagon' && (
            <div 
              className="bg-primary/10" 
              style={{
                width: shape.size,
                height: shape.size,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="bg-primary/10"
              style={{
                width: shape.size,
                height: shape.size,
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
              }}
            />
          )}
          {shape.type === 'square' && (
            <div 
              className="bg-primary/10"
              style={{
                width: shape.size,
                height: shape.size
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  )
}

