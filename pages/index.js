import Head from 'next/head'
import UserListItem from '../components/elements/UserListItem'
import { User } from 'react-feather';
import useSWR from 'swr';
import { useState, useEffect } from 'react';

export default function Users() {

  const [users, setUsers] = useState()

  /*const fetcher = async () =>
    await fetch({
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.TOKEN}`
      }
    }).then(response => response.json())


  const { data } = useSWR(`${process.env.BASE_URL}/api/v1/users`, fetcher)

  console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users`)*/

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_TOKEN}`
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUsers(data)
      });
  }, [])


  return (
    <>
      <Head>
        <title key="title">Lista de usuarios | Technical Test Hiberus</title>
      </Head>

      <h1 className=" flex justify-between items-center text-xl text-white mb-4">
        <span>Listado de usuarios</span>
        <span className="bg-white bg-opacity-5 px-2 py-1 rounded-lg flex items-center text-lg"><User size="18" className="mr-2" /> {users && users.count}</span>
      </h1>
      <ul>
        {users && users.items.map(user => (
          <li className="rounded-lg bg-white bg-opacity-5 mb-2" key={user.id}>
            <UserListItem user={user} />
          </li>
        ))}
      </ul>
    </>
  )
}