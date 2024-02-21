import React from 'react'
import Main from '../layouts/Main'
import { useParams } from 'react-router-dom'
import { teamMembers } from '../data'


const Team = () => {
  const {id} = useParams();
  const member =teamMembers.find(member =>member.id === Number(id))

  return (
    <Main>
      <h1>Team Member: {member.name}</h1>
      <img src={member.img} /> 

    </Main>
   
  )
}

export default Team