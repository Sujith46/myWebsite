import React from "react"
import Img from "gatsby-image"
import {graphql, StaticQuery} from 'gatsby'
import './style.scss'

export default function Design({data}) {
    return(
        <div>
                  <StaticQuery 
                    query={graphql` 
                    query {
                        xd : file(relativePath: { eq: "design/xd.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          figma : file(relativePath: { eq: "design/figma.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          photoshop : file(relativePath: { eq: "design/ps.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          illustrator : file(relativePath: { eq: "design/ai.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          ae : file(relativePath: { eq: "design/ae.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                          webflow : file(relativePath: { eq: "design/webflow.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                          }
                    }
                `}
                render={
                    data => (
                        <div className="box">
                            <div className="toolImage">
                                <Img fluid={data.xd.childImageSharp.fluid} alt="adobe xd"></Img>
                                {/* <p>Node</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.photoshop.childImageSharp.fluid} alt="adobe photoshop"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.illustrator.childImageSharp.fluid} alt="adobe illustrator"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.ae.childImageSharp.fluid} alt="adobe after effects"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.webflow.childImageSharp.fluid} alt="webflow"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.figma.childImageSharp.fluid} alt="figma"></Img>
                                {/* <p>Node</p> */}
                            </div>
                        </div>
                        
                    )
                }
                  />
              </div>
    )
}
