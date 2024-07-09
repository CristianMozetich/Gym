"use client"
import React from 'react'
import { Fetching } from '../../api/fetching';

const PersonalInfo = () => {
    const { personalInfo } = Fetching();
  return (
    <div>
      {
        personalInfo.map((info) => {
            return (
                <div key={info._id}>
                    <p>Peso: {info.peso}</p>
                    <p>Altura: {info.altura}</p>
                    <p>Edad: {info.edad}</p>
                    <p>Género: {info.sexo}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default PersonalInfo
