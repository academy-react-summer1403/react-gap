import React from 'react'

const MyService = () => {
  return (
    <div className=' w-screen h-[500px] border-2 border-black ' >

      <div>
        <div className='  h-[100px] border-2 text-center border-red-400'>

          <h1 className='text-[#22445D;] text-2xl' > خدمات ما </h1>
          <br />
          <p className='text-[#22445D;] '> ما فرصت آماده شدن براِی زندگی را فراهم می کنیم </p>

        </div>

      </div>



      <div className='flex flex-wrap gap-4 border-2 justify-between border-blue-500 w-[80%] mx-auto'>
        <div className='border-2 border-red-500 w-1/4'>1</div>
        <div className='border-2 border-red-500 w-1/4'>2</div>
        <div className='border-2 border-red-500 w-1/4'>3</div>
        <div className='border-2 border-red-500 w-1/4'>4</div>
        <div className='border-2 border-red-500 w-1/4'>5</div>
        <div className='border-2 border-red-500 w-1/4'>6</div>
      </div>






    </div>
  )
}

export default MyService
