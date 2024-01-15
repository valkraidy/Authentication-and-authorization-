import { useAuth0 } from '@auth0/auth0-react'
import '../css/auth.css'

const Logout = () => {
    const {Logout} = useAuth0 ();
  return (
  

    <button className='logout'  onClick={ () =>Logout  ()}>
Signout
    </button>
   
  )
}

export default Logout