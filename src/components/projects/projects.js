import React from "react"
import Img from "gatsby-image"
import { graphql, StaticQuery } from "gatsby"
import "./style.scss"
import Container from "../../containers"

function Projects() {

  const handlePageChange = (url) => {
    window.open(url,'_blank')
  }

  return (
    <div className="projects-wrapper">
      <Container>
      <h2>Projects</h2>
      <p>Here are some of my side projects which you can check out</p>
        <StaticQuery
          query={graphql`
            query {
              resume: file(
                relativePath: { eq: "projectthumb/resumebuilder.PNG" }
              ) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              dashboard: file(
                relativePath: { eq: "projectthumb/dashboard.PNG" }
              ) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          `}
          render={data => (
            <>
              <div className="project-container">
                <div className="project-thumb">
                  <Img
                    fluid={data.resume.childImageSharp.fluid}
                    alt="resume-builder"
                  />
                </div>
                <div className="project-content">
                    <h4>Resume builder</h4>
                    <div className="sub-text">
                        A minimal resume builder where you can make live changes and also download the resume as PDF
                    </div>
                    <button className="submit secondary" onClick={() => handlePageChange("https://proresumebuilder.netlify.app/")}>View Demo</button>
                    <button className="submit outline" onClick={() => handlePageChange("https://github.com/Sujith46/resume-builder")}>View Source</button>
                </div>
              </div>
              <div className="project-container">
                <div className="project-thumb">
                  <Img
                    fluid={data.dashboard.childImageSharp.fluid}
                    alt="dashboard"
                  />
                </div>
                <div className="project-content">
                    <h4>Dashboard UI</h4>
                    <div className="sub-text">
                        Super clean dashboard design which contains interactive components.
                    </div>
                    <button className="submit secondary" onClick={() => handlePageChange("https://dashboardpro.netlify.app/")}>View Demo</button>
                    <button className="submit outline" onClick={() => handlePageChange("https://github.com/Sujith46/dashboard")}>View Source</button>
                </div>
              </div>
            </>
          )}
        />
      </Container>
    </div>
  )
}

export default Projects
