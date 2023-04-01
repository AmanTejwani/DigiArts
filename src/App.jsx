import { Header , Hero , ArtCollection , Transaction , Footer , CreateModal , DispalyNFT , UpdateNFT} from "./components"
const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
          <Hero />
        </div>
        <ArtCollection />
        <Transaction />
        <Footer />
        <CreateModal />
        <DispalyNFT />
        <UpdateNFT />
        
    </div>
  )
}

export default App
