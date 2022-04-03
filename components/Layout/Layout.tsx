import Header from '../Header/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}

export default Layout
