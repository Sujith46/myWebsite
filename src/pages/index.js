import React from "react"
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
              <button className="submit" onClick={moveTo}>Let's connect</button>
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
