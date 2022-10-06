import React, {useEffect, useState} from 'react';
import '../CSS/Stats.css'

const finnhub = require('finnhub');
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "cd47482ad3i6jmnu4450cd47482ad3i6jmnu445g"
const finnhubClient = new finnhub.DefaultApi()

function Stats(props) {
    const [stockData, setStockData] = useState([]);
    const [stockList, setStockList] = useState([])

    useEffect(()=>{
        finnhubClient.quote("AAPL", (error, data, response) => {
            console.log(data)
        });


    } ,[])

    return (
        <section className='Stats'>
            <div className="stats__container">

                {/*stocks bought*/}
                <div className="stats__header">
                    <p>Stocks</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>

                {/*stocks can buy*/}
                <div className="stats__header">
                    <p>List</p>
                </div>

                <div className="stats__content">
                    <div className="stats__rows">

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Stats;