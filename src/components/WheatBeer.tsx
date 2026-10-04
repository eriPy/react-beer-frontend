import WheatBeerImg from "../assets/wheat-ale.jpeg";

function WheatBeer() {
    return (
        <section>
            <h3 className="beer-name">
                Wheat Beer
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        Central Europe, especially Germany/Bavaria, although wheat beer traditions exist elsewhere.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Medieval tradition; the Weizenbier style developed later in Bavaria.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        None.
                    </p>
                </section>
                <section className="section-img">
                    <img src={WheatBeerImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Golden/pale color. Hazy appearance. High carbonation. 
                        Wheat base with a fruity aroma. Distinct banana and clove notes 
                        produced by the yeast. Relatively light body.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Belgian Wheat Beers also exist, such as Witbier.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default WheatBeer;