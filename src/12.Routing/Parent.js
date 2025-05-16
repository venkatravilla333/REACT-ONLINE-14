import React from 'react'
import Home from './Home'
import About from './About'
import Products from './Products'
import {Routes, Route, useLocation} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import PageNotFound from './PageNotFound'
import ProductDetails from './ProductDetails'

function Parent() {
 var location = useLocation()
  return (
    <div className='container-div'>
      {/* <Header/> */}
      {location.pathname !== '/about' && <Header/>}
      <Routes>
        <Route path='/home' element={<Home/> } />
        <Route path='/about' element={<About/> } />
        <Route path='*' element={<PageNotFound/> } />
        <Route path='/products' element={<Products/> } >
          <Route path=':id' element={<ProductDetails />} />
        </Route>
      </Routes>
      {/* <Footer/> */}
    
      {/* <Home/>
      <About/>
      <Products/> */}
    </div>
  )
}

export default Parent