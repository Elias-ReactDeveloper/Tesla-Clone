import Model from "./components/Model"
import GlobalStyle from './GlobalCss'
import Navbar from "./components/Navbar"

import produtos from "./data/produtos.json"

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      
      <Navbar />

      {
        produtos.map((produto, indice) => 
          <Model produto={produto} indice={indice} key={produto.id} />
        )
      }
    </div>
  )
}

export default App
