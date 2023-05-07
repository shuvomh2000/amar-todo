import React from 'react'

const InputBox = ({title,type,placeholder}) => {
  return (
    <div className='mb-5'>
        <h4 className='font-regular text-2xl text-bl capitalize'>{title}</h4>
        <input className='bg-[#F5F5F5] w-full py-4 font-regular text-sm text-bl placeholder:capitalize placeholder:text-[#CECECE] border-b border-grey' type={type} placeholder={placeholder}/>
    </div>
  )
}

export default InputBox