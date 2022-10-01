import React from 'react'

const Profile = (props) => {
   
  return (
    <>
    <div >{props.children}</div>
    <button  onClick={()=>props.handleClick(props.fullName)}> Click me</button>
</>
  )
}

export default Profile