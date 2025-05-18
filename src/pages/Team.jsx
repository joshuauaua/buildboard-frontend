
import "./Team.css";
import StartThread from "../components/teamPage/StartThread";
import UserStack from "../components/teamPage/UserStack";




export default function Team(){


  return(
    <>
   <div className= "page-container">
    <header className="team-header">
    <h1>Team</h1>
    <StartThread/>
    </header>

    <UserStack/>


    </div>
    </>
  )

}