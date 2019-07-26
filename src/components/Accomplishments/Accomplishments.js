import React from 'react'

const items = [
    'Denver was certified at the Platinum Level in the LEED for Cities program of the U.S. Green Building Council, one of only five U.S. cities to have achieved Platinum at the time.',
    'Denver was included in the “A List” of CDP (the Carbon Disclosure Project), awarded to the top seven percent of 625 cities worldwide that reported greenhouse gas emissions and climate change initiatives through CDP.',
    'Denver rose steadily in the community energy efficiency rankings of the American Council for an Energy Efficient Economy, from 13th in 2013 to 8th in 2019.',
    'The Sustainable Denver Summit, an annual event attracting nearly 1,000 participants, was created and grew to become the sustainability event of the year in Colorado.',
    'MORPC produced the nation’s first regional food system assessment and plan, winner of the 2010 Trailblazer Award of the National Association of Development Organizations.',
    'Audubon’s Ohio office conducted the largest capital campaign in Audubon’s history and produced the Grange Insurance Audubon Center, a nature education facility near downtown Columbus.'
]

const Accomplishments = () => (
    <section className="container pt-4">
        <h2>Accomplishments</h2>
        <p className="pt-1 text--subdued">Jerry's career has included these highlights:</p>
        <ul>
            {items.map((item, idx) => (
                <li key={idx}>{item}</li>
            ))}
        </ul>
    </section>
)

export default Accomplishments;