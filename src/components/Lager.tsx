import LagerImg from "../assets/lager.png";

function Lager() {
    return (
        <section>
            <h3 className="beer-name">
                Lager
            </h3>
            <div className="the-beer-content">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        Central Europe, especially regions of present-day Germany and the Czech Republic.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Progressive development since the Middle Ages; bottom fermentation was already 
                        practiced since at least the 14th century.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        There is no single creator.
                    </p>
                </section>
                <section className="section-img">
                    <img src={LagerImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Bottom fermentation. Relatively clean profile. Generally noticeable carbonation. 
                        They can be pale, amber, or dark. Includes styles such as Pilsner, Helles, Märzen, 
                        Dunkel, Bock, etc.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Pilsner is a lager, but lager does not mean Pilsner.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Lager;