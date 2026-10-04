import StoutImg from "../assets/stout.jpeg";

function Stout() {
    return (
        <section>
            <h3 className="beer-name">
                Stout  
            </h3>
            <div className="the-beer-information">
                <section className="section-origin">
                    <h4 className="origin">
                        Origin
                    </h4>
                    <p className="origin-content">
                        England/Ireland, derived from the Porter tradition.
                    </p>
                </section>
                <section className="section-time">
                    <h4 className="time">
                        Time
                    </h4>
                    <p className="time-content">
                        18th century.
                    </p>
                </section>
                <section className="section-creator">
                    <h4 className="creator">
                        Creator
                    </h4>
                    <p className="creator-content">
                        There is no single creator. However, Arthur Guinness signed the famous 
                        9,000-year lease for St. James's Gate Brewery in Dublin in 1759, began brewing 
                        porter in the 1770s, and Guinness eventually became one of the most 
                        famous Stout beers in the world.
                    </p>
                </section>
                <section className="section-img">
                    <img src={StoutImg}/>
                </section>
                <section className="section-features">
                    <h4 className="features">
                        Features
                    </h4>
                    <p className="features-content">
                        Dark to black. Roasted malt, coffee, chocolate, and caramel notes. 
                        Moderate bitterness. Some versions are very dry; others are sweet 
                        and full-bodied.
                    </p>
                </section>
                <section className="section-fun-fact">
                    <h4 className="fun-fact">
                        Fun Fact
                    </h4>
                    <p className="fun-fact-content">
                        Not all Stouts are the same: there are various styles, including Dry Stout, 
                        Oatmeal Stout, Imperial Stout, and Milk Stout.
                    </p>
                </section>
            </div>
        </section>
    )
}

export default Stout;