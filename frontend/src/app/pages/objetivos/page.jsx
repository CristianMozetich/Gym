import React from 'react'
import ObjetiveForm from '../../components/ObjetiveForm/ObjetiveForm'

const page = () => {
  return (
    <div className='flex justify-center items-center flex-col m-3 '>
      <h1>Cuales son tus objetivos?</h1>
      <ObjetiveForm/>
    </div>
  )
}

export default page