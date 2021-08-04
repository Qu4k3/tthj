import BtnAction from '../elements/BtnAction'
import { useForm } from 'react-hook-form';
import { useState } from 'react'

export default function LoginForm() {

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    setIsLoading(true);
    setError(null);
    fetch('http://51.38.51.187:5050/api/v1/auth/log-in', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
      .then(response => response.json())
      .then(data => {
        setIsLoading(false)
        if (data.statusCode && data.statusCode !== 200) {
          setError(data.message);
        } else {
          setIsLoading(true)
          console.log(data)
        }
      });
  };

  return (
    <form className="max-w-xs m-auto mt-8 mb-8" onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <div className="form-general-error">
          <span>{error}</span>
        </div>
      )}
      <div className="mb-4">
        <label className="block text-gray-400 mb-2 uppercase" htmlFor="email">
          Email
        </label>
        <input
          className="styled"
          id="email"
          name="email"
          type="email"
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
          {...register('password', {
            required: 'Contraseña requerida',
            minLength: {
              value: 6,
              message: 'Mínimo 6 carácteres'
            }
          })}
        />
        {errors.password && (
          <div className="form-validation-error">
            {errors.password.message}
          </div>
        )}
      </div>

      <BtnAction
        type="submit"
        styles="mt-8 m-auto flex"
        title="Iniciar sesión"
        isLoading={isLoading}
      />

    </form>
  );
}