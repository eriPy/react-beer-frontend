import { useState, type Dispatch, type SetStateAction } from "react";
import AmberAle from "../components/AmberAle";
import BelgianAle from "../components/BelgianAle";
import IPA from "../components/IPA";
import Lager from "../components/Lager";
import PaleAle from "../components/PaleAle";
import Pilsner from "../components/Pilsner";
import Porter from "../components/Porter";
import Sour from "../components/Sour";
import Stout from "../components/Stout";
import WheatBeer from "../components/WheatBeer";

function Beer() {
    const [lagerInformation, setLagerInformation] = useState(false);
    const [pilsnerInformation, setPilsnerInformation] = useState(false);
    const [paleAleInformation, setPaleAleInformation] = useState(false);
    const [ipaInformation, setIpaInformation] = useState(false);
    const [stoutInformation, setStoutInformation] = useState(false);
    const [porterInformation, setPorterInformation] = useState(false);
    const [wheatBeerInformation, setWheatBeerInformation] = useState(false);
    const [sourInformation, setSourInformation] = useState(false);
    const [amberAleInformation, setAmberAleInformation] = useState(false);
    const [belgianAleInformation, setBelgianAleInformation] = useState(false);

    const setters: Record<string, Dispatch<SetStateAction<boolean>>> = {
        "lager": setLagerInformation,
        "pilsner": setPilsnerInformation,
        "pale ale": setPaleAleInformation,
        "ipa": setIpaInformation,
        "stout": setStoutInformation,
        "porter": setPorterInformation,
        "wheat beer": setWheatBeerInformation,
        "sour": setSourInformation,
        "amber ale": setAmberAleInformation,
        "belgian ale": setBelgianAleInformation  
    };

    const seeInformation = (is: string) => {
        for (const [key, setter] of Object.entries(setters)) {
            setter(key === is ? true: false);
        }
    }


    return (
        <main>
            <header>
                <h1 className="main-title">
                    Wellcome to Beer catalog
                </h1>
            </header>
            <div className="about-beer">
                <div className="beer-origin">
                <section className="section-origin-title">
                    <h2>
                        The Origin of Beer
                    </h2>
                </section>
                <section className="section-origin-information">
                    <p className="origin-infomation">
                        Beer is one of the oldest alcoholic beverages in the world. Historians believe that ancient
                        civilizations in Mesopotamia first brewed beer over 5,000 years ago. They discovered fermentation 
                        by chance when wet grain began to ferment naturally. Eventually, beer became an essential part 
                        of daily life, nutrition, and culture.
                    </p>
                </section>
                </div>
                <div className="beer-nowadays">
                <section className="beer-nowadays-title">
                    <h2>
                        Beer Nowadays
                    </h2>
                </section>
                <section className="beer-nowadays-information">
                    <p className="nowadays-information">
                        Today, beer is a global industry with endless variety. 
                        Craft breweries have revolutionized the market by experimenting with new 
                        flavors and traditional techniques. 
                        Furthermore, sustainable brewing methods and non-alcoholic options are becoming increasingly 
                        popular among consumers worldwide.
                    </p>
                </section>
                </div>
                <div className="general-information">
                <section className="type-of-beers">
                    <h3 className="type-of-beers-title">
                        Type of Beers
                    </h3>
                    <ul className="beers-list">
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("lager")}
                            >
                                Lager
                            </button>
                            {lagerInformation && <Lager/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("pilsner")}
                            >
                                Pilsner
                            </button>
                            {pilsnerInformation && <Pilsner/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("pale ale")}
                            >
                                Pale Ale
                            </button>
                            {paleAleInformation && <PaleAle/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("ipa")}
                            >
                                IPA
                            </button>
                            {ipaInformation && <IPA/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("stout")}
                            >
                                Stout
                            </button>
                            {stoutInformation && <Stout/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("porter")}
                            >
                                Porter
                            </button>
                            {porterInformation && <Porter/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("wheat beer")}
                            >
                                Wheat Beer
                            </button>
                            {wheatBeerInformation && <WheatBeer/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("sour")}
                            >
                                Sour
                            </button>
                            {sourInformation && <Sour/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("amber ale")}
                            >
                                Amber Ale
                            </button>
                            {amberAleInformation && <AmberAle/>}
                        </li>
                        <li>
                            <button 
                                className="button-content"
                                onClick={() => seeInformation("belgian ale")}
                            >
                                Belgian Ale
                            </button>
                            {belgianAleInformation && <BelgianAle/>}
                        </li>
                    </ul>
                </section>
                </div>
            </div>
        </main>
    );
}

export default Beer;