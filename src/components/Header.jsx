import React from 'react'
import DigiArtlogo from '../assets/DigiArtlogo.png'

const Header = () => {
  return (
    <nav className='w-4/5 flex md:justify-center justify-between items-center py-4 mx-auto'>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img
          className="w-32 cursor-pointer"
          src={DigiArtlogo}
          alt="Timeless Logo"
        />
      </div>    

      <ul
        className="md:flex-[0.5] text-white md:flex
        hidden list-none flex-row justify-between 
        items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Market</li>
        <li className="mx-4 cursor-pointer">Artist</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      <button className="shadow-xl shadow-black text-white bg-[#66ff33] hover:bg-[#00cc66] md:text-xs p-2 rounded-full cursor-pointer" >
          Connect Wallet
      </button>
    </nav>
  )
}

export default Header
