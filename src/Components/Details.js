import React from 'react'

// react router import for navigation 
import { Link } from 'react-router-dom'


import '../App.css';
const Details = ({ items }) => {


    return (
        <div>
            <Link to="/home" > <button className="home-link">Back</button></Link>

            <div className="details">
                <div className="title">
                    <h1>{items[0].word}</h1>

                    {items[0].phonetics.map(phonetic => (
                        <h4>[<span className="text-color">{phonetic.text}</span>]</h4>
                    ))

                    }
                </div>
                <hr />
                <div className="meaning">
                    <h2>Meanings</h2>

                    {items[0].meanings.map(meaning => (
                        <div>
                            <h3 className="text-color">{meaning.partOfSpeech}</h3>
                            <hr />
                            {meaning.definitions.map(definition => (
                                <div className="definition-example">
                                    <h4>Definition</h4>
                                    <p>{definition.definition}</p>
                                    <h4>Example</h4>
                                    <p>{definition.example}</p>
                                </div>
                            ))}
                        </div>
                    ))}




                </div>
            </div>
        </div>
    )
}

export default Details
