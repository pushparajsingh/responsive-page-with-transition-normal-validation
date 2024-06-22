import React from 'react';
import Header from './Header';
import Banner from './Banner';
import ProcessDetails from './ProcessDetails';
import { Container } from '@mui/material';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <ProcessDetails />
      </section>
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
      <section className="footer-section">
        <Footer />
      </section>
    </>
  );
};

export default Layout;
