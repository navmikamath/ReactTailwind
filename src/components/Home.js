import React from 'react'

export default function Home() {
  return (
    <div>
        <main className="bg-blue-200 flex justify-around">
      <div className="main  py-40 pl-9">
      <div className="text-10xl">
                Hi There
      </div>
      <div className="my-4">
        <button className="bg-purple-800 px-3 py-2 rounded-2xl text-white hover:text-slate-900" >
            Click
        </button>
      </div>
      </div>
      <div className="flex pl-96 items-center ">
        <img src ="./images/bg.jpg" className='h-80 justify-end pl-96' alt=""/>
      </div>
    </main>
      
    </div>
  )
}
