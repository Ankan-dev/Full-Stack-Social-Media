import React from 'react'

const OneTimePassword = () => {
  return (
    <div className='bg-[#72c6c6] w-[100vw] h-[100vh] flex items-center justify-center' style={{backgroundImage:'url("https://images.unsplash.com/photo-1548913344-66177da9425e?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%22")',backgroundSize:'cover',backgroundPosition:'center'}}>
      <form className='w-full h-full bg-[rgba(0,0,0,0.6)] flex flex-col justify-center items-center px-3 sm:w-[80%] sm:h-[50%] lg:w-[50%] sm:rounded-2xl'>
        <div className='w-full h-[15%] sm:h-[30%] lg:h-[40%] flex justify-center items-center  gap-3 mb-3'>
          <input type='password' className='w-[13%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
          <input type='password' className='w-[14.3%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
          <input type='password' className='w-[14.3%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
          <input type='password' className='w-[14.3%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
          <input type='password' className='w-[14.3%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
          <input type='password' className='w-[14.3%] h-[50%] border-2 border-[#72c6c6] bg-[rgba(0,0,0,0.6)] text-[#72c6c6] outline-none'/>
        </div>
        <button className='text-[#72c6c6] border-2 border-[#72c6c6] px-5 py-1 sm:px-7 sm:py-2 sm:font-bold'>Verify Now</button>
      </form>
    </div>
  )
}

export default OneTimePassword