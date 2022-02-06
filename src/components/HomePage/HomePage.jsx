import React, {useState } from "react";
import "./HomePage.css"
import {Card} from "../Card/Card";


export const HomePage = (props) => {
    const [products, setProducts] = useState([
        {
            productName: "School Flayer",
            productPhoto: "https://i.imgur.com/Q1sCfjG.jpg",
            productDesc: "Advertising flyer for schools Open doors day created according to commission during the practice week. All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator",
            cardImg: "https://i.imgur.com/imnoEI8.jpg",
            cardDesk: 'Advertising flyer for schools Open doors day created according to commission during the practice week. All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator',
            cost: "1000 grn",
            link: "https://i.imgur.com/Q1sCfjG.jpg"
        },
        {
            productName: "School Business Card",
            productPhoto: "https://i.imgur.com/PiN3srw.jpg",
            productDesc: "Double-sided business card for SSOŠP Senica School created according to commission during the practice week.\n" +
                "All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator",
            cardImg: "https://i.imgur.com/TLc8a7b.jpg",
            cardDesk: 'Double-sided business card for SSOŠP Senica School created according to commission during the practice week.\n' +
                'All the grafics and rendering are made us  ing adobe Photoshop, the text is made using Adobe illustrator',
            cost: "750 grn",
            link: "https://i.imgur.com/PiN3srw.jpg"
        },
        {
            productName: "3D Model",
            productPhoto: "https://i.imgur.com/UDq5eUX.png",
            productDesc: "ruller's 3d model created according to commission during the practice week using oneshape to bee given away as a souvenir for people attending \"Open doors day\" at SSOŠP Senica",
            cardImg: "https://i.imgur.com/UDq5eUX.png",
            cardDesk: 'ruller\'s 3d model created according to commission during the practice week using oneshape to bee given away as a souvenir for people attending "Open doors day" at SSOŠP Senica',
            cost: "340 grn",
            link: "https://cad.onshape.com/documents/9ba1787156a8164c29cb87f7/w/05cfca05a439cf1e695e578b/e/006a3db594fb1520c7d099c6"
        },

    ])
    // let products = [
    //     {
    //         productName: "School Flayer",
    //         productPhoto: "https://i.imgur.com/Q1sCfjG.jpg",
    //         productDesc: "Advertising flyer for schools Open doors day created according to commission during the practice week. All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator",
    //         cardImg: "https://i.imgur.com/imnoEI8.jpg",
    //         cardDesk: 'Advertising flyer for schools Open doors day created according to commission during the practice week. All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator',
    //         cost: "1000 grn",
    //         link: "https://i.imgur.com/Q1sCfjG.jpg"
    //     },
    //     {
    //         productName: "School Business Card",
    //         productPhoto: "https://i.imgur.com/PiN3srw.jpg",
    //         productDesc: "Double-sided business card for SSOŠP Senica School created according to commission during the practice week.\n" +
    //             "All the grafics and rendering are made using adobe Photoshop, the text is made using Adobe illustrator",
    //         cardImg: "https://i.imgur.com/TLc8a7b.jpg",
    //         cardDesk: 'Double-sided business card for SSOŠP Senica School created according to commission during the practice week.\n' +
    //             'All the grafics and rendering are made us  ing adobe Photoshop, the text is made using Adobe illustrator',
    //         cost: "750 grn",
    //         link: "https://i.imgur.com/PiN3srw.jpg"
    //     },
    //     {
    //         productName: "3D Model",
    //         productPhoto: "https://i.imgur.com/UDq5eUX.png",
    //         productDesc: "ruller's 3d model created according to commission during the practice week using oneshape to bee given away as a souvenir for people attending \"Open doors day\" at SSOŠP Senica",
    //         cardImg: "https://i.imgur.com/UDq5eUX.png",
    //         cardDesk: 'ruller\'s 3d model created according to commission during the practice week using oneshape to bee given away as a souvenir for people attending "Open doors day" at SSOŠP Senica',
    //         cost: "340 grn",
    //         link: "https://cad.onshape.com/documents/9ba1787156a8164c29cb87f7/w/05cfca05a439cf1e695e578b/e/006a3db594fb1520c7d099c6"
    //     },
    //
    // ]


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
                            The mission of this project is to create a singular void space for viewing and exchanging
                            your experience and observations, concepts and ideas, through the form of virtual artwork

                            as it is, in our opinion the only singular thing that won't perish as long as the humankind
                            exists. we hope you'll be able to find an artwork that may spark a creative idea inside of
                            your mind.
                        </div>
                    </div>
                    <div className="homepage-skeleton-block">
                        <img className="homepage-skeleton-img" src='https://i.imgur.com/3OKVLib.png'/>
                    </div>
                </div>
                    <div className="art-cards-content">
                        {products.map((item, index) =>  <Card item={item}/>)}
                    </div>


                <div className="video-block">
                    <div className="contacts-title">
                        Advertisment Video
                    </div>
                    <div className="video-home">
                        <iframe className="video-home" src="https://www.youtube.com/embed/8ONb_uQFn_I"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen></iframe>
                    </div>
                    <div className="video-desc">
                        Advertisment Video

                    </div>
                </div>
            </div>
        </div>
    );
}


