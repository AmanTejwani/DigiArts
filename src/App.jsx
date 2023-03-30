import { Header , Hero , ArtCollection , Transaction} from "./components"
const App = () => {
  return (
    <div className="min-h-screen">
        <div className="gradient-bg-hero">
          <Header />
          <Hero />
        </div>
        <ArtCollection />
        <Transaction />
    </div>
  )
}

export default App
