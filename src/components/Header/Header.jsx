import React, {useRef} from 'react'
import { Container , Row, Col} from 'reactstrap';
import { Link, NavLink } from 'react-router-dom';
import heroImg01 from "../../assets/all-images/cars-img/logo.jpg";
//import heroImg from '../../assets'

import '../../styles/header.css';

  const navLinks = [
    {
      path:'/home',
      display: 'Home'
    },
    
    {
      path:'/cars',
      display: 'Cars'
    },
    {
      path:'/create-booking',
      display: 'Add Booking'
    },
    { /**
  
      {
      path:'/booking-list',
      display: 'Booking List'
    },
  
  */}
    
    
  ]


 const Header = () => {

  const menuRef = useRef(null)
  const toggleMenu = ()=> menuRef.current.classList.toggle('menu__active')


  return (
    <>
    <header className="header">
      {/** =========== Header Top =============== */}

      <div className="header__top">
        <Container>
          <Row>
            <Col lg='6' md='6' sm='6'>
              <div className="header__top__left">
                <span>Need Help?</span>
                <span className="header__top__help">
                <i className='ri-phone-fill'></i>+966 55 898 9206, &nbsp;&nbsp;&nbsp;+92 313 0002348
                </span>
              </div>
            </Col>
            <Col lg='6' md='6' sm='6'>
              {/**
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
              <span>Email: </span>
                <span className="header__top__help">
                 <i className='ri-mail-fill'></i> mehmoodqadir04@gmail.com  
                </span>
              </div>
              */}
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to='/login' className='d-flex align-items-center gap-1'>
                  <i className='ri-login-circle-line'> Login</i>
                </Link>
                <Link to='/register' className='d-flex align-items-center gap-1'>
                  <i className='ri-user-line'>Register</i>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

    {/** =============== Header Middle ====================== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg='4' md='4' sm='4'>
              <div className="logo">
              <img src={heroImg01} alt='' width={100} height={100}  />
              </div>
            </Col>
           
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className='ri-earth-line'></i></span>
                <div className="header__location-content">
                  <h4>Hail Health Cluster</h4>
                  <h6>Hail City, Suadia Arabia</h6>
                </div>
              </div>
            </Col>
           
            <Col lg='3' md='3' sm='4'>
              <div className="header__location d-flex align-items-center gap-2">
                <span><i className='ri-time-line'></i></span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>09:00 AM - 11:00 PM</h6>
                </div>
              </div>
            </Col>
            
            
          </Row>
        </Container>
      </div>

      {/** ===================== Main Navigation ================ */}

        <div className="main__navbar">
          <Container>
            <div className="navigation__wrapper d-flex align-items-center justify-content-between">
              <span className="mobile__menu">
                <i className='ri-menu-line' onClick={toggleMenu}></i>
              </span>
              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                  <div className="menu">
                    {
                      navLinks.map((item,index)=>(
                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav__active nav__item' : 'nav__item'} key={index}>
                          {item.display}
                        </NavLink>
                      ))
                    }                    
                  </div>
              </div>
              <div className="nav__right">
                <div className="search__box">
                  <input type='text' placeholder='Search...'/>
                  <span><i className='ri-search-line'></i></span>
                </div>
              </div>
            </div>
          </Container>
        </div>
    </header>
    </>
    
  )
}
export default Header;