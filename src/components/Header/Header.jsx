import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setAmount } from '../../redux/reducers/productReducer';
import { images } from '../../assets/img';

export default function Header() {
  const { arrOrder } = useSelector((state) => state.productReducer);
  // console.log(productCart);
  const dispatch = useDispatch();
  // const action = setAmount
  return (
    <header className="header fixed-top">
      <div className="header-nav">
        <nav className="navbar">
          <div className="container">
            <NavLink className="navbar-brand header-left" to="/">
              <img src={images.logo} alt="hinhanh" />
            </NavLink>
            <div className="header-right">
              <NavLink className="header-search header-right_cart" to="/search">
                <i className="fa-solid fa-magnifying-glass"></i>
                <span className="header-right_search_text header-right_cart_count">Search</span>
              </NavLink>
              <NavLink className="header-right_cart" to="/carts">
                <i className="fa-solid fa-cart-arrow-down" />
                <span className="header-right_cart_count">({arrOrder?.length})</span>
              </NavLink>
              <NavLink className="header-right_text" id="login" to="/login">
                Login
              </NavLink>
              <NavLink className="header-right_text" to="/register">
                Register
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
      <div className="header-menu">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            {/* <a class="navbar-brand" href="#">Navbar</a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Men
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Women
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Kid
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Sport
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
