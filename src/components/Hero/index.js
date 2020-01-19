import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "antd"
import Search from "../Search/index"
import "./index.css"
const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      reddit {
        title
        publicDescription
        accountsActive
        subscribers
      }
    }
  `)

  const { title, publicDescription, accountsActive, subscribers } = data.reddit

  return (
    <Row
      gutter={32}
      style={{
        backgroundImage:
          "linear-gradient(to left, #da4453, #ca355c, #b72a63, #a12468, #89216b)",
      }}
    >
      <Col xs={24} sm={{ span: 16, offset: 4 }} lg={{ span: 12, offset: 6 }}>
        <div
          style={{
            textAlign: "center",
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h1 className="title">{title}</h1>
          <p className="desc" style={{ color: "#F4F4F4" }}>
            {publicDescription}
          </p>
        </div>
      </Col>
    </Row>
  )
}

export default Hero
