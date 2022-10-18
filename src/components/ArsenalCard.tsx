import { useEffect, useState } from 'react';
import ArsenalLogo from '../images/arsenal-logo.svg';

export const ArsenalCard = () => {
    const [teamData, setTeamData] = useState({})

    const axios = require("axios");

    const options = {
    method: 'GET',
    url: 'https://footapi7.p.rapidapi.com/api/tournament/17/season/41886/standings/total',
    headers: {
        'X-RapidAPI-Key': '27d1c8b018mshf0fd64efe848ad6p1be2b4jsn632339a8f382',
        'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
    }
    };

    const getTeamData = () => {
        axios.request(options)
        .then((res: any) => {
            setTeamData(res.data.statistics)
            console.log(teamData)
        })
        .catch((err: any) => {
            console.log(err)
        })
    };

    useEffect(() => {
        getTeamData()
    }, [teamData]);


    return (
        <div className="container">
            <div className="card">
                <div className="player">
                    <img src={ArsenalLogo} alt={'arsenal'} className='arsenal-logo' />
                </div>
                <div className="player-name">
                    Arsenal
                </div>
                <div className="stats-container" >
                    <div className="group">
                        <h3 className="label">Current Position</h3>
                        <span className="description">1</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Wins</h3>
                        <span className="description">9</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Losses</h3>
                        <span className="description">1</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Draws</h3>
                        <span className="description">0</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals Scored</h3>
                        <span className="description">24</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals Conceded</h3>
                        <span className="description">10</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goal Difference</h3>
                        <span className="description">+14</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Possession %</h3>
                        <span className="description">56.6%</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Pass %</h3>
                        <span className="description">85.0%</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Rating</h3>
                        <span className="description">6.85</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
