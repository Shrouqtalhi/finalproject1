import { Link } from '@material-ui/core';
import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HomeSection.css';

function HomeSection() {
    return (
        <div className='hero-container'>
            <video className="my-video" src='/videos/video-2.mp4' autoPlay loop muted />
            {/* <h1>ADVENTURE AWAITS</h1> */}
            {/* <p>What are you waiting for?</p> */}
            <div className='hero-btns'>
                <h1 className="h1">The world is huge Don't miss any of it.</h1>
                <Button

                    className='my-btns'
                    buttonStyle='my-btn--outline'
                    buttonSize='my-btn--large'
                >
                    GET STARTED
        </Button>
                <Button
                    className='my-btns'
                    buttonStyle='my-btn--primary'
                    buttonSize='my-btn--large'
                    onClick={console.log('hey')}
                    exact path='/trailer'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

export default HomeSection;