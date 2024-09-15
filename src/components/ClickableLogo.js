import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const ClickableLogo = ({width, height}) => {
  return (
    <>
      <Link to="https://www.trademarkia.com/" target='_blank'>
        <img src={logo} alt="Logo" width={width} height={height}/>
      </Link>
    </>
  );
}

export default ClickableLogo