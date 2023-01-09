import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'



export default function Login() {
  return (
  <div>
  <section className="h-full gradient-form bg-white md:h-screen">
  <div className="container py-12 px-6 h-full">
    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
      <div className="xl:w-10/12">
        <div className="block bg-white shadow-lg rounded-lg">
          <div className="lg:flex lg:flex-wrap g-0">
            <div className="lg:w-6/12 px-4 md:px-0">
              <div className="md:p-12 md:mx-6">
                <div className="text-center">
                  <img
                    className=" w-[106px]"
                    src="./images/Image 2341.png"
                    alt="logo"
                  />
                  
                </div>
                <form>
                  <p className="mb-4 font-heading text-t8 text-center">Sign In</p>
                  <div className="mb-4">
                    <input
                      type="text"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="password"
                      className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlInput1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="text-center pt-1 mb-12 pb-1">
                  <button
                type="submit"
                className="w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-info-400 hover:bg-info-450
                focus:outline-none 
                focus:ring-info-500"
              >
                <span className="left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true" />
                </span>
                Sign in
              </button>
                    <a className="text-gray-500" href="#!">Forgot password?</a>
                  </div>
                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="inline-block bg-danger-300 px-6 py-2 border-2 text-white font-medium text-xs  uppercase rounded hover:bg-danger-250 focus:outline-none 
                      focus:ring-danger-350"
                     
                    >
                      Sign Up
                    </button>
                  </div>
                </form>

              </div>
            </div>
            
            <div
              className="lg:w-6/12 flex bg-primary-500 items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
              <div className="text-white px-4 py-6 md:p-12 md:mx-6 text-center">
              <img src ="./images/Image 2342.png"  className='object-center rounded-none w-[412px]'/>
                <b className="font-heading text-t7 text-white ">
                Voluptate dolor tempor
                </b>
                <div>
                <small className='font-body text-t3 text-white'>Minim cupidatat cillum</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </div>

      
   
  )
}
