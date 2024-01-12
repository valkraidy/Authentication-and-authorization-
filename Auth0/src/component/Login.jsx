import { useAuth0 } from '@auth0/auth0-react'
import '../css/auth.css'

const Login = () => {
    const { loginWithRedirect , isAthenticated } = useAuth0 ();
  return (
   !isAthenticated && (

    <button className='login' type="submit" onClick={ () => loginWithRedirect ()}>
    Signin
    </button>
   ) 
  )
}

export default Login