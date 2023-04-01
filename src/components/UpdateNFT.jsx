import { useGlobalState , setGlobalState , getGlobalState } from "../store";
import { useState } from "react";
import { FaTimes } from 'react-icons/fa'

import React from 'react'

const UpdateNFT = () => {
    
    const [updateModal]=useGlobalState('updateModal')
    const [price,setPrice] = useState('')
    
    const closeModal=()=>{
        setGlobalState('updateModal','scale-0')
        resetForm()
    }

    const handlePriceChange=(event)=>{
        setPrice(event.target.value)
     }
    const handleSubmit=(event)=>{
        event.preventDefault()
        if(!price || price<=0)
            return
        console.log(price)
        setGlobalState('updateModal','scale-0')
    }
    return (
        <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 transform transition-transform duration-300 ${updateModal}`}>
            <div className="bg-[#151c25] shadow-xl shadow-[#00cc66] rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
                <form className="flex flex-col">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row justify-between items-center">
                            <p className="font-semibold text-gray-400">NFT</p>
                            {/* <p className="font-semibold text-gray-400">{nft?.title}</p> */}
                        </div>
                        <button type="button" className="border-0 bg-transparent focus:outline-none" onClick={closeModal}>
                            <FaTimes className="text-gray-400" />
                        </button>
                    </div>

                    <div className="flex flex-row justify-center items-center rounded-xl mt-5">
                        <div className="shrink-0 rounded-xl overflow-hidden h-40 w-40">
                            {/* <img className="h-full w-full object-cover cursor-pointer" src={nft?.metadataURI} alt={nft?.title}/> */}
                            <img className="h-full w-full object-cover cursor-pointer" src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80' alt='Title'/>
                        </div>
                    </div>
                
                    <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
                        <input className="block w-full text-sm text-slate-500 bg-transparent border-0 focus:outline-none focus:ring-0" type="number" step={0.01} min={0.01} name="price" placeholder="Price (Eth)" onChange={handlePriceChange} value={price} required />
                    </div>

                    <button type="submit" onClick={handleSubmit} className="flex flex-row justify-center items-center w-full text-white text-md bg-[#66ff33] hover:bg-[#bd255f] py-2 px-5 rounded-full drop-shadow-xl border border-transparent hover:bg-transparent hover:text-white hover:border hover:border-[#66ff33] focus:outline-none focus:ring mt-5" >
                        Update NFT
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default UpdateNFT
