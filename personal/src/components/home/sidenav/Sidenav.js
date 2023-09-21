import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        <li className="sidenavLi">Blog Page</li>
        <a href='https://www.crio.do/learn/portfolio/kamalk2620/?edit=true'><li className="sidenavLi">Portfolio Page</li></a>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <a href='https://admin-uibykamal.netlify.app'><li className="sidenavLi">Web Development</li></a>
        <a href='https://eqkart.netlify.app/'><li className="sidenavLi">E-commerce</li></a>
        <a href='https://steady-gnome-39cc66.netlify.app'><li className="sidenavLi">Music Applications</li></a>
        <a href='https://www.crio.do/learn/portfolio/kamalk2620/?edit=true'><li className="sidenavLi">Portfolio Websites</li></a>
        <a href='https://fascinating-twilight-654a3e.netlify.app/'><li className="sidenavLi">Backend Setup</li></a>
        <a href='https://xflixclone.netlify.app'><li className="sidenavLi" >Youtube Clone</li></a>
      </ul>
      <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">+91 9780267246</li>
        <li className="sidenavLi">kamalk2620@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav