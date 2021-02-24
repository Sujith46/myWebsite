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
        // strings: [ "Hey there, iam Sujith", "Designer, Front-end developer" ],
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
  // let el = document.getElementById("sujith-img")
  // console.log(el)
  // const height = el.height
  // const width = el.width

  // /*
  //  * Add a listener for mousemove event
  //  * Which will trigger function 'handleMove'
  //  * On mousemove
  //  */
  // el.addEventListener("mousemove", handleMove)

  // /* Define function a */
  // function handleMove(e) {
  //   /*
  //    * Get position of mouse cursor
  //    * With respect to the element
  //    * On mouseover
  //    */
  //   /* Store the x position */
  //   const xVal = e.layerX
  //   /* Store the y position */
  //   const yVal = e.layerY

  //   /*
  //    * Calculate rotation valuee along the Y-axis
  //    * Here the multiplier 20 is to
  //    * Control the rotation
  //    * You can change the value and see the results
  //    */
  //   const yRotation = 20 * ((xVal - width / 2) / width)

  //   /* Calculate the rotation along the X-axis */
  //   const xRotation = -20 * ((yVal - height / 2) / height)

  //   /* Generate string for CSS transform property */
  //   const string =
  //     "perspective(500px) scale(1.1) rotateX(" +
  //     xRotation +
  //     "deg) rotateY(" +
  //     yRotation +
  //     "deg)"

  //   /* Apply the calculated transformation */
  //   el.style.transform = string
  // }

  // /* Add listener for mouseout event, remove the rotation */
  // el.addEventListener("mouseout", function () {
  //   el.style.transform = "perspective(500px) scale(1) rotateX(0) rotateY(0)"
  // })

  // /* Add listener for mousedown event, to simulate click */
  // el.addEventListener("mousedown", function () {
  //   el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)"
  // })

  // /* Add listener for mouseup, simulate release of mouse click */
  // el.addEventListener("mouseup", function () {
  //   el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)"
  // })
  
  // const [modal, showModal] = useState(false);

  // const popUp = () => {
  //   showModal(true)
  // }
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
