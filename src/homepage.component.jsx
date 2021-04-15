import React from 'react';


import './homepage.styles.scss';

const HomePage=()=> (

    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Appetizers</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Fried Rice</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Soup</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Noodles</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>

            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sea Food</h1>
                    <span className='subtitle'>ORDER NOW</span>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;