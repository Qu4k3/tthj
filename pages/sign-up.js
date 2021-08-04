import Head from 'next/head'
import Link from 'next/link'
import UserForm from '../components/forms/UserForm'

export default function SignUp() {
  return (
    <>
      <Head>
        <title key="title">Sign Up | Technical Test Hiberus</title>
      </Head>

      <UserForm />

      <p className="mt-2 text-center text-md text-gray-500">
        ¿Ya tienes cuenta?{' '}
        <Link href="/login">
          <a className="text-white">Inicia sesión</a>
        </Link>
      </p>
    </>
  )
}