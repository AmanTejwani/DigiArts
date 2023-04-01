import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalState, setGlobalState, getGlobalState } from '../store'
const DispalyNFT = () => {
    const [showModal] = useGlobalState('showModal')
    const [updateModal] = useGlobalState('updateModal')
    const handleChangePrice = () => {
        setGlobalState('showModal', 'scale-0')
        setGlobalState('updateModal', 'scale-100')
        console.log('on change price');
    }
    const handlePurchaseNFT = () => {
        setGlobalState('showModal', 'scale-0')
        console.log('on Purchase NFT');
    }
  return (
      <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${showModal}`}>
        <div className="bg-[#151c25] shadow-xl shadow-[#00cc66] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
            <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-semibold text-gray-400">Buy NFT</p>
                    <button type="button" onClick={() => setGlobalState('showModal', 'scale-0')} className="border-0 bg-transparent focus:outline-none">
                        <FaTimes className="text-gray-400" />
                    </button>
                </div>
                
                <div className="flex flex-row justify-center items-center rounded-xl mt-5">
                    <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
                        {/* <img className="h-full w-full object-cover cursor-pointer" src={nft?.metadataURI} alt={nft?.title}/> */}
                        <img className="h-full w-full object-cover cursor-pointer" src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80' alt='Title'/>
                    </div>
                </div>

                <div className="flex flex-col justify-start rounded-xl mt-5">
                    {/* <h4 className="text-white font-semibold">{nft?.title}</h4> */}
                    <h4 className="text-white font-semibold">Lorem</h4>
                    <p className="text-gray-400 text-xs my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptate quis totam quo adipisci, earum, exercitationem vel fugiat dolorum praesentium, fuga excepturi. Quidem esse et debitis eum deleniti amet. Inventore?</p>
                    {/* <p className="text-gray-400 text-xs my-1">{nft?.description}</p> */}
                    <div className="flex justify-between items-center mt-3 text-white">
                        <div className="flex justify-start items-center">
                            <div className="flex flex-col justify-center items-start">
                                <small className="text-white font-bold">@owner</small>
                                {/* <small className="text-pink-800 font-semibold"> {nft?.owner ? truncate(nft.owner, 4, 4, 11) : '...'} */}
                                <small className="text-white-800 font-semibold"> address
                                </small>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <small className="text-xs">Current Price</small>
                            {/* <p className="text-sm font-semibold">{nft?.cost} ETH</p> */}
                            <p className="text-sm font-semibold">0.25 ETH</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center space-x-2">
                    {/* {connectedAccount == nft?.owner ? ( */}
                    <button className="flex flex-row justify-center items-center w-full text-white text-md bg-[#66ff33]  py-2 px-5 rounded-full   drop-shadow-xl border hover:bg-[#bd255f] hover:bg-transparent hover:text-white  focus:outline-none focus:ring mt-5" onClick={handleChangePrice}>
                        Change Price
                    </button>
                    {/* ) : ( */}
                    <button className="flex flex-row justify-center items-center w-full text-white text-md bg-[#66ff33]  py-2 px-5 rounded-full   drop-shadow-xl border hover:bg-[#bd255f] hover:bg-transparent hover:text-white  focus:outline-none focus:ring mt-5" onClick={handlePurchaseNFT}>
                        Purchase Now
                    </button>
                    {/* )} */}
                </div>
            </div>
        </div>
      </div>
  )
}

export default DispalyNFT
