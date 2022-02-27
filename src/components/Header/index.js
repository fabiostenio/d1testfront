import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import Button from '../Button';


function Header() {

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const url = window.location.href.split('/');
    if (url[3] != "") {
      setShowButton(true)
    }
  })
  return (
    <>

      <nav className="Header">
        <center>
          <Link to="/">
            <div className="site_title">
              Fábio Movies
            </div>
          </Link>
        {
          showButton && <Button as={Link} className="ButtonLink" to="/">
            Voltar
          </Button>
        }
        </center>

      </nav>

      <div id="menu">
        <center>
          <ul>
            <li><a href="/movie/lists/tendencias">Tendências</a></li>
            <li><a href="/movie/lists/populares">Populares</a></li>
            <li><a href="/movie/lists/favoritos">Favoritos</a></li>
          </ul>
        </center>
      </div>

    </>

  );
}

export default Header;