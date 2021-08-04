import Head from 'next/head'
import Link from 'next/link'
import LoginForm from '../components/forms/LoginForm'
import Layout from '../layouts/Layout'

export default function Login() {
  return (
    <>
      <Head>
        <title key="title">Login | Technical Test Hiberus</title>
      </Head>

      <LoginForm />

      <p className="mt-2 text-center text-md text-gray-500">
        ¿Aún no tienes cuenta?{' '}
        <Link href="/sign-up">
          <a className="text-white">Crear cuenta</a>
        </Link>
      </p>
    </>
  )
}

Login.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)