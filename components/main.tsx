type TProps = { children: React.ReactNode }

const Main = ({ children }: TProps) => {
  return (
    <main>
      <div className="contain-page">{children}</div>
    </main>
  )
}

export default Main
