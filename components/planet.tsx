import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

type PlanetProps = {
  image: string
  diameter: number
  index: number
}

const Planet = ({ image, diameter, index }: PlanetProps) => {
  const styles = {
    width: `${diameter}%`,
    translateX: '-50%',
    translateY: '-50%',
    left: '50%',
  }
  return (
    <motion.figure
      initial={{ x: index % 2 ? '-100vh' : '100vw', scale: 0 }}
      animate={{ x: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      style={styles}
      className="relative aspect-square ">
      <Image src={image} layout="fill" objectFit="contain" priority />
    </motion.figure>
  )
}

export default Planet
