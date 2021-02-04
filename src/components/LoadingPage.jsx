import React from 'react';
import { motion } from "framer-motion";
import './LodingPage.css';

const blackBox = {
  initial: {
    height: "100vh",    
  },
  animate:{
    backgroundColor: ["#e85d04", "#f48c06","#f48c06"],
    height: 0,
    transition: {
      delay: 0.7,
      duration: 2.1,
      ease: [0.87, 0, 0.13, 1],
    },
  }
};

const spanVariant = {
  initial:{
    opacity: 0,
    y: 0,
    color: '#feeafa',
  },
  animate:{
    opacity: [0,1,0],
    y: -1000,
    transition:{
      delay:0.5,
      duration:2.5,
    }
  }
}

function LoadingPage() {
    return (
        <div className='container'>
            <motion.div className='loadingpage'
            variants={blackBox}
            initial='initial'
            animate='animate'
            >
            <motion.div className='load-text'
            variants={spanVariant}
            >
            <span className='welcome-icon'>
              <i className="fas fa-praying-hands" />
            </span>
            WELCOME
            
            </motion.div> 
            </motion.div>
            
        </div>
    )
}

export default LoadingPage
