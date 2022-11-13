import React from 'react';

function Form(){
    const [memesData, setMemesData] = React.useState([])
    //fetch MEME API
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(resp => resp.json())
        .then(datas => setMemesData(datas.data.memes))
    }, [])

    // const memesData = datas.data.memes
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    //random image handler
    function buttonClickHandler() {
        //randomize number from 0 to 99
        const random = Math.floor(Math.random() * memesData.length)
        const url = memesData[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    //form handler

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault() 
    }

    return(
        <form className="form" onSubmit={handleSubmit}> 
            <div className='grid'>
                <div className='input-text-wrapper'>
                    <input
                        className="text-field field"
                        type="text"
                        placeholder="Enter Upper Text"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />

                    <input
                        className="text-field field"
                        type="text"
                        placeholder="Enter Bottom Text"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>    
                <button 
                    className="button field" 
                    onClick={buttonClickHandler}
                >
                    Get a new meme images
                </button>
            </div>
            <div 
                className="meme-img-wrapper grid">
                <img 
                    className="meme-image" 
                    src={meme.randomImage} 
                    alt=''
                />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </form>

    )
}

export default Form;