import { useAuth0 } from '@auth0/auth0-react'
import '../css/auth.css'

const Login = () => {
    const { loginWithRedirect  } = useAuth0 ();
  return (
  

    <button className='login' onClick={ () => loginWithRedirect ()}>
    Signin
    </button>
   
  )
}

export default Login