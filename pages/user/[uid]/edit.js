import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import BtnAction from '../../../components/elements/BtnAction'
import { CornerUpLeft, Save } from 'react-feather'
import Layout from '../../../layouts/Layout'
import UserForm from '../../../components/forms/UserForm'

export default function UserView() {

  const router = useRouter()
  const { uid } = router.query

  const { data, error } = useSWR(`http://51.38.51.187:5050/api/v1/users/${uid}`)
  if (error) return <div className="swr-error">no se pudo cargar</div>
  if (!data) return <div className="swr-error">cargando...</div>

  return (
    <>
      <Head>
        <title key="title">Editando {data.name} | Technical Test Hiberus</title>
      </Head>

      <div className="flex flex-col items-center gap-6 py-4 px-4">
        <div className="flex-shrink-0 h-44 w-44">
          <div className="h-44 w-44 rounded-full bg-white bg-opacity-10"></div>
        </div>

        <UserForm data={data} />

        <BtnAction
          onClick={() => router.back()}
          icon={<CornerUpLeft size="18" className="mr-2" />}
          title="Volver"
          styles="border-none"
        />

      </div>

    </>
  )
};

UserView.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)