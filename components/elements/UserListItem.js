import Link from 'next/link'
import { Eye, MoreVertical } from 'react-feather'

export default function UserListItem({ user }) {

  console.log(user)

  return (
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
        <Link href={`/user/${user.id}`}>
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
  );
}




