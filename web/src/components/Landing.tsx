import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/landing-page.css';

import logo from '../images/logo.svg';

import { FiArrowRight } from 'react-icons/fi';

const Landing = () => {
    return (
        <div id="landing-page">
            <div className="content-wrapper">
                <img src={logo} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças</p>
                </main>

                <div className="location">
                    <strong>Natal</strong>
                    <span>Rio Grande do Norte</span>
                </div>
                <Link
                    to="/orfanatos"
                    className="enter-app-link"
                >
                    <FiArrowRight size={26} color="#FFF" />
                </Link>
            </div>
        </div>

    );
}

export default Landing;