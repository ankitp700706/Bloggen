import React from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Parallax from 'react-rellax'

import {ReactComponent as Illustrator} from "./Rillus.svg";


const iconVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 3,
      duration: 0.8,
    },
  },
};


function Home() {
  return (
    <div>
      <div className="section-div">
        <div className="left-side">
           <Parallax speed={0}>
          <h1>
            WELCOME TO{" "}
            <motion.span
              variants={iconVariant}
              initial="hidden"
              animate="animate"
              style={{ fontFamily: "Potta One", color: "black" }}
            >
              Bloggen
            </motion.span>
          </h1>
          <p>A place every geek would love </p>
          </Parallax>
        </div>
        <div className="right-side">
          <Parallax speed={-10}>

          <Illustrator/>
          </Parallax>
        </div>
      </div>
      <div style={{position:'relative',width:'100vw'}}>
      <div class="custom-shape-divider-bottom-1612242229">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>  
        </div>
      <div
        className="second-section"
      >
        <h1>Hello,Want to know more about us?</h1>
      </div>
    </div>
  );
}

export default Home;
