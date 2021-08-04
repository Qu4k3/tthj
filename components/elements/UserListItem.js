import Link from 'next/link'
import { Edit3, Eye, MoreVertical, Trash } from 'react-feather'
import { Popover, Dialog } from '@headlessui/react'
import { useState, useRef } from 'react';
import BtnAction from './BtnAction';
import toast, { Toaster } from 'react-hot-toast';


export default function UserListItem({ user }) {

  let [isDialogOpen, setIsDialogOpen] = useState(false)
  let deleteButtonRef = useRef(null)

  function closeDialog() {
    setIsDialogOpen(false)
  }

  function openDialog() {
    setIsDialogOpen(true)
  }

  function handleDeleteUser() {
    closeDialog()
    toast.success('Eliminado')

    /*
        try {
          fetch(`/api/v1/users/${user.id}`, {
            method: 'DELETE'
          })
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
            })
            .then(() => {
              addToast("Colección eliminada", {
                appearance: 'success',
                autoDismiss: true,
              })
            })
        }
        catch (error) {
          addToast(error, {
            appearance: 'error',
            autoDismiss: true,
          })
        };*/

  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Dialog
        initialFocus={deleteButtonRef}
        open={isDialogOpen}
        onClose={closeDialog}
        className="fixed z-10 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <div className="bg-main rounded-xl max-w-sm mx-auto p-8 text-white fixed z-20">

            <Dialog.Title className="text-2xl font-bold text-center mb-4">Eliminar usuario</Dialog.Title>

            <p className="text-center mb-4">
              ¿Estás seguro de que quieres eliminar a <span className="font-bold">{`${user.name} ${user.surname}`}</span>?
            </p>
            <p className="text-sm text-center mb-2">Su registro se eliminará permanentemente. </p>
            <p className="text-sm text-center mb-2">Esta acción no se puede deshacer.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <BtnAction
                onClick={closeDialog}
                type="button"
                title="Cancelar"
                styles="border-0"
              />
              <BtnAction
                ref={deleteButtonRef}
                onClick={handleDeleteUser}
                type="button"
                title="Eliminar"
              />
            </div>
          </div>
        </div>
      </Dialog>
      <div className="flex items-center py-4 px-4">
        <div className="flex-shrink-0 h-10 w-10">
          <div className="h-10 w-10 rounded-full bg-white bg-opacity-10"></div>
        </div>
        <div className="mx-4 overflow-ellipsis overflow-hidden">
          <div className="text-sm font-medium text-gray-200 truncate">
            {user.name} {user.surname}
          </div>
          <div className="text-sm text-gray-200 truncate">
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
            <Popover.Button className="btn-item-list"><MoreVertical className="text-gray-200" /></Popover.Button>

            <Popover.Panel
              className="absolute z-10 right-12 top-0"
            >
              <div className="popover">
                <a className="popover-item" href={`/user/${user.id}/edit`}><Edit3 size="16" />Editar usuario</a>
                <button className="popover-item" onClick={openDialog}><Trash size="16" />Eliminar usuario</button>
              </div>
            </Popover.Panel>
          </Popover>

        </div>


      </div>
    </>
  );
}




