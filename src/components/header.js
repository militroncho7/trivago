import React from 'react'
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import Navegacion from './nav';

const Header = () => {
    return (
        <header
            css={css`
                background-color: #FFF;
                padding: 0.5rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `
                }
            >
                {/* <h1
                    css={css`
                        color: #FFF;
                        text-align: center;
                    `}
                >Hotel Trivago</h1> */}
                <Link to={'/'}>
                <img src='https://res.cloudinary.com/dhd9jgrw3/image/upload/v1631889390/Trivago/Trivago-logo_1_h3bgne.png' />
                </Link>
                
                <Navegacion />
            </div>
        </header>
    );
}
 
export default Header;