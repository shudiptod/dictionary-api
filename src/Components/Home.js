import React from 'react'


// react router import for navigation 
import { Link } from 'react-router-dom'


import '../App.css';

const Home = ({ items }) => {
    return (
        <div className="card-container">
            {items.map(item => (
                <div className="home-cards">
                    <h3><span>{item.word}</span></h3>
                    <div className="count-row">
                        <h4>Meanings: <span>{item.meanings.length}</span> </h4>
                        <h4>Phonetics: <span>{item.phonetics.length}</span> </h4>
                    </div>

                    <Link to={item.detailsLink} > <button className="link">See Details</button></Link>

                </div>

            ))}
        </div>
    )
}

export default Home
