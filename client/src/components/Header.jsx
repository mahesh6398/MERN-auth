import React from 'react'
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux'
function Header() {
  const {currentUser} = useSelector(state => state.user) 
  return (
    <div className='bg-slate-200'>
      <div className='flex justify-between items-center mx-10 p-5 '>
        <h1 className='font-bold'><Link to={'/'}>MY APP</Link></h1>
        <ul className='flex gap-4'>
           <Link to={'/'}><li>Home</li></Link>
             <Link to={'/about'}><li>About</li></Link>
           <Link to = {'/profile'}>
            {currentUser ? 
            (<img src={currentUser.profilePicture} alt="profile" className='h-8 w-8 rounded-full object-cover'/>):(<li>SignIn</li>)
            }
            </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header

