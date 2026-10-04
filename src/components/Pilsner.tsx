import PilsnerImg from "../assets/pilsner.jpeg";

function Pilsner() {
    return (
        <section>
            <h3 className="beer-name">
                Pilsner
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        Plzeň (Pilsen), Kingdom of Bohemia, present-day Czech Republic.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        October 5, 1842.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        Josef Groll.
                    </p>
                </section>
                <section className="section-img">
                    <img src={PilsnerImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Lager. Golden/pale color. Quite refreshing. Perceptible bitterness. Hop aroma. 
                        Dry finish. Bottom fermentation.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Pilsner = a specific style of Lager.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Pilsner;