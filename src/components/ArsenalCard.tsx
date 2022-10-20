import { useEffect, useState } from 'react';
import ArsenalLogo from '../images/arsenal-logo.svg';

export const ArsenalCard = () => {
    interface TeamDataProps {
        topPlayers: any
    }

    const [teamData, setTeamData] = useState<TeamDataProps>()

    const axios = require("axios");

    const options = {
        method: 'GET',
        url: 'https://footapi7.p.rapidapi.com/api/team/42/tournament/17/season/41886/best-players',
        headers: {
            'X-RapidAPI-Key': '27d1c8b018mshf0fd64efe848ad6p1be2b4jsn632339a8f382',
            'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    };

    const getTeamData = () => {
        axios.request(options)
        .then((res: any) => {
            setTeamData(res.data)
            console.log(res.data)
        })
        .catch((err: any) => {
            console.log(err)
        })
    };

    useEffect(() => {
        getTeamData()
    }, []);


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
                        <h3 className="label">Goals Leader</h3>
                        <span className="description">{teamData?.topPlayers.goals['0'].player.shortName} ({teamData?.topPlayers.goals['0'].statistics.goals})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Assists Leader</h3>
                        <span className="description">{teamData?.topPlayers.assists['0'].player.shortName} ({teamData?.topPlayers.assists['0'].statistics.assists})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals/Assists Leader</h3>
                        <span className="description">{teamData?.topPlayers.goalsAssistsSum['0'].player.shortName} ({teamData?.topPlayers.goalsAssistsSum['0'].statistics.goalsAssistsSum})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Accurate Pass Leader</h3>
                        <span className="description">{teamData?.topPlayers.accuratePasses['0'].player.shortName} ({teamData?.topPlayers.accuratePasses['0'].statistics.accuratePasses})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Ratings Leader</h3>
                        <span className="description">{teamData?.topPlayers.rating['0'].player.shortName} ({teamData?.topPlayers.rating['0'].statistics.rating})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Tackles Leader</h3>
                        <span className="description">{teamData?.topPlayers.tackles['0'].player.shortName} ({teamData?.topPlayers.tackles['0'].statistics.tackles})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Key Passes Leader</h3>
                        <span className="description">{teamData?.topPlayers.keyPasses['0'].player.shortName} ({teamData?.topPlayers.keyPasses['0'].statistics.keyPasses})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Successful Dribbles Leader</h3>
                        <span className="description">{teamData?.topPlayers.successfulDribbles['0'].player.shortName} ({teamData?.topPlayers.successfulDribbles['0'].statistics.successfulDribbles})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Yellow Card Leader</h3>
                        <span className="description">{teamData?.topPlayers.yellowCards['0'].player.shortName} ({teamData?.topPlayers.yellowCards['0'].statistics.yellowCards})</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Red Card Leader</h3>
                        <span className="description">{teamData?.topPlayers.redCards === null ? 'None' : `${teamData?.topPlayers.redCards['0'].player.shortName} (${teamData?.topPlayers.goals['0'].statistics.redCards})`}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
