import Head from 'next/head'
import Link from 'next/link'
import { Eye, MoreVertical } from 'react-feather'
import users from '../data/array_users.json';
import AuthLayout from '../layouts/AuthLayout';

export default function Users() {
  return (
    <>
      <Head>
        <title key="title">Lista de usuarios | Technical Test Hiberus</title>
      </Head>

      <h1 className="text-xl text-white mb-4">Listado de usuarios</h1>
      <ul>
        {users.items.map(user => (
          <li className="rounded-lg bg-white bg-opacity-5 mb-2" key={user.id}>

            <div className="flex items-center py-4 px-4">
              <div className="flex-shrink-0 h-10 w-10">
                <div className="h-10 w-10 rounded-full bg-white bg-opacity-10"></div>
              </div>
              <div className="mx-4">
                <div className="text-sm font-medium text-gray-200">
                  {user.name} {user.surname}
                </div>
                <div className="text-sm text-gray-200">
                  {user.email}
                </div>
              </div>
              <div className="ml-auto flex gap-2">
                <Link href={`/${user.id}`}>
                  <a className="flex py-2 px-2 bg-white bg-opacity-5 rounded-2xl">
                    <Eye className="text-gray-200" />
                  </a>
                </Link>
                <Link href={`/${user.id}`}>
                  <a className="flex py-2 px-2 bg-white bg-opacity-5 rounded-2xl">
                    <MoreVertical className="text-gray-200" />
                  </a>
                </Link>
              </div>
            </div>

          </li>
        ))}
      </ul>
    </>
  )
}

Users.getLayout = (page) => (
  <AuthLayout>
    {page}
  </AuthLayout>
)