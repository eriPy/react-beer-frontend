import PaleAleImg from "../assets/pale-ale.jpg";

function PaleAle() {
    return (
        <section>
            <h3 className="beer-name">
                Pale Ale
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
                        Around 1703, when the term "pale ale" first appeared.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        There is no known single creator.
                    </p>
                </section>
                <section className="section-img">
                    <img src={PaleAleImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Top fermentation. Golden to amber color. Noticeable malt. Medium bitterness. 
                        Variable hop aroma. Generally more balanced than an IPA.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Pale Ale was also the historical foundation for the evolution of the India Pale Ale (IPA).
                    </p>
                </section>
            </div>
        </section>
    )
}

export default PaleAle;