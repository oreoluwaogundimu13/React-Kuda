import React from 'react'
import image from '../personal.png'
import image2 from '../card.png'
import image3 from '../send.png'
import image4 from '../chain.png'


const Personal = () => {
  return (
    <div className='bg-purple-50'>
    <div className='flex px-[9rem] gap-10'>
    <aside className='my-[7rem]'>
          <h1 className='text-5xl font-bold text-purple-950'>Send money for free airtime.</h1>
          <p className='my-5 font-semibold text-xl'>Your Kuda account comes with 25 free <br/> transfers to other banks every month.<br/> That’s up to 15,000 naira saved on <br/> transfers every year.</p>
          <button className='bg-purple-950 text-white px-7 py-2 rounded-md font-semibold'>Join Kuda</button>
     </aside>
     <aside>
          <img src={image} alt='' width='900'/>
     </aside>
    </div>
    <div className='flex justify-evenly'>
      <div className='w-[30%] h-30 bg-slate-100 px-10 py-6 rounded-lg'>
        <div className='bg-purple-400 w-10 rounded-full'>
          <img src={image2} alt='' width='30'/>
        </div>
        <p className='my-5 text-purple-950 font-semibold'>Withdraw cash for payments free<br/>of charge at over 3,000 ATMs.</p>
      </div>
      <div className='w-[30%] h-30 bg-slate-100 px-10 py-6 rounded-lg'>
      <div className='bg-purple-300 rounded-full w-10 justify-center'>
           <img src={image3} alt='' width='30'/>
      </div>
      <p className='my-5 text-purple-950 font-semibold'>Get 25 free transfers on the first<br/> day of every month.</p>

      </div>
      <div className='w-[30%] h-30 bg-slate-100 px-10 py-6 rounded-lg'>
        <div className='bg-purple-400 rounded-full w-10'>
             <img src={image4} alt='' width='30'/>
        </div>
        <p className='my-5 text-purple-950 font-semibold'>Send money free of charge without<br/>an account number.</p>
      </div>
    </div>
      

    </div>
  )
}

export default Personal