import React from 'react'
import '../Css/About.css'
import arindam from "../img/1.jpg"
export default function About() {
    return (
        <section id='about'>
            <h1>ABOUT ME</h1>
            <div id="container">
                <div className="pr">
                    <img src={arindam} alt="image" />
                </div>
                <div className="c">
                    <p>Name: Arindam Mondal</p>
                    <p>Occupation: Proggramer</p>
                    <p>Address : Goramahal, Moyna, Purba Mednipur, WB , 721642</p>
                    <p>Phone Number: +918327282965</p>
                    <p>Email: marindam2017@gmail.com</p>
                </div>
            </div>
            <div className="lnk">
                <a href="https://www.facebook.com/profile.php?id=1000699388202128" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/arindam_kumar_mondal/" target="_blank">Instagram</a>
                <a href="https://www.youtube.com/channel/UClkomV-p7Ul_d4-Ye5uOvYg" target="_blank">Youtube</a>
                <a href="marindam2017@gmail.com" target="_blank">Email</a>
            </div>
        </section>
    )
}
