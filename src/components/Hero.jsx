import React from 'react'
import { setGlobalState, useGlobalState, truncate } from '../store'
const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const handleCreateNFT=()=>{
    setGlobalState('modal','scale-100')
  }
  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10">
      <div className="md:w-3/6 w-full">
        <div>
            <h1 className="text-white text-5xl font-bold">
                Buy and Sell <br /> Digital Arts, <br />
                <span className="text-gradient">NFTs</span> Collections
            </h1>
            <p className="text-gray-500 font-semibold text-sm mt-3">
                Mint and collect the newest collection of NFTs around.
            </p>
        </div>

        <div className="flex flex-row mt-5">
            <button className="shadow-xl shadow-black text-black bg-[#66ff33] hover:bg-[#00cc66] md:text-xs p-2 rounded-full cursor-pointer" onClick={handleCreateNFT}>
            Create NFT
            </button>
        </div>

      </div>

      <div className="shadow-xl shadow-black md:w-2/5 w-full mt-10 md:mt-0 rounded-md overflow-hidden bg-gray-800">
        <img src="https://d3lkc3n5th01x7.cloudfront.net/wp-content/uploads/2022/01/04221403/metaverse-virtual-world-1.png" alt="NFT DigiArt" className="h-60 w-full object-cover" />
        <div className="flex justify-start items-center p-3">
          <div>
            <p className="text-white font-semibold">
              {connectedAccount
                ? truncate(connectedAccount, 4, 4, 11)
                : 'Connect Your Wallet'}
            </p>
            <small className="text-green-800 font-bold">@you</small>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Hero
