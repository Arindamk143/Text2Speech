import React from 'react'
import "../Css/mainApp.css"

export default function mainApp() {
    let speech = function () {
        let textArea = document.getElementById("textArea")
        let Talk = new SpeechSynthesisUtterance(textArea.value)
        speechSynthesis.speak(Talk)
    }
    return (
        <section id="home">
            <h1>Welcome To Text2Speech Convertor</h1>
            <div className='mainBody'>
                <div className="box">
                    <textarea id="textArea" cols="30" rows="10" placeholder='Enter Your Text Here'></textarea>
                </div>
                <button id='btn' onClick={speech}>Conver To Voice</button>
            </div>
        </section>
    )
}
