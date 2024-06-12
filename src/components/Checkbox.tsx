import React from 'react'
import "../styles/_checkbox.scss";
interface checkboxProps{
    name:string,
    label:string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, // Update prop type
    value:boolean
}

const Checkbox = ({name,label,onChange,value}:checkboxProps) => {
  return (
    <div className='checkboxContainer'>
      <input 
       id='checkbox'
       type="checkbox"
       checked={value}
       onChange={onChange}
       name={name}
      />
      <label htmlFor="checkbox">{label}</label>
    </div>
  )
}

export default Checkbox
