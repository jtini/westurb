import React from 'react'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Image from '../components/Image/Image'
import Accomplishments from '../components/Accomplishments/Accomplishments'
import Expertise from '../components/Expertise/Expertise'
import Leadership from '../components/Leadership/Leadership'
import headshot from '../images/jerry-headshot.png'
import wirthPhoto from '../images/jerry-wirth-award.png'
import gorePhoto from '../images/jerry-with-al-gore.png'

const About = () => {
    return (
        <Layout>
            <SEO title="About WestUrb" />
            <section className="container container--wide">
                <h1>About WestUrb</h1>
                <div className="flex-wrapper--reverse">
                    <Image
                        src={headshot}
                        width={256}
                        height={296}
                        alt="Jerry Tinianow, Proprietor"
                        caption="Jerry Tinianow, Proprietor"
                        className="flex-child--static"
                    />
                    <p>Jerry Tinianow is the proprietor of WestUrb. He is an award-winning sustainability professional who draws expertise from multiple disciplines. He recently served for seven years as the first Chief Sustainability Officer of City and County of Denver, Colorado. He worked with all of its departments (over 13,000 employees) to produce sustainability success stories at scale. He previously worked at the regional level, directing the Office of Energy and Environment at the Mid-Ohio Regional Planning Commission (MORPC). In addition to urban and regional sustainability, he worked in wildlife and habitat conservation as the Ohio executive director of the National Audubon Society. An attorney by training, Jerry practiced commercial trial law for over 20 years with two large law firms in which he was a partner.</p>
                </div>
                <div className="flex-wrapper pt-2">
                    <Image
                        src={wirthPhoto}
                        width={448}
                        height={372}
                        alt="Jerry delivers acceptance speech for the University of Colorado Wirth Chair Sustainability Award, November 2018"
                        caption="Jerry delivers acceptance speech for the University of Colorado Wirth Chair Sustainability Award, November 2018"
                    />
                    <Image
                        src={gorePhoto}
                        width={448}
                        height={372}
                        alt="Jerry meets Vice President Al Gore at the White House following a conference of environmental leaders, June 1996"
                        caption="Jerry meets Vice President Al Gore at the White House following a conference of environmental leaders, June 1996"
                    />
                </div>
            </section>
            <Accomplishments />
            <Leadership />
            <Expertise />
        </Layout>
    )
}

export default About;