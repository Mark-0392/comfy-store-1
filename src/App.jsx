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
import { loader as CheckoutLoader } from './Pages/Checkout'
import { loader as OrdersLoader } from './Pages/Orders'
// actions
import { action as registerAction } from './Pages/Register'
import { action as loginAction } from './Pages/Login'
import { action as checkoutAction } from './Components/CheckoutForm'

import { store } from './store'
const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
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
        loader: OrdersLoader(store),
      },
      {
        path: '/checkout',
        element: <Checkout />,
        loader: CheckoutLoader(store),
        action: checkoutAction(store),
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
