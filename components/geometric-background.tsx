'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { generateShapes,Shape } from '@/lib/utils'

export function GeometricBackground() {
  const [shapes, setShapes] = useState<Shape[]>([])

  useEffect(() => {
    setShapes(generateShapes())
  }, [])

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
          <div 
            className={`bg-primary/30 backdrop-blur-md border border-primary/50 shadow-lg ${shape.type === 'circle' ? 'rounded-full' : shape.type === 'square' ? 'rounded-md' : ''}`}
            style={{
              width: shape.size,
              height: shape.size,
              clipPath: shape.clipPath,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)'
            }}
          />
        </motion.div>
      ))}
    </div>
  )
}




// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
// type ShapeType = 'hexagon' | 'triangle' | 'square' | 'circle' | 'pentagon' | 'star' | 'octagon' | 'parallelogram' | 'diamond';


// interface Shape {
//   id: number
//   type: ShapeType
//   position: {
//     x: number
//     y: number
//   }
//   size: number
//   rotationSpeed: number
// }

// const generateShapes = (): Shape[] => 
//   Array.from({ length: 20 }, (_, i) => ({
//     id: i,
//     type: ['hexagon', 'triangle', 'square' ,'diamond'][Math.floor(Math.random() * 3)] as ShapeType,
//     position: {
//       x: Math.random() * 100,
//       y: Math.random() * 100
//     },
//     size: 40 + Math.random() * 60,
//     rotationSpeed: 10 + Math.random() * 20
//   }))

// export function GeometricBackground() {
//   const [shapes, setShapes] = useState<Shape[]>([])

//   useEffect(() => {
//     setShapes(generateShapes())
//   }, [])

//   if (shapes.length === 0) {
//     return null // or a loading placeholder
//   }

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {shapes.map((shape) => (
//         <motion.div
//           key={shape.id}
//           className="absolute"
//           initial={{
//             left: `${shape.position.x}%`,
//             top: `${shape.position.y}%`,
//             rotate: 0,
//             scale: 0
//           }}
//           animate={{
//             rotate: 360,
//             scale: [1, 1.2, 1],
//           }}
//           transition={{
//             duration: shape.rotationSpeed,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         >
//           {shape.type === 'hexagon' && (
//             <div 
//               className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg"
//               style={{
//                 width: shape.size,
//                 height: shape.size,
//                 clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
//               }}
//             />
//           )}
//           {shape.type === 'triangle' && (
//             <div 
//               className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg"
//               style={{
//                 width: shape.size,
//                 height: shape.size,
//                 clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
//               }}
//             />
//           )}
//           {shape.type === 'square' && (
//             <div 
//               className="bg-primary/10 backdrop-blur-md border border-primary/20 shadow-lg rounded-md"
//               style={{
//                 width: shape.size,
//                 height: shape.size
//               }}     
//             />
//           )}
//         </motion.div>
//       ))}
//     </div>
//   )
// }



// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'



// export function GeometricBackground() {
//   type ShapeType = 'hexagon' | 'triangle' | 'square' | 'circle' | 'pentagon' | 'star' | 'octagon' | 'parallelogram' | 'diamond';

// interface Shape {
//   id: number
//   type: ShapeType
//   position: {
//     x: number
//     y: number
//   }
//   size: number
//   rotationSpeed: number
// }

//   const generateShapes = (): Shape[] => 
//     Array.from({ length: 30 }, (_, i) => ({
//       id: i,
//       type: ['hexagon', 'triangle', 'square', 'circle', 'pentagon', 'star', 'octagon', 'parallelogram', 'diamond'][Math.floor(Math.random() * 9)] as ShapeType,
//       position: {
//         x: Math.random() * 100,
//         y: Math.random() * 100
//       },
//       size: 30 + Math.random() * 50,
//       rotationSpeed: 15 + Math.random() * 25
//     }))
  
//   const shapeStyles: Record<ShapeType, string> = {
//     hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
//     triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
//     square: '',
//     circle: '',
//     pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
//     star: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
//     octagon: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
//     parallelogram: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
//     diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
//   }
  
//   const [shapes, setShapes] = useState<Shape[]>([])

//   useEffect(() => {
//     setShapes(generateShapes())
//   },[])

//   if (shapes.length === 0) {
//     return null // or a loading placeholder
//   }

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {shapes.map((shape) => (
//         <motion.div
//           key={shape.id}
//           className="absolute"
//           initial={{
//             left: `${shape.position.x}%`,
//             top: `${shape.position.y}%`,
//             rotate: 0,
//             scale: 0
//           }}
//           animate={{
//             rotate: 360,
//             scale: [1, 1.2, 1],
//             filter: ['hue-rotate(0deg)', 'hue-rotate(180deg)', 'hue-rotate(360deg)'],
//           }}
//           transition={{
//             duration: shape.rotationSpeed,
//             repeat: Infinity,
//             ease: "linear"
//           }}
//         >
//           <div 
//             className={`bg-primary/30 backdrop-blur-md border border-primary/50 shadow-lg ${shape.type === 'circle' ? 'rounded-full' : shape.type === 'square' ? 'rounded-md' : ''}`}
//             style={{
//               width: shape.size,
//               height: shape.size,
//               clipPath: shapeStyles[shape.type],
//               boxShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)'
//             }}
//           />
//         </motion.div>
//       ))}
//     </div>
//   )
// }



