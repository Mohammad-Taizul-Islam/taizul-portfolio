'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type ShapeType = 'hexagon' | 'triangle' | 'square'

interface Shape {
  id: number
  type: ShapeType
  position: {
    x: number
    y: number
  }
  size: number
  rotationSpeed: number
}

const generateShapes = (): Shape[] => 
  Array.from({ length: 20 }, (_, i) => ({
    id: i,
    type: ['hexagon', 'triangle', 'square'][Math.floor(Math.random() * 3)] as ShapeType,
    position: {
      x: Math.random() * 100,
      y: Math.random() * 100
    },
    size: 40 + Math.random() * 60,
    rotationSpeed: 10 + Math.random() * 20
  }))

export function GeometricBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    setShapes(generateShapes())
  }, [])

  if (shapes.length === 0) {
    return null // or a loading placeholder
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute"
          initial={{
            left: `${shape.position.x}%`,
            top: `${shape.position.y}%`,
            rotate: 0,
            scale: 0
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.rotationSpeed,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {shape.type === 'hexagon' && (
            <div 
              className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg"
              style={{
                width: shape.size,
                height: shape.size,
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
              }}
            />
          )}
          {shape.type === 'triangle' && (
            <div 
              className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg"
              style={{
                width: shape.size,
                height: shape.size,
                clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
              }}
            />
          )}
          {shape.type === 'square' && (
            <div 
              className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg rounded-md"
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

