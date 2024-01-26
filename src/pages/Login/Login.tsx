import { useFields } from '@/hooks'
import { PrivateRoutes, PublicRoutes, Roles } from '@/models'
import { UserKey, createUser, resetUser } from '@/redux/states/user'
import { getMorty } from '@/services'
import { clearLocalStorage } from '@/utilities'
import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
  }, [])

  const login = async () => {
    try {
      const result = await getMorty()
      dispatch(createUser({ ...result, rol: Roles.USER }))
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true })
    } catch (error) { }
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password')
    })
  }

  const username = useFields({ type: 'text', name: 'username', label: 'Username' })
  console.log(username.value)

  const password = useFields({ type: 'password', name: 'password', label: 'Password' })

  return (
    <main>

      <div className="flex justify-center items-center flex-col ">
        <div className="flex items-center justify-center flex-col">
          <img className="m-1 bg-secondary-main" />
          <h1 className="text-5xl text-white">Inicia Sesión</h1>
        </div>
        <div className="max-w-xs">
          <form onSubmit={handleSubmit} className="mt-1">
            <input
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              {...username}
              autoFocus
            />
            <input
              className="w-full mb-4 p-2 border border-gray-300 rounded"
              {...password}
              autoComplete="current-password"
            />
            <button
              onClick={login}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded mt-6"
            >
              Inicia Sesión
            </button>
          </form>
        </div>
        <div>
          <a href="register" className="text-blue-500">
            Create an account
          </a>
        </div>
      </div>
    </main>
  )
}
