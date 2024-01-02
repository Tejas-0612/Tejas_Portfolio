import React from 'react'


const SkillsCard = (props) => {
    console.log(props);
  return (
    <div className='mx-4 my-6'>
        <img src={props.logo}  className='mx-auto my-2 hover:scale-110'/>
        <h1>{props.label}</h1>
    </div>
  )
}

export default SkillsCard
