import React from 'react'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"
import Image from '../components/Image/Image'
import DatedListItem from '../components/DatedListItem/DatedListItem'
import photo from '../images/presentations.png'
import './presentations.scss'

const presentationsList = [
    {
        key: 'spc',
        date: 'Oct 8, 2019',
        title: 'SPC (Sustainable Packaging Coalition) Advance Conference',
        subtitle: '“Advancing Policy: How Do We Move From Polarizing Views to Creating a Path Forward?”'
    },
    {
        key: 'euci',
        date: 'Aug 15, 2019',
        title: 'EUCI Second Annual Smart Cities Conference',
        subtitle: '“Share the Clock, Not Just the Road”'
    }, {
        key: 'infoCast',
        date: 'July 24, 2019',
        title: 'InfoCast Clean Cities Renewable Power Procurement Conference Co-organizer',
        subtitle: 'Chairing plenary sessions and presenting opening remarks'
    }, {
        key: "usgbc",
        date: 'Apr 11, 2019',
        title: 'USGBC Colorado Chapter, Rocky Mountain Green Conference',
        subtitle: '“Winning Hearts and Changing Minds: Achieving Buy-in on Resiliency Initiatives”'
    }, {
        key: 'jisea',
        date: 'Mar 13, 2019',
        title: 'Joint Institute for Strategic Energy Analysis annual conference',
        subtitle: '“Advanced Energy for Sustainable Communities”'
    }, {
        key: 'una',
        date: 'Oct 24, 2018',
        title: 'United Nations Association UN Day Celebration',
        subtitle: '“The Right to Housing: A Conversation”'
    }, {
        key: 'epri',
        date: 'Oct 4, 2018',
        title: 'Electric Power Research Institute',
        subtitle: '“The Intersection of Smart Cities and Sustainability”'
    }, {
        key: 'clc',
        date: 'Mar 2, 2018',
        title: 'Climate Leadership Conference (Center for Climate & Energy Solutions)',
        subtitle: '“Leveraging Policy and Incentives for the Built Environment”'
    }, {
        key: 'cop23',
        date: 'Nov 11, 2017',
        title: 'COP 23 (Bonn, Germany)',
        subtitle: 'Moderator of the U.S. Peoples Delegation Town Hall'
    }, {
        key: 'smartCities',
        date: 'Jun2 1, 2016',
        title: 'Smart Cities 2.0 (Berlin, Germany)',
        subtitle: '“Denver’s Perspective”'
    }
]

const Presentations = () => {
    return (
        <Layout>
            <SEO title="Presentations" />
            <div className="container">
                <h1>Presentations</h1>
                <p>Jerry makes frequent presentations at meetings and conference both in Colorado and elsewhere, and is available to do one at yours. Here is a representative listing of both upcoming and past presentations:</p>
                <ul className="dated-list">
                    {presentationsList.map(item => (
                        <DatedListItem key={item.key} {...item} />
                    ))}
                </ul>
                <Image
                    src={photo}
                    width={928}
                    height={524}
                    alt="Jerry presenting at the ICLEI Smart Cities 2.0 Conference in Berlin, Germany, June 2016"
                    caption="Jerry presenting at the ICLEI Smart Cities 2.0 Conference in Berlin, Germany, June 2016"
                />
                <p className="pt-2 text--subdued">Some of Jerry’s presentations are available on YouTube and in podcasts. Here are a few examples:</p>
                <ul className="presentation-list">
                    <li><a className="presentation-link" href="https://www.youtube.com/watch?v=1oZFAt0VLFg" target="_blank">Colorado Business Roundtable, video interview (30 min.)</a></li>
                    <li><a className="presentation-link" href="https://livestream.com/BarnMedia/CSUWaterInTheWestSymposium2018/videos/174108580" target="_blank">Water in the West - presentation at initial conference (15 min.)</a></li>
                    <li><a className="presentation-link" href="https://www.youtube.com/watch?v=wkulswoCegQ" target="_blank">Sustainability EXPOsed: Pittsburgh (keynote address) (15 min.)</a></li>
                    <li><a className="presentation-link" href="https://sustainabilitydefined.com/equityincities" target="_blank">Equity in Cities: Audio podcast interview with Rob Phocas of Charlotte, NC (40 min.)</a>(interview starts at 18:00)</li>
                </ul>
            </div>
        </Layout>
    )
}

export default Presentations;