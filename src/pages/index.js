import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Categories from "../components/Categories/index"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/Hero/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Categories />
  </Layout>
)

export default IndexPage
