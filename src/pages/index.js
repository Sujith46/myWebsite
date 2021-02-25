import React, {useState} from "react"
import "../globalstyles/style.scss"

import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import Icons from "../components/icons"
import Typewriter from "typewriter-effect"
import Layout from "../containers/Layout/index"


export default function Home({ data }) {
  const type = (
    <Typewriter
      options={{
        strings: [
          `Hey there,<br> I am Sujith`,
          `Designer,<br> Front-end developer`,
        ],
        autoStart: true,
        loop: true,
        delay: 60,
      }}
    />
  )
  // let container = document.getElementById("image-wrapper")
  // var inner = document.getElementById('sujith-img');
  // console.log(container)

  // var mouse = {
  //   _x: 0,
  //   _y: 0,
  //   x: 0,
  //   y: 0,
  //   updatePosition: function(event) {
  //     var e = event || window.event;
  //     this.x = e.clientX - this._x;
  //     this.y = (e.clientY - this._y) * -1;
  //   },
  //   setOrigin: function(e) {
  //     this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
  //     this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  //   },
  //   show: function() { return '(' + this.x + ', ' + this.y + ')'; }
  // }
  // Track the mouse position relative to the center of the container.
  // mouse.setOrigin(container);

  // const onMouseEnterHandler = (event) => {
  //   // update(event)
  //   console(event)
  // }

  // const onMouseLeaveHandler = () => {
  //   inner.style = "";
  // }

  // const onMouseMoveHanlder = (event) => {
  //   if(isTimeToUpdate()) {
  //     // update(event);
  //     console(event)
  //   }
  // }
  // container.onmouseenter = onMouseEnterHandler;
  // container.onmouseleave = onMouseLeaveHandler;
  // container.onmousemove = onMouseMoveHanlder;

  // var counter = 0;
  // var updateRate = 10;
  // var isTimeToUpdate = function() {
  //   return counter++ % updateRate === 0;
  // };

  // const update = (event) => {
  //   mouse.updatePosition(event);
  //   updateTransformStyle(
  //     (mouse.y / inner.offsetHeight/2).toFixed(2),
  //     (mouse.x / inner.offsetWidth/2).toFixed(2)
  //   );
  // };
  
  // var updateTransformStyle = function(x, y) {
  //   var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
  //   inner.style.transform = style;
  //   inner.style.webkitTransform = style;
  //   inner.style.mozTransform = style;
  //   inner.style.msTransform = style;
  //   inner.style.oTransform = style;
  // };

  const moveTo = () => {
    navigate('/contact');
  }

  return (
    <div>
     
      <Layout>
        <div className="dark-blue-skewed">
          <div className="hero-container">
            <div className="content">
              <h1 className="typewriter-heading">{type}</h1>
              <button className="submit" onClick={() => moveTo()}>Let's connect</button>
              <Icons />
            </div>
            <div className="image-wrapper" id="image-wrapper">
              <div className="sujith-img" id="sujith-img">
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="sujith-image"
                />
              </div>
              <div className="light-yellow-box"></div>
            </div>
          </div>
          {/* <div className={`modalWrapper modalShow-${modal}`}>
            <p>ASDASDASDDASDA</p>
          </div> */}
        </div>
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "suj.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
