import { useState } from 'react'
import './App.css'
import MemberCard from './components/MemberCard'

const membersData = {
  renji:{name:"Renji", img_source:"https://i.postimg.cc/sgBkfbtx/img-1.jpg"},
  sora:{name:"Sora", img_source:"https://i.postimg.cc/3RZ6bhDS/img-2.jpg"}
}


function App() {

  return (
    <div className='container'>
      <MemberCard img_source={"https://i.postimg.cc/KjqWx5ft/img-4.jpg"}/>
    </div>
  )
}

export default App
