import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




// Implement a simple pseudo-random number generator
export type ShapeType = 'hexagon' | 'triangle' | 'square' | 'circle' | 'pentagon' | 'star' | 'octagon' | 'parallelogram' | 'diamond';

export interface Shape {
  id: number
  type: ShapeType
  position: {
    x: number
    y: number
  }
  size: number
  rotationSpeed: number
  clipPath: string
}

const shapeStyles: Record<ShapeType, string> = {
  hexagon: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
  triangle: 'polygon(50% 0%, 100% 100%, 0% 100%)',
  square: '',
  circle: '',
  pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
  star: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
  octagon: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
  parallelogram: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
  diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
}

class Random {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 1664525 + 1013904223) % 2147483647;
    return this.seed / 2147483647;
  }
}

export function generateShapes(): Shape[] {
  const random = new Random(12345) // Use a fixed seed
  return Array.from({ length: 30 }, (_, i) => {
    const type = ['hexagon', 'triangle', 'square', 'circle', 'pentagon', 'star', 'octagon', 'parallelogram', 'diamond'][Math.floor(random.next() * 9)] as ShapeType
    return {
      id: i,
      type,
      position: {
        x: random.next() * 100,
        y: random.next() * 100
      },
      size: 30 + random.next() * 50,
      rotationSpeed: 15 + random.next() * 25,
      clipPath: shapeStyles[type]
    }
  })
}




