
import CartContextProvider from "./components/shopping_cart_context.jsx"
import Nav from "./components/Nav.jsx"
import Header from "./components/Header.jsx"
import ItemsContainer from "./components/ItemsContainer.jsx"

function App() {


  return (
    <CartContextProvider>
      <Nav />
      <Header />
      <ItemsContainer />
    </CartContextProvider>
  )
}

export default App
