import React from 'react';
import Navbar from '../components/user/navbar';
import Footer from '../components/user/Footer';
import Beranda from '../components/user/Beranda';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Beranda />
      <Footer />
    </div>
  );
};

export default Home;
