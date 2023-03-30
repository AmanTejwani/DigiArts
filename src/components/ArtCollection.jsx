import React from 'react'
// import imageHero from 'https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'
const ArtCollection = () => {
  return (
    <div className="bg-[#151c25] gradient-bg-artworks">
        <div className="w-4/5 py-10 mx-auto">
            <h4 className="text-white text-3xl font-bold uppercase text-gradient">
            {/* {collection.length > 0 ? 'Latest Artworks' : 'No Artworks Yet'} */}
                Latest Artworks
            </h4>      

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5">
                {Array(4)
                    .fill()
                    .map((nft,i)=>(
                        <Card key={i} nft={i+1} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

const Card = ({ nft }) => {  
    return (
      <div className="w-full shadow-xl shadow-black rounded-md overflow-hidden bg-gray-800 my-2 p-3">
        <img src='https://images.cointelegraph.com/images/1434_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDYvNGE4NmNmOWQtODM2Mi00YmVhLThiMzctZDEyODAxNjUxZTE1LmpwZWc=.jpg'
          alt={'NFT image'}
          className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
        />
        {/* <img src={nft.metadataURI}
          alt={nft.title}
          className="h-60 w-full object-cover shadow-lg shadow-black rounded-lg mb-3"
        /> */}
        <h4 className="text-white font-semibold">NFT #{nft}</h4>
        {/* <p className="text-gray-400 text-xs my-1">{nft.description}</p> */}
        <p className="text-gray-400 text-xs my-1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque placeat officia corrupti omnis quos veritatis enim incidunt eum, sequi ut id sit minima nam modi praesentium aliquid ipsum est earum!
        </p>

        <div className="flex justify-between items-center mt-3 text-white">  
          <div className="flex flex-col">
            <small className="text-xs">Current Price</small>
            {/* <p className="text-sm font-semibold">{nft.cost} ETH</p> */}
            <p className="text-sm font-semibold">0.25 ETH</p>
          </div>
          <button className="shadow-lg shadow-black text-white bg-[#66ff33] hover:bg-[#00cc66] px-1.5 py-1 rounded-full cursor-pointer" >
            View Details
          </button>
        </div>
      </div>
    )
  }

export default ArtCollection
