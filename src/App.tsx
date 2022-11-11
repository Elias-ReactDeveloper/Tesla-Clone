import Model from "./components/Model"
import GlobalStyle from './GlobalCss'
import Navbar from "./components/Navbar"

import carros from "./data/carros.json"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Navbar />

      {
        carros.map((carro) => <Model carro={carro} key={carro.id} />)
      }
    </div>
  )
}

export default App
