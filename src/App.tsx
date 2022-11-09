import Model from "./components/Model"
import GlobalStyle from './GlobalCss'
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Navbar />
      <Model />
    </div>
  )
}

export default App
