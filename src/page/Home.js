import React from 'react';
import AboutUs from '../components/AboutUs';
import TopBar from '../components/TopBar';

const Home = (props) => {
    return (
        <div>
            <TopBar />
            <AboutUs />
        </div>
    );
};

export default Home;