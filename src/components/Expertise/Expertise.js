import React from 'react'

const items = [
    'Air Quality',
    'Energy (efficiency and renewables)',
    'Mobility',
    'Climate Change (mitigation and adaptation)',
    'Water (quality and quantity)',
    'Food Systems',
    'Materials Management (recycling, composting)',
    'Land Use Planning',
    'Watershed Protection (including green infrastructure)',
    'Community Health',
    'Equity and Environmental Justice',
    'Affordable Housing'
]

const Expertise = () => (
    <section className="container pt-4">
        <h2>Subject Matter Expertise</h2>
        <p className="pt-1 text--subdued">WestUrb has expertise in multiple subject areas:</p>
        <ul>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
        <p className="pt-1 text--subdued">Beyond working in these individual areas, Jerry has leveraged the connections among them - for example, how housing and mobility interact, or how energy and water management affect each other and greenhouse gas emissions.</p>
    </section>
)

export default Expertise