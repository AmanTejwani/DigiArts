import { Header , Hero , ArtCollection , Transaction , Footer , CreateModal , DispalyNFT , UpdateNFT, Loading, Alert} from "./components"
import { useEffect } from 'react'
import { getAllNFTs, isWallectConnected } from './Blockchain.Services'
const App = () => {
  useEffect(async () => {
    await isWallectConnected()
    await getAllNFTs()
  }, [])
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
          <Hero />
        </div>
        <ArtCollection />
        <Transaction />
        <CreateModal />
        <Footer />
        <DispalyNFT />
        <UpdateNFT />
        <Loading />
        <Alert />
    </div>
  )
}

export default App
