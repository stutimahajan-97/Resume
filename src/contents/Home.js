import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
//import profilepic from '../img/naafi_photo.png';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <ReactTypingEffect className="typingeffect" text={['I am STUTI MAHAJAN','I am a web developer']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home