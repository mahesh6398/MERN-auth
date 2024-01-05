import {useSelector} from 'react-redux';
import React from 'react'

function Profile() {
  const {currentUser}= useSelector(state => state.user)
   return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img src={currentUser.profilePicture} alt='profiel' className='h-24 w-24 self-center cursor-pointer rounded-full object-cover mt-2'/>
        <input type='text' defaultValue={currentUser.name} id='username' className='bg-slate-100 rounded-lg p-3' placeholder='username'/>
        <input type='email'  defaultValue={currentUser.email} id='email' className='bg-slate-100 rounded-lg p-3' placeholder='Email'/>
        <input type='password'   id='password' className='bg-slate-100 rounded-lg p-3' placeholder='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
