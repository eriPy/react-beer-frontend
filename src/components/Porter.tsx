import PortnerImg from "../assets/porter.jpeg";

function Porter() {
    return (
        <section>
            <h3 className="beer-name">
                Portner
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        London, England.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Around 1720–1721.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        Traditionally attributed to Ralph Harwood, although the exact history is debated.
                    </p>
                </section>
                <section className="section-img">
                    <img src={PortnerImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Dark brown to black. Roasted malt, chocolate, coffee, and caramel notes. 
                        Moderate bitterness. Generally less roasted/burnt than many Stouts.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Simplified difference: Pale Ale → IPA (+ hops) | Porter → Stout 
                        (+ roasted/stronger). Although historically, the relationship between 
                        Porter and Stout is far more complex than that simplification.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Porter;