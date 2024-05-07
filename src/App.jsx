import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cart,
  Checkout,
  Error,
  HomeLayout,
  Landing,
  Login,
  Orders,
  Products,
  Register,
  SingleProduct,
} from './Pages'
import { ErrorElement } from './Components'

// loader
import { loader as LandingLoader } from './Pages/Landing'
import { loader as SingleProductLoader } from './Pages/SingleProduct'
import { loader as ProductsLoader } from './Pages/Products'
// actions

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: LandingLoader,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader,
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },
      {
        path: '/orders',
        element: <Orders />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
