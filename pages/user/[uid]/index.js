import { useRouter } from 'next/router'
import Head from 'next/head'
import BtnAction from '../../../components/elements/BtnAction'
import { CornerUpLeft } from 'react-feather'
import { useState, useEffect } from 'react'

export default function UserView() {

  const router = useRouter()
  const { uid } = router.query

  const [user, setUser] = useState()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/${uid}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
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
        <title key="title">{user && user.name} | Technical Test Hiberus</title>
      </Head>

      <div className="flex flex-col items-center gap-6 py-4 px-4">
        <div className="flex-shrink-0 h-44 w-44">
          <div className="h-44 w-44 rounded-full bg-white bg-opacity-10"></div>
        </div>
        <div className="mx-4 flex flex-col items-center gap-6 mb-6">
          <div className="font-medium text-gray-200">
            {user && user.name} {user && user.surname}
          </div>
          <div className="text-gray-200">
            {user && user.email}
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