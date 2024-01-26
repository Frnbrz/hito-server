import { PrivateRoutes, PublicRoutes } from '@/models'
import { UserKey, resetUser } from '@/redux/states/user'
import { AppStore } from '@/redux/store'
import { clearLocalStorage } from '@/utilities'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

export default function ButtonAppBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userState = useSelector((store: AppStore) => store.user)

  const logOut = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN, { replace: true })
  }
  return (
    <div className="flex justify-between items-center bg-gray-400 py-2 px-4">
      <div className="flex items-center">
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/2048px-Home-icon.svg.png' className="h-6 w-6 text-white mr-2" />
        <Link to={`/private/${PrivateRoutes.DASHBOARD}`} className="text-white text-lg">
          FBA
        </Link>
      </div>
      {userState.name ? (
        <>
          <nav>
            <Link to={`/private/${PrivateRoutes.HOME}`} className="text-white mr-4">
              Home
            </Link>
            <Link to={`/private/${PrivateRoutes.HOME}`} className="text-white mr-4">
              Home
            </Link>
            <Link to={`/private/${PrivateRoutes.HOME}`} className="text-white mr-4">
              Home
            </Link>
          </nav>
          <button
            className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded"
            onClick={logOut}
          >
            Logout
          </button>
        </>
      ) : null}
    </div>
  )
}