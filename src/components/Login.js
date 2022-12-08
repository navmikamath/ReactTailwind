import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'



export default function Login() {
  return (
    <div>
      <div className='absolute  bg-white  w-[1440px] h-[900px]'>
        <img src="./images/Image 2341.png" className='absolute w-[106px] h-9 rounded-m mt-14 ml-14'/>
        <p className='absolute text-t3 font-body mt-[63px] ml-[473px] text-[#171A1F]'>
          Dont have an account?
          <a className='text-primary-500 underline' href="https://tailwindcss.com">Sign up</a>
        </p>
         <b className="absolute mt-[235px] ml-[313px] font-heading text-t8 text-[#171A1F]">Sign in</b> 

                  {/*  form  */}
        <div className=" flex items-center justify-center mt-[329px] ml-[174px] absolute opacity-100">
        <div className="max-w-md w-full space-y-8">
          
          <form className=" space-y-5" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="flex flex-wrap">
              <div>
                <label htmlFor="email-address" className=" text-t3">
                  Email address
                </label>
                <div className="flex">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-[384px] h-[28px] px-3.5 font-body text-sm bg-[#F3F4F6] border-0 rounded-lg outline-none
                  hover:text-[#BDC1CAFF] hover:bg-[#F3F4F6]"
                  placeholder="Email address"
                />
                </div>
              </div>
              <div className='pt-7'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-[384px] h-[28px] pl-[14px] pr-[38px] font-body text-sm bg-[#F3F4F6] border-0 rounded-lg outline-none"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500
                  border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
        
      </div>


                  {/* end  */}
        

      <div className='bg-primary-500 mt-0 ml-[732px] w-[708px] h-[900px] rounded-none absolute'>
        <img src ="./images/Image 2342.png"  className='absolute  object-center ml-[148px] mt-[216px] w-[412px] h-[386px] rounded-none'/>
        <b className='absolute mt-[632px] ml-[218px] font-heading text-t7 text-white'>Voluptate dolor tempor</b>
        <small className='absolute mt-[672px] ml-[281px] font-body text-t3 text-white'>Minim cupidatat cillum</small>
      </div>
      </div>
    </div>
  )
}
