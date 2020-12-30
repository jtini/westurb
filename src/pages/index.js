import React from "react"
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Highlight from "../components/Highlight/Highlight"
import NavigationList from "../components/NavigationList/NavigationList"
import logo from '../images/logo-large.svg'
import './index.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome to WestUrb" />
    <div className="container">
      <img className="homepage-logo" src={logo} width={96} alt="WestUrb logo" />
      <h1 className="title">Welcome to WestUrb</h1>
      <blockquote className="homepage-lead">During the Trump presidency, local governments had to lead American sustainability efforts. The Trump Administration was at best absent and at worst actively opposed. It will be nice to have a friend in the White House in 2021, but local sustainability leadership will remain vital. The federal government’s potential will be limited by the massive deficits of the Trump era and the ongoing need to end the Covid pandemic and rebuild the economy. Meanwhile, rapid climate change still advances and the time available to slow that advance is shrinking. Local governments must continue to lead. With skilled assistance they can.</blockquote>
      <p>Want to start a local sustainability program or office? We help you create one that your community will applaud.</p>
      <p>Does your sustainability program or office need improvement? We design state of the art upgrades.</p>
      <p>Marketing products or services to local government sustainability programs? We connect you with key decision makers and help navigate sustainable procurement.</p>
      <p>Want better local sustainability policy? We point you to the most promising practices and help you secure their enactment.</p>
      <p>Envisioning an engaging sustainability conference, but not sure how to make it happen? We design winning events, both virtual and in-person.</p>
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
