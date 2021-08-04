import { useRouter } from 'next/router'
import Head from 'next/head'
import useSWR from 'swr'
import BtnAction from '../../../components/elements/BtnAction'
import { CornerUpLeft, Save } from 'react-feather'
import UserForm from '../../../components/forms/UserForm'
import { useEffect, useState } from 'react'

export default function UserView() {

  const router = useRouter()
  const { uid } = router.query

  const [user, setUser] = useState()

  /*const fetcher = async () =>
    await fetch({
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    }).then(response => response.json())

  const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/${uid}`, fetcher)*/

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setUser(data)
      });
  }, [uid])

  return (
    <>
      <Head>
        <title key="title">Editando usuario | Technical Test Hiberus</title>
      </Head>

      <div className="flex flex-col items-center gap-6 py-4 px-4">
        <div className="flex-shrink-0 h-44 w-44">
          <div className="h-44 w-44 rounded-full bg-white bg-opacity-10"></div>
        </div>

        <UserForm data={user} />

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