import React from 'react';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLog from '../images/tmdb_logo.svg';
import {StyledHeader,StyledRMDBLogo,StyledTMDBLogo} from '../styles/StyledHeader';
//1. Learn how to create a styled basic styled component
//2. Learn how to handle props in styled component
//3. Createa global style with styled components




const Header = () => (
    <StyledHeader>
        <div className="header-content">
            <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
            <StyledTMDBLogo src={TMDBLog} alt="tmdb-logo"/>
        </div>
    </StyledHeader>
)

export default Header;