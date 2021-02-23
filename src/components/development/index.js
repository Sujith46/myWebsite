import React from "react"
import Img from "gatsby-image"
import {graphql, StaticQuery} from 'gatsby'
import './style.scss'

export default function Development({data}) {
    return(
        <div>
                  <StaticQuery 
                    query={graphql` 
                    query {
                        nodes : file(relativePath: { eq: "dev/node.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          next : file(relativePath: { eq: "dev/next.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          git : file(relativePath: { eq: "dev/git.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          wp : file(relativePath: { eq: "dev/wordpress.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          react : file(relativePath: { eq: "dev/react.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          jenkins : file(relativePath: { eq: "dev/jenkins.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          mongo : file(relativePath: { eq: "dev/mongo.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                          gatsby: file(relativePath: { eq: "dev/gatsby.png" }) {
                            childImageSharp {
                              fluid {
                                ...GatsbyImageSharpFluid
                              }
                            }
                            name
                          }
                    }
                `}
                render={
                    data => (
                        <div className="box">
                            <div className="toolImage">
                                <Img fluid={data.react.childImageSharp.fluid} alt={"reactJS"}></Img>
                                {/* <p>Node</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.nodes.childImageSharp.fluid} alt={"nodeJS"}></Img>
                                {/* <p>Node</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.gatsby.childImageSharp.fluid} alt="gatsbyJS"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.next.childImageSharp.fluid} alt="nextJS"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.git.childImageSharp.fluid} alt="git"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.wp.childImageSharp.fluid} alt="wordpress"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.jenkins.childImageSharp.fluid} alt="jenkins"></Img>
                                {/* <p>Next</p> */}
                            </div>
                            <div className="toolImage">
                                <Img fluid={data.mongo.childImageSharp.fluid} alt="mongoDB"></Img>
                                {/* <p>Next</p> */}
                            </div>
                        </div>
                        
                    )
                }
                  />
              </div>
    )
}
