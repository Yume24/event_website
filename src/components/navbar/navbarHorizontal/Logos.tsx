import Image from 'next/image';
import logo from '../../../../public/static/images/logos/logo.svg';
import logoGT from '../../../../public/static/images/logos/logoGT.png';
import React from 'react';

export default function Logos() {
  return (
    <div className="navbar-start">
      <Image
        src={logo}
        alt="logo"
        width={logo.width}
        height={logo.height}
        className="w-25 m-5"
      />
      <Image
        src={logoGT}
        alt="logo GT"
        width={logoGT.width}
        height={logoGT.height}
        className="w-25 m-5"
      />
    </div>
  );
}
