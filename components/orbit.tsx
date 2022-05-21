import { useEffect, useState } from 'react'

type OrbitProps = {
  children: React.ReactNode
  name: string
  orbitRadius: number
}

const Orbit = ({ children, name, orbitRadius }: OrbitProps) => {
  const [spin, setSpin] = useState('')

  useEffect(() => {
    switch (name) {
      case 'mercury':
        setSpin('animate-spin-mercury')
        break
      case 'venus':
        setSpin('animate-spin-venus')
        break
      case 'earth':
        setSpin('animate-spin-earth')
        break
      case 'mars':
        setSpin('animate-spin-mars')
        break
      case 'jupiter':
        setSpin('animate-spin-jupiter')
        break
      case 'saturn':
        setSpin('animate-spin-saturn')
        break
      case 'uranus':
        setSpin('animate-spin-uranus')
        break
      case 'neptune':
        setSpin(`animate-spin-neptune`)
        break
    }
  }, [])

  return (
    <div
      style={{ width: `${orbitRadius}%` }}
      className={`absolute aspect-square border-slate-800 rounded-full ${spin}`}>
      {children}
    </div>
  )
}

export default Orbit
