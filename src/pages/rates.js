import React from 'react'
import Layout from "../components/Layout/Layout"
import SEO from "../components/SEO/SEO"

const Rates = () => {
    return (
        <Layout>
            <SEO title="Rates" />
            <div className="container">
                <h1>Rates</h1>
                <p className="text--subdued">WestUrb has different rates for for-profit businesses and not-for-profit organizations and government entities.</p>
                <p className="text--subdued">We operate with daily, weekly and fixed price rates. Which we use will depend on the nature and duration of the project. For example, a presentation or single-day consultation will normally be charged at the daily rate. A more extended interaction - for example, spending several days at a client office - will be at the weekly rate. An ongoing relationship will likely be at a fixed price.</p>
                <p className="text--subdued">These rates are designed to provide predictability to the client. We will consider an hourly billing arrangement, but those are the exception, not the rule</p>
                <p className="text--subdued">We do not charge clients for travel time or expenses, except where proposal rules require us to do so in bidding. Travel time and costs are built into our rates, so that clients are not penalized for travel delays and unexpected charges. Other out-of-pocket expenses are charged at cost, without markup.</p>
            </div>
        </Layout>
    )
}

export default Rates;