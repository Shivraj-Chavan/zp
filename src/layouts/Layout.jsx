import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
    <Header/>
    <main className="pt-[110px] md:pt-[140px]">

        <Outlet/>
      </main>
    <Footer/>
    </>
  );
}
