import SourImg from "../assets/sour.jpg";

function Sour() {
    return (
        <section>
            <h3 className="beer-name">
                Sour
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        Multiple regions and traditions. Historical traditions include 
                        Belgium (Lambic, Flanders Red/Brown) and Germany (Berliner Weisse, Gose).
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        There is no single creation date. Historically, sourness was natural, 
                        but over time, certain cultures intentionally turned those 
                        characteristics into a deliberate brewing process.
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
                    <img src={SourImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Tart and acidic profile. Fruity, refreshing, and often dry. May feature 
                        funky or earthy aromas. Acidity comes from bacteria such as Lactobacillus 
                        and Pediococcus. Some versions are brewed with fruit.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Lambics are particularly unique because they use spontaneous fermentation, 
                        allowing wild environmental yeasts and microorganisms to ferment the beer naturally.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Sour;