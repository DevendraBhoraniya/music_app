import React from 'react'
import { loginEndpoint } from './Spotify'

const Login = () => {
  return (
    <>
      <div className='bg-slate-900 h-[100vh] w-[100vw] flex items-center justify-center overflow-hidden flex-col gap-10'>
      <div className='text-white text-lg '>To enjoy Melody Please Login</div>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt="Spotify"
        className="w-[30%]"/>
        <a  href={loginEndpoint}>
        <div className="w-[100px] h-[30px] p-[15px 0px] bg-slate-400 rounded-lg text-slate-900 font-semibold text-center  ">LOG IN</div>
      </a>
      </div>
    </>
  )
}

export default Login
