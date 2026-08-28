

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Shop from './pages/Shop'
import Login from './pages/Login'
import Register from './pages/Register'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'

function App() {

  return (
    <div className=''>
      <BrowserRouter>
          <Routes>
            <Route element={<Layout/>}>
              <Route path='/' element={<Shop />}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/product/:id' element={<ProductDetails/>}/>
              <Route path='/cart' element={<ShoppingCart/>}/>
            </Route>
            
          </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
