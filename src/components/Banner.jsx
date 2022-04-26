import React from 'react'
import banner from '../assets/images/banners/home_banner.png';


function Banner(imageUrl) {
  return (
      <div className="banner">
          <img src={banner} alt="Bannière" />
          <div className="bg-filter"></div>
    </div>
  )
}
export default Banner;