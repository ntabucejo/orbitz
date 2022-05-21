import Main from './main'

type TProps = { children: React.ReactNode }

const Layout = ({ children }: TProps) => {
  return (
    <div className="min-h-screen bg-slate-900 grid overflow-hidden">
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
