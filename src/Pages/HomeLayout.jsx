import { Outlet, useNavigation } from 'react-router-dom'
import { Header, Navbar, GlobalLoading } from '../Components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <nav>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <GlobalLoading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </nav>
  )
}
export default HomeLayout
