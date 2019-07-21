import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const IndexPage = () => (
  <Layout>
    <SEO title="Introducing WestUrb" />
    <div className="container">
      <h1 className="title">Introducing WestUrb</h1>
      <p className="color-text-light">As the world grows more urban, local governments will play increasingly crucial roles in combatting climate change and providing triple-bottom-line results for their communities. They will do so with high-quality programs in four areas:</p>

      <p className="color-text-light">Western Urban Sustainability Advisors, LLC (WestUrb) helps local governments provide such high-quality programs more easily and effectively. WestUrb also helps businesses that want to sell related services and products to local governments, and interest groups that want to influence the adoption of supportive policies by such governments.</p>
    </div>
  </Layout>
)

export default IndexPage
