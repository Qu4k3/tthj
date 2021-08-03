import Link from 'next/link'
import { Edit3, Eye, MoreVertical, Trash } from 'react-feather'
import { Popover } from '@headlessui/react'
import { usePopper } from 'react-popper'
import { useState } from 'react';


export default function UserListItem({ user }) {

  let [referenceElement, setReferenceElement] = useState()
  let [popperElement, setPopperElement] = useState()
  let { styles, attributes } = usePopper(referenceElement, popperElement)

  return (
    <div className="flex items-center py-4 px-4">
      <div className="flex-shrink-0 h-10 w-10">
        <div className="h-10 w-10 rounded-full bg-white bg-opacity-10"></div>
      </div>
      <div className="mx-4 truncate">
        <div className="text-sm font-medium text-gray-200">
          {user.name} {user.surname}
        </div>
        <div className="text-sm text-gray-200">
          {user.email}
        </div>
      </div>
      <div className="ml-auto flex gap-2">
        <Link href={`/user/${user.id}`}>
          <a className="btn-item-list">
            <Eye className="text-gray-200" />
          </a>
        </Link>

        <Popover className="relative">
          <Popover.Button ref={setReferenceElement} className="btn-item-list"><MoreVertical className="text-gray-200" /></Popover.Button>

          <Popover.Panel
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
            className="absolute z-10"
          >
            <div className="popover">
              <a className="popover-item" href="/analytics"><Edit3 size="16" />Editar usuario</a>
              <a className="popover-item" href="/engagement"><Trash size="16" />Eliminar usuario</a>
            </div>
          </Popover.Panel>
        </Popover>

      </div>
    </div>
  );
}




