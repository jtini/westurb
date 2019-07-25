import React from 'react'
import Image from '../Image/Image'
import kerryPhoto from '../../images/jerry-with-kerry.png'

const Leadership = () => (
    <section className="container pt-4">
        <h2>{'Leadership & Recognition'}</h2>
        <p class="pt-1 pb-3 text--subdued">Jerry was the 2018 winner of the Wirth Chair Sustainability Award of the University of Colorado, which gave him the award “in recognition of his tireless work on Denver’s 80x50 Climate Action Plan.”  He was also named a national “Environmental Hero” by the Sierra Club during its centennial celebration. As an attorney Jerry was admitted to the Million Dollar Advocates Forum, membership in which is limited to attorneys who have won a verdict or settlement worth over one million dollars (he has won both).</p>
        <Image
            src={kerryPhoto}
            width={736}
            height={480}
            alt="Jerry with former Secretary of State John Kerry (keynote speaker) and former Colorado Senator Tim Wirth at the Wirth Chair Sustainability Award presentation luncheon"
            caption="Jerry with former Secretary of State John Kerry (keynote speaker) and former Colorado Senator Tim Wirth at the Wirth Chair Sustainability Award presentation luncheon"
        />
        <p class="text--subdued">Jerry has been a sustainability leader at all levels of community, including national and International. He chaired the Federal Issues Committee of the Urban Sustainability Directors Network, which has over 200 member cities in the U.S. and Canada. He also served as one of three Americans on the Global Executive Committee of ICLEI Local Governments for Sustainability. ICLEI’s membership includes over 1,500 local governments worldwide. Jerry is currently serving on the working group appointed by the U.S. Green Building Council to refine the latest version of its LEED for Cities program. He is also advising the Biennial of the Americas, a major cultural event celebrating the arts and sustainability in the Western Hemisphere.</p>
    </section>
)

export default Leadership;