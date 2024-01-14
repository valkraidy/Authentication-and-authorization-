import Login from "./component/Login";
import Logout from "./component/Logout";
import Profile from "./component/Profile"



const App = () => {
  return (
    <main>
      <h1>Welcome to Auth0 app</h1>
      <Login/>
      <Logout/>
      <Profile/>


    </main>
  )
}

export default App