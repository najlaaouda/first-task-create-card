import { RiMoreLine } from "react-icons/ri";
import { GiWorld } from "react-icons/gi";

import './Card.css'
const Card =({
userimg,
name,
date,
desc,
postimg,
iconlike,
iconcomment,
iconshare,
children
})=>{
  return(
    <div className="card">
      <div className="header-card">
        <div className="user-info">
        <img src={userimg} alt="img-user"/>
        <div><h4 className="name-user">{name} </h4><span className="date">{date} <GiWorld /></span></div>
       
        </div>
       
        <div>
        <span className="icons"><RiMoreLine /></span>
        </div>
       
      </div>
      <p className="desc">{desc}{children}</p>
      <div className="card-img">
        <img src={postimg} alt="img-post"/>
      </div>
      <div className="active-icon">
        <span className="icons">{iconlike}</span><span className="title-icon"> like </span>
        <span className="icons">{iconcomment}</span><span className="title-icon"> comment</span>
        <span className="icons">{iconshare}</span><span className="title-icon"> share </span>
       
        
      </div>
     </div>
  )
}
export default Card;