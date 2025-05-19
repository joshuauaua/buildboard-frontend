
import "./Team.css";
import StartThread from "../components/teamPage/StartThread";
import TeamDirectory from "../components/teamPage/TeamDirectory";
import MessageBoard from "../components/teamPage/MessageBoard";


export default function Team(){


  return(
    <>
   <div className= "page-container">
    <header className="header-content">
    <h1 className="header-title">Team</h1>
    <StartThread/>
    </header>


    <TeamDirectory/>

    <MessageBoard/>



    </div>
    </>
  )

}