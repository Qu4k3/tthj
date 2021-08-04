import Layout from '../layouts/Layout'
import '../styles/globals.css'

export default function TechnicalTest({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}