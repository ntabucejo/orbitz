import { motion } from 'framer-motion'
import Image from 'next/image'

const Sun = () => {
  return (
    <motion.figure
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="relative aspect-square w-[10%] animate-spin-sun">
      <Image src="/images/sun.png" layout="fill" objectFit="cover" />
    </motion.figure>
  )
}
export default Sun
