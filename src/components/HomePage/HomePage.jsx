import React from "react";
import "./HomePage.css"
import {Card} from "../Card/Card";





export const HomePage = (props) => {
    let products = [
        {
        productName: "NFR NAME",
        productPhoto: "https://i.imgur.com/jufSf7j.jpeg",
        productDesc: "Descriptopon",
            cardImg: "https://i.imgur.com/14rlaPj.mp4",
            cardDesk: 'somedeskoasdasddog kdjghikjfrihjpor i cjhjfgpoihj',
            cost: "240 grn"
    },
        {
            productName: "Ebaba",
            productPhoto: "https://i.imgur.com/fI2N0XC.png",
            productDesc: "Dqweqweqwewqeptopon",
            cardImg: "https://i.imgur.com/14rlaPj.mp4",
            cardDesk: 'somedeskoasdasddog kdjghikjfrihjpor i cjhjfgpoihj',
            cost: "240 grn"
        },
        {
            productName: "NFR 321321",
            productPhoto: "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F610198efb83a552a703080b3%2FCoca-Cola-s-first-series-of-NFTs-includes-this-digital-bubble-jacket-%2F960x0.jpg%3Ffit%3Dscale",
            productDesc: "shjkhjkhjkhjkopon",
            cardImg: "https://i.imgur.com/14rlaPj.mp4",
            cardDesk: 'somedeskoasdasddog kdjghikjfrihjpor i cjhjfgpoihj',
            cost: "240 grn"
        },
        {
            productName: "NFR 321321",
            productPhoto: "https://i.imgur.com/JcsVhag.jpeg",
            productDesc: "shjkhjkhjkhjkopon",
            cardImg: "https://i.imgur.com/14rlaPj.mp4",
            cardDesk: 'somedeskoasdasddog kdjghikjfrihjpor i cjhjfgpoihj',
            cost: "240 grn"
        },
        ]


    return (
        <div className="wrapper">
            <div className="content">
                <div className="homepage-welcome-content">
                    <div className='welcome-content'>
                        <div id='welcome' className='welcome-title'>
                            WELCOME
                        </div>
                        <div id='welcome' className="welcome-subtitle">
                            We are a project that combines an online gallery with an NFT-marketplace.
                            The mission of this project is to create a singular void space for viewing and exchanging your experience and observations, concepts and ideas, through the form of virtual artwork

                            as it is, in our opinion the only singular thing that won't perish as long as the humankind exists. we hope you'll be able to find an artwork that may spark a creative idea inside of your mind.
                        </div>
                    </div>
                </div>
                <div className="art-cards-wrapper">
                    <div className="art-cards-content">

                        {products.map((item, index) => {
                            return (<Card item={item}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}


