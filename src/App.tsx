import Model from "./components/Model"
import GlobalStyle from './GlobalCss'
import Navbar from "./components/Navbar"

import model3 from './assets/model-3.jpg'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Navbar />
      <Model bgImg={model3} />

      Outros components
    </div>
  )
}

export default App
