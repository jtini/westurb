import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Highlight from "../components/Highlight/Highlight"
import NavigationList from "../components/NavigationList/NavigationList"
import logo from '../images/logo-large.svg'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Introducing WestUrb" />
    <div className="container">
      <img className="homepage-logo" src={logo} width={96} alt="WestUrb logo" />
      <h1 className="title">Introducing WestUrb</h1>
      <blockquote className="homepage-lead">Our world is facing unprecedented challenges: climate change, mobility system failures, affordable housing shortages, habitat loss and environmental injustice. Our federal government is at best dormant and at worst an active obstacle. Local governments can’t look to support from higher up. They need to lead –do much more, much faster, and do it now. WestUrb is here to help local governments, their vendors and their stakeholders meet this need, using lessons learned during years of producing effective results from the inside.</blockquote>
      <p>Want to start a local sustainability program or office? We help you create one that your community will applaud.</p>
      <p>Does your sustainability program or office need improvement? We design state of the art upgrades.</p>
      <p>Trying to sell products or services to local government sustainability programs? We connect you with key decision makers and help navigate sustainable procurement.</p>
      <p>Hoping for improvements in local sustainability policy? We point you to best practices and help you secure their enactment.</p>
      <p>Envisioning an engaging sustainability conference, but not sure how to make it happen? We design winning events.</p>
      <p>Need an engaging keynote or presenter who will draw rave reviews? Our presentations don’t just inform; they also motivate.</p>
      <NavigationList
        links={[
          {
            to: '/about',
            text: 'About WestUrb'
          }, {
            to: '/service-areas',
            text: 'Service Areas'
          }, {
            to: '/presentations',
            text: 'Presentations'
          }, {
            to: '/rates',
            text: 'Rates'
          }
        ]}
      />
    </div>
  </Layout>
)

export default IndexPage
