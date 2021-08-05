import BtnAction from '../elements/BtnAction'
import { useForm } from 'react-hook-form'
import { useState } from 'react';
import { Save } from 'react-feather';
import { useRouter } from "next/router"
import toast, { Toaster } from 'react-hot-toast';

export default function UserForm({ data }) {

  const router = useRouter()
  const { uid } = router.query

  if (router.pathname.includes("/edit")) {
    var pathSection = "edit";
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [accountCreated, setAccountCreated] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const createUser = (data) => {
    setError(null);
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/auth/sign-up`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        setIsLoading(false)
        if (response.status && response.status == 409) {
          setError('Ya existe una cuenta con este email');
        } else if (response.status && response.status == 204) {
          console.log('creado')
          setAccountCreated(true);
        }
      });
  };

  const updateUser = (data) => {
    try {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/users/${uid}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${sessionStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({
          "email": data.email,
          "password": data.password,
          "name": data.name,
          "surname": data.surname,
          "id": uid
        })
      })
        .then((response) => response.json())
        .then(() => {
          toast.success('Usuario actualizado correctamente')
        })
    }
    catch (error) {
      setError(error);
    };
  };


  const onSubmit = (data) => {
    setAccountCreated(false)
    if (pathSection == "edit") {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <form className="max-w-xs m-auto mt-8 mb-8" onSubmit={handleSubmit(onSubmit)}>
        {accountCreated && (
          <div className="form-general-success">
            <span>Tu cuenta se ha creado correctamente</span>
          </div>
        )}
        {error && (
          <div className="form-general-error">
            <span>{error}</span>
          </div>
        )}
        <div className="flex items-center">
          <div className="mb-4 w-1/3">
            <label htmlFor="name" className="block text-gray-400 mb-2 uppercase">
              Nombre
            </label>
            <input
              id="name"
              className="styled"
              type="text"
              name="name"
              defaultValue={data && data.name ? data.name : ""}
              {...register('name', {
                required: 'Nombre requerido',
                pattern: {
                  value: /^[A-zÀ-ú]+$/i,
                  message: 'Formato de nombre inválido',
                },
              })}
            />
            {errors.name && (
              <div className="form-validation-error">
                {errors.name.message}
              </div>
            )}
          </div>
          <div className="mb-4 w-2/3 pl-4">
            <label htmlFor="surname" className="block text-gray-400 mb-2 uppercase">
              Apellido
            </label>
            <input
              id="surname"
              className="styled"
              type="text"
              name="surname"
              defaultValue={data && data.surname ? data.surname : ""}
              {...register('surname', {
                required: 'Apellido requerido',
                pattern: {
                  value: /^[A-zÀ-ú]+$/i,
                  message: 'Formato de Apellido inválido',
                },
              })}
            />
            {errors.surname && (
              <div className="form-validation-error">
                {errors.surname.message}
              </div>
            )}
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 uppercase" htmlFor="email">
            EMAIL
          </label>
          <input
            className="styled"
            id="email"
            name="email"
            type="email"
            defaultValue={data && data.email ? data.email : ""}
            {...register('email', {
              required: 'Email requerido',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Formato del email no válido',
              },
            })}
          />
          {errors.email && (
            <div className="form-validation-error">
              {errors.email.message}
            </div>
          )}
        </div>

        <div>
          <label className="block text-gray-400 mb-2 uppercase" htmlFor="password">
            Contraseña
          </label>
          <input
            className="styled"
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            defaultValue={data && data.password ? data.password : ""}
            {...register('password', {
              required: 'Contraseña requerida',
              minLength: {
                value: 6,
                message: 'Debe tener al menos 6 carácteres',
              },
            })}
          />
          {errors.password && (
            <div className="form-validation-error">
              {errors.password.message}
            </div>
          )}
        </div>
        {pathSection == "edit"
          ? <BtnAction
            icon={<Save size="18" className="mr-2" />}
            title="Guardar cambios"
            styles="mt-8 m-auto"
            type="submit"
          />
          : <BtnAction
            type="submit"
            styles="mt-8 m-auto"
            title="Crear cuenta"
            isLoading={isLoading}
          />
        }
      </form>
    </>
  );
}