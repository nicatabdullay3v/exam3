import React from 'react'
import "./AboutChef.scss"
const AboutChef = () => {
    return (
        <section id='about_chef'>
            <div className="container">
                <div className="about_chef">
                    <div className="about_chef_left">
                        <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
                    </div>
                    <div className="about_chef_right">
                        <div className="text">
                            <div className="name">
                                <p>ABOUT TASTY</p>
                            </div>
                            <div className="title">
                                <h2>Our chef cooks the most delicious food for you</h2>
                            </div>
                            <div className="descript1">
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div className="descrip2">
                                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutChef