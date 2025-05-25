
import "./Team.css";
import TeamDirectory from "../components/teamPage/TeamDirectory";
import { Link } from "react-router-dom";
import NewCustomSidebar from "../components/navbar/NewCustomSidebar";
import TeamHeader from "../components/teamPage/TeamHeader";


export default function Team(){


  return(
    <>
   <div className= "page-container">

    <TeamHeader/>
    <NewCustomSidebar/>
    <TeamDirectory/>

    </div>
    </>
  )

}