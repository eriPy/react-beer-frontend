import BelginAleImg from "../assets/belgian-ale.jpg";

function BelgianAle() {
    return (
        <section>
            <h3 className="beer-name">
                Belgian Ale
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        Belgium.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        Medieval tradition and subsequent evolutions.
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
                    <img src={BelginAleImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Top fermentation. Fruity esters, spice notes, high carbonation, 
                        and highly distinct yeasts. Ranges from light beers to extremely 
                        strong ones. Includes styles such as Belgian Blonde, Dubbel, 
                        Tripel, Quadrupel, Saison, Witbier, and Lambic.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Trappist is not a beer style—it is a designation for beer brewed 
                        under specific conditions related to Trappist monasteries. Furthermore, 
                        Belgian Ales vary so much that one style can be completely different from another.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default BelgianAle;