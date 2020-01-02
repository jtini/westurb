import React from 'react'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const content = [
    {
        id: 'sustainabilityOffices',
        lead: 'Sustainability Offices',
        text: 'creation or improvement'
    }, {
        id: 'stratPlans',
        lead: 'Strategic Plans',
        text: 'facilitation, design, review'
    }, {
        id: 'programs',
        lead: 'Programs and Projects',
        text: 'design, implementation, evaluation, adaptation'
    }, {
        id: 'commEngagement',
        lead: 'Community Engagement',
        text: 'messaging, techniques, facilitation'
    }, {
        id: 'marketing',
        lead: 'Marketing and Sales',
        text: 'sustainability products and services for local governments'
    }, {
        id: 'govRelations',
        lead: 'Government Relations',
        text: 'for better local government sustainability policies'
    }, {
        id: 'events',
        lead: 'Events',
        text: 'designing engaging conferences and summits'
    }, {
        id: 'fundraising',
        lead: 'Fundraising',
        text: 'grant writing, sponsorships'
    }, {
        id: 'presentations',
        lead: 'Presentations',
        text: 'keynote addresses, panel presentations'
    }
]

const ServiceAreas = () => {
    return (
        <Layout>
            <SEO title="Service Areas" />
            <div className="container">
                <h1>Service Areas</h1>
                <p>WestUrb provides consulting services to local governments (cities, counties, school districts, regional planning councils), businesses that offer sustainability products, services and events to them, and interest groups that want to influence their policies.</p>
                <ul>
                    {content.map(entry => (
                        <li key={entry.id}>
                            <span className="bold">{`${entry.lead} `}</span>
                            <span className="text--subdued">{entry.text}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

export default ServiceAreas;