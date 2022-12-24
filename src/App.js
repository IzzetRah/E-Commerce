import React, { useState } from 'react'
import './App.css'
import Header from './common/header/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Pages from './pages/Pages'
import Data from './components/flashDeals/Data'
const App = () => {
  // step 1: fetch data from database
  const { productItems } = Data
  const [cartItem, setCartItem] = useState([])
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} />
          </Route>
        </Switch>
      </Router>
    </>
  )
}
export default App