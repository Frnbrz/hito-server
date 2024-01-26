import { useState } from 'react'
import { Link } from 'react-router-dom'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log({
      email,
      password,
      confirmPassword
    })
  }

  return (
    <main>

      <div className="flex justify-center items-center flex-col ">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-2xl font-bold text-white">Inicia Sesión</h1>
        </div>
        <div className="max-w-xs">
          <form onSubmit={handleSubmit} noValidate>
            <input
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              className="border border-gray-300 rounded-md p-2 w-full mb-2"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button className="bg-blue-500 text-white rounded-md p-2 w-full mb-2" type="submit">
              Inicia Sesión
            </button>
          </form>
        </div>
        <div>
          <Link to="/login" className="text-blue-500">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Register
