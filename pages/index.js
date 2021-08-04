import Head from 'next/head'
import users from '../data/array_users.json';
import Layout from '../layouts/Layout';
import UserListItem from '../components/elements/UserListItem'
import { User } from 'react-feather';

export default function Users() {
  return (
    <>
      <Head>
        <title key="title">Lista de usuarios | Technical Test Hiberus</title>
      </Head>

      <h1 className=" flex justify-between items-center text-xl text-white mb-4">
        <span>Listado de usuarios</span>
        <span className="bg-white bg-opacity-5 px-2 py-1 rounded-lg flex items-center text-lg"><User size="18" className="mr-2" /> {users.count}</span>
      </h1>
      <ul>
        {users.items.map(user => (
          <li className="rounded-lg bg-white bg-opacity-5 mb-2" key={user.id}>
            <UserListItem user={user} />
          </li>
        ))}
      </ul>
    </>
  )
}

Users.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)