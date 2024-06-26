import { Form, Link, redirect } from 'react-router-dom'
import { SubmitBtn, FormInput } from '../Components'
import { customFetch } from '../Utils'
import { toast } from 'react-toastify'

export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  // console.log(formData, data)
  try {
    const response = await customFetch.post('/auth/local/register', data)
    // console.log(response)
    toast.success('account created successfully')
    return redirect('/login')
  } catch (error) {
    const errorMessage =
      error?.response?.data?.error?.message ||
      'please double check your credentials'

    toast.error(errorMessage)
    return null
  }
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Register</h4>
        <FormInput type="text" name="username" label="username" />
        <FormInput type="email" name="email" label="email" />
        <FormInput type="password" name="password" label="password" />
        <div className="mt-4">
          <SubmitBtn text="Register" />
        </div>
        <p className="text-center">
          Already a member
          <Link
            to="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Login
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Register
