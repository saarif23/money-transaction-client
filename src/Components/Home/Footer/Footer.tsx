import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <div className="">
            <footer className="footer mt-20">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-facebook"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-twitter"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a></li>
                </ul>
                <ul className="menu">
                    <li className="menu__item"><a className="menu__link" href="#">Home</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Services</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Team</a></li>
                    <li className="menu__item"><a className="menu__link" href="#">Contact</a></li>
                </ul>
                <p>&copy;2024 Team Error | All Rights Reserved</p>
            </footer>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        </div>
    );
};

export default Footer;
