import React from 'react';
import '../CSS/Newsfeed.css'
import LineGraph from "./LineGraph";

function Newsfeed(props) {
    return (
        <section className='Newsfeed'>
            <div className="newsfeed__container">
                <div className="newsfeed__chart-section">
                    <div className="newsfeed__portfolio-value">
                        <h1>$114,351</h1>
                        <p>+$44.63 (+0.04%) Today</p>
                    </div>

                    <div className="newsfeed__chart">
                        <LineGraph />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Newsfeed;