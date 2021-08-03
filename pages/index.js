import Head from 'next/head'
import users from '../data/array_users.json';
import Layout from '../layouts/Layout';
import UserListItem from '../components/elements/UserListItem'

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