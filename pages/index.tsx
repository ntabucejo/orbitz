import type { NextPage } from 'next'
import Layout from '../components/layout'
import Orbit from '../components/orbit'
import Planet from '../components/planet'
import Sun from '../components/sun'
import planets from '../data/planets'
import PlanetType from '../schemas/planet'

const Home: NextPage = () => {
  return (
    <Layout>
      <section className="h-full relative grid items-center justify-items-center">
        <Sun />
        {planets.map((planet: PlanetType, index: number) => (
          <Orbit
            key={planet.id}
            name={planet.name}
            orbitRadius={planet.orbitRadius}>
            <Planet
              image={planet.image}
              diameter={planet.diameter}
              index={index}
            />
          </Orbit>
        ))}
      </section>
    </Layout>
  )
}

export default Home
