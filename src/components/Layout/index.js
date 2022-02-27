import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import '../../index.css';


function Layout({ children }) {
  return (
    <>
      <Header />
        <main>
          <center>
            <content>
              {children}
            </content>
          </center>
        </main>
      <Footer />
    </>
  );
}

export default Layout;