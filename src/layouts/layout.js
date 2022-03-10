import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Footer from '../components/Footer';
import Logo from '../assets/jak_pomoc_logo.png';
import CookieInfo from '../components/CookieInfo/CookieInfo';

const Layout = ({ children, additionalClass = [] }) => (
    <main
        className={[
            'min-h-screen', 'text-black', 'font-montserrat', ...additionalClass,
        ].join(' ')}
    >
        <Helmet>
            <html className="bg-white" lang="en" />
        </Helmet>
        <div className="m-5 max-w-7xl md:mx-auto">
            <Link to="/"><img src={Logo} alt="Jak pomóc Ukrainie" className="mx-auto" /></Link>
        </div>
        {children}
        <Footer />
        <CookieInfo />
    </main>
);

export default Layout;
