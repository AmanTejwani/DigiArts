const Transaction = () => {
  return (
    <div className="bg-[#151c25]">
         <div className="w-4/5 py-10 mx-auto">
            <h4 className="text-white text-3xl font-bold uppercase text-gradient">
                Latest Transactions
            </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                    {Array(3)
                        .fill()
                        .map((tran_hist,i)=>(
                            <TransactionHistory key={i} tran_hist={i+1} />
                        ))
                    }
                </div>
                <div className="text-center my-5">
                    <button className="shadow-xl shadow-black text-white bg-[#66ff33] hover:bg-[#00cc66] rounded-full cursor-pointer p-2">
                        Load More
                    </button>
                </div>
         </div>
    </div>
  )
}

const TransactionHistory = ({tran_hist}) =>{
    return(
    <div div className="flex justify-between items-center border border-green-500 text-gray-400 w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <div>
            <h4 className="text-sm">#{tran_hist} Fund Transfered</h4>
            <small className="flex flex-row justify-start items-center">
                <span className="mr-1">Received by</span>
                <a href="#"  target="_blank" className="text-green-500 mr-2"> 0x31...037e </a>
            </small>
        </div>
        <p className="text-sm font-medium">0.25 ETH</p>
    </div> 
    )
}
export default Transaction
