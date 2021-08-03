import Head from 'next/head'
import Link from 'next/link'
import AuthLayout from '../layouts/AuthLayout'

export default function SignUp() {
  return (
    <>
      <Head>
        <title key="title">Sign Up | Technical Test Hiberus</title>
      </Head>

      {
        // Register form
      }

      <p className="mt-2 text-center text-md text-gray-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login">
          <a className="text-white">Inicia sesión</a>
        </Link>
      </p>
    </>
  )
}

SignUp.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)