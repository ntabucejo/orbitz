import cuid from 'cuid'
import Planet from '../schemas/planet'

class CreatePlanet implements Planet {
  id: string
  name: string
  image: string
  diameter: number
  orbitRadius: number
  constructor(id: string, name: string, image: string, diameter: number, orbitRadius: number) {
    this.id = id
    this.name = name
    this.image = image
    this.diameter = diameter
    this.orbitRadius = orbitRadius
  }
}

const planets: Planet[] = [
  {
    ...new CreatePlanet(cuid(), 'mercury', '/images/mercury.png', 6, 14),
  },
  {
    ...new CreatePlanet(cuid(), 'venus', '/images/venus.png', 9, 18),
  },
  {
    ...new CreatePlanet(cuid(), 'earth', '/images/earth.png', 8, 24),
  },
  {
    ...new CreatePlanet(cuid(), 'mars', '/images/mars.png', 5, 30),
  },
  {
    ...new CreatePlanet(cuid(), 'jupiter', '/images/jupiter.png', 13, 48),
  },
  {
    ...new CreatePlanet(cuid(), 'saturn', '/images/saturn.png', 8, 66),
  },
  {
    ...new CreatePlanet(cuid(), 'uranus', '/images/uranus.png', 3, 80),
  },
  {
    ...new CreatePlanet(cuid(), 'neptune', '/images/neptune.png', 3, 90),
  },
]

export default planets
