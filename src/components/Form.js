import datas from '../data'
import React from 'react';

function Form(){
    const MemesData = datas.data.memes
    let [url, setUrl] = React.useState(MemesData[0].url)

    function buttonClickHandler() {
        //randomize number from 0 to 99
        const random = Math.floor(Math.random() * MemesData.length) 
        //set the useState to a random url
        // setUrl(MemesData[random].url)
        //best practice to use a callback function instead of above setter
        // setUrl(function(){
        //     return setUrl(MemesData[random].url)
        // })
        //using arrow function
        setUrl(url => MemesData[random].url)
        
    }

    return(
        <section className="form">
            <div className="input-text-wrapper">
                <input className="text-field" type="text" 
                placeholder="Enter Upper Text"/>
                <input 
                className="text-field" 
                type="text"
                placeholder="Enter Bottom Text"/>
            </div>
            <button onClick={buttonClickHandler} className="button">Get a new meme images</button>
            <div className="meme-img-wrapper">
                <img className="meme-image" src={url} alt=''/>
            </div>
        </section>

    )
}

export default Form;