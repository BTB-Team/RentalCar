import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/footer/Footer';
import { Navbar } from '../components/header/Navbar';


export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Outlet />
      </main>
      
      <Footer />
    </>
  );
}
