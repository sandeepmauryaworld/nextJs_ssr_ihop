import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo.png'
const Header = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
      <Link href={'/'}> <Image src={logo} width={80} height={80} alt={logo}/> </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link href={''} className="mr-5 hover:text-gray-900">Order Online</Link>
      <Link href={''} className="mr-5 hover:text-gray-900">Menu</Link>
      <Link href={''} className="mr-5 hover:text-gray-900">Gift card</Link>
      <Link href={''} className="mr-5 hover:text-gray-900">Join My shop</Link>
    </nav>

  </div>
</header>
  )
}

export default Header