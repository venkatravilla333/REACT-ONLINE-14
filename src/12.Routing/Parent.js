import React from 'react';
import Home from './Home';
// import About from './About'; //static
import Products from './Products';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import PageNotFound from './PageNotFound';
import ProductDetails from './ProductDetails';

const About = React.lazy(() => import('./About'));

function Parent() {
  var location = useLocation();
  return (
    <div className='container-div'>
      <Header />
      {/* {location.pathname !== '/about' && <Header />} */}
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route
            path='/about'
            element={
              <React.Suspense fallback='loading'>
                <About />
              </React.Suspense>
            }
          />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/products' element={<Products />}>
            <Route path=':id' element={<ProductDetails />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer/> */}

      {/* <Home/>
      <About/>
      <Products/> */}
    </div>
  );
}

export default Parent;
