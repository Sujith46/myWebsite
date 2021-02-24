import React from "react"
import Layout from "../containers/Layout/index"
import Img from "gatsby-image"
import "../globalstyles/style.scss"
import "../globalstyles/about.scss"
import Container from "../containers"
import Development from '../components/development/index'
import Design from "../components/design"
import {graphql} from 'gatsby'

export default function About({data}) {
  return (
    <Layout>
      <div className="fluid">
        <div className="aboutContainer">
          <div className="aboutContent">
            <h1>About</h1>
            <p>
              Iam a passionate designer and a frontend developer. I have worked
              with various agency for both design and software development
              projects. Currently Iam working as frontend developer at a leading
              ecommerce company.
            </p>
            <i>" Success is not a big step in the future, success is a small step taken taken now "</i>
          </div>
          <div className="aboutImage">
            <div className="imageRadius">
              <Img 
                fluid={data.file.childImageSharp.fluid}
                alt="sujith-about-image"></Img>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="aboutOverview">
          <h2>Tools and Technolgies</h2>
          <p>Here are some of the tools and technologies i have worked on</p>
          <div className="devContainer">
            <h3>Development</h3>
            <div className="tools">
              <Development />
            </div>
          </div>
          <div className="devContainer">
            <h3>Design</h3>
            <div className="tools">
              <Design />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "aboutsujith.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`