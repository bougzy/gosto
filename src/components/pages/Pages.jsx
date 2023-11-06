import { Header } from "../common/Header"
import { BrowserRouter as Routes, Route } from "react-router-dom"
import { Home } from "../home/Home"
import { Footer } from "../common/Footer"
import { Details } from "../home/details/Details"
import PropTypes from 'prop-types';

export const Pages = ({ cartItems }) => {
  return (
    <>
        <Header />
      <Routes>
          <Route exact path='/'>
            <Home cartItems={cartItems} />
          </Route>
          <Route exact path='/cart/:id'>
            <Details />
          </Route>
      </Routes>
        <Footer />
    </>
  )
}

Pages.propTypes = {
  cartItems: PropTypes.array.isRequired, 
};
