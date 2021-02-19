import React from "react"
import Layout from "../containers/Layout/index"
import "../globalstyles/style.scss"
import "../globalstyles/about.scss"

export default function About() {
  return (
    <Layout>
      <div className="fluid">
        <div className="aboutContainer">
          <h1>About</h1>
          <p>
            Iam a passionate designer and a frontend developer. I have worked
            with various agency for both design and software development
            projects. Currently Iam working as frontend developer at a leading
            retail domain company.
          </p>
        </div>
      </div>
    </Layout>
  )
}
