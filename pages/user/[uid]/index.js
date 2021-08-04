import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import BtnAction from '../../../components/elements/BtnAction'
import { CornerUpLeft } from 'react-feather'

export default function UserView() {

  const router = useRouter()
  const { uid } = router.query

  const { data } = useSWR(`${process.env.BASE_URL}/api/v1/users/${uid}`)

  return (
    <>
      <Head>
        <title key="title">{data.name} | Technical Test Hiberus</title>
      </Head>

      <div className="flex flex-col items-center gap-6 py-4 px-4">
        <div className="flex-shrink-0 h-44 w-44">
          <div className="h-44 w-44 rounded-full bg-white bg-opacity-10"></div>
        </div>
        <div className="mx-4 flex flex-col items-center gap-6 mb-6">
          <div className="text-sm font-medium text-gray-200">
            {data.name} {data.surname} lorem
          </div>
          <div className="text-sm text-gray-200">
            {data.email} lorem
          </div>
        </div>

        <BtnAction
          onClick={() => router.back()}
          icon={<CornerUpLeft size="18" className="mr-2" />}
          title="Volver"
        />

      </div>

    </>
  )
};