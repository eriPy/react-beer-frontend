import AmberAleImg from "../assets/amber-ale.jpg";

function AmberAle() {
    return (
        <section>
            <h3 className="beer-name">
                Amber Ale
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        United States (modern style).
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Mainly the 1980s.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        There is no single inventor. The term gained traction among early American 
                        microbreweries during the 1980s.
                    </p>
                </section>
                <section className="section-img">
                    <img src={AmberAleImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Amber to copper color. More pronounced malt profile with caramel and toffee notes. 
                        Medium bitterness, medium body, and American hops. Generally more 
                        malt-forward than a Pale Ale.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Think of Amber Ale as a middle ground: Pale Ale → Amber Ale → Brown Ale. 
                        Originally "amber" just described the color, but it eventually solidified 
                        into its own distinct style.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default AmberAle;