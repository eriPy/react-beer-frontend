import IpaImg from "../assets/ipa.jpg";

function IPA() {
    return (
        <section>
            <h3 className="beer-name">
                IPA
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        England.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Late 18th century / early 19th century.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        Traditionally attributed to George Hodgson, but saying he "invented the IPA" 
                        with a specific recipe is overly simplistic. The style developed gradually.
                    </p>
                </section>
                <section className="section-img">
                    <img src={IpaImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Ale. Golden to amber. Strong hop presence. High bitterness in many versions.
                        Citrus, floral, tropical, and resinous aromas, depending on the hops. Generally more intense than a Pale Ale.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        IPA doesn't simply mean "a beer invented for India." Its historical development 
                        was much more gradual, and the popular story that Hodgson simply added vast amounts 
                        of hops to prevent the beer from spoiling is contested by beer historians.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default IPA;