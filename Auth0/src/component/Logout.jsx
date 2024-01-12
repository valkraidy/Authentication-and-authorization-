import { useAuth0 } from '@auth0/auth0-react'
import '../css/auth.css'

const Logout = () => {
    const {Logout , isAthenticated } = useAuth0 ();
  return (
   isAthenticated && (

    <button className='logout'  onClick={ () =>Logout  ()}>
Signout
    </button>
   ) 
  )
}

export default Logout