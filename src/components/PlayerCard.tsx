import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import playerData from '../data/players.json';

interface PlayerCardStats {
    [name: string] : ReactNode;
};

export const PlayerCard = (props: any) => {
    const [playerStats, setPlayerStats] = useState<PlayerCardStats>({});
    const [isGK, setIsGK] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    // retrieves player object
    let playerObj = playerData.find(item => {
        if (item.keyName === props.player) {
            return item
        }
    });

    let playerImg = playerObj?.imageUrl;
    let playerName = playerObj?.name;
    let playerPosition = playerObj?.position;
    let playerNationality = playerObj?.nationality;
    let playerAge = playerObj?.age;
    let playerDOB = playerObj?.dob;
    let playerHeight = playerObj?.height;

    useEffect(() => {
        if (playerPosition === "GK") {
            setIsGK(true);
        } else {
            setIsGK(false)
        };
    }, [props.player, playerPosition]);

    const options = {
        method: 'GET',
        // url: `https://footapi7.p.rapidapi.com/api/player/${playerKey}/tournament/17/season/41886/statistics`,
        headers: {
          'X-RapidAPI-Key': '27d1c8b018mshf0fd64efe848ad6p1be2b4jsn632339a8f382',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
    };

    const getPlayerData = () => {
        axios.request(options)
        .then(res => {
            setPlayerStats(res.data.statistics)
        })
        .catch(err => {
            console.log(err)
        })
    };

    useEffect(() => {
        getPlayerData()
    }, [props.player]);

    return (
        <div className='container'>
          {(() => {
            if (!isGK && props.page === 1) {
              return (
                <div className="card">
                    <div className="player">
                        <img src={playerImg} alt={playerName} className={playerName} />
                    </div>
                    <div className="player-name">
                        {playerName}
                    </div>
                    <div className="stats-container" >
                        <div className="group">
                            <h3 className="label">Position</h3>
                            <span className="description">{playerPosition}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Nationality</h3>
                            <span className="description">{playerNationality}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Age</h3>
                            <span className="description">{playerAge}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">DOB</h3>
                            <span className="description">{playerDOB}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Height</h3>
                            <span className="description">{playerHeight}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals</h3>
                            <span className="description">{playerStats.goals === null || !playerStats.appearances  ? "0" : playerStats.goals}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Assists</h3>
                            <span className="description">{playerStats.assists === null || !playerStats.appearances ? '0' : playerStats.assists}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Appearances</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.matchesStarted}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals/Assists</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.goalsAssistsSum}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.minutesPlayed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Key Passes</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.keyPasses}</span>
                        </div>
                    </div>
                </div>
              )
            } else if (isGK && props.page === 1) {
              return (
                <div className="card">
                    <div className="player">
                        <img src={playerImg} alt={playerName} className={playerName} />
                    </div>
                    <div className="player-name">
                        {playerName}
                    </div>
                    <div className="stats-container" >
                        <div className="group">
                            <h3 className="label">Position</h3>
                            <span className="description">{playerPosition}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Nationality</h3>
                            <span className="description">{playerNationality}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Age</h3>
                            <span className="description">{playerAge}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">DOB</h3>
                            <span className="description">{playerDOB}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Height</h3>
                            <span className="description">{playerHeight}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves</h3>
                            <span className="description">{playerStats.goals === null ? "0" : playerStats.goals}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Clean Sheets</h3>
                            <span className="description">{playerStats.cleanSheet === null? '0' : playerStats.cleanSheet}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Appearances</h3>
                            <span className="description">{playerStats.appearances === null ? '0' : playerStats.appearances}</span>
                        </div>
                    </div>
                </div>
              )
            } else if (!isGK && props.page === 2) {
              return (
                <div className="card">
                    <div className="player">
                        <img src={playerImg} alt={playerName} className={playerName} />
                    </div>
                    <div className="player-name">
                        {playerName}
                    </div>
                    <div className="stats-container" >
                        <div className="group">
                            <h3 className="label">You're on a new page!~</h3>
                            <span className="description">{playerPosition}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Nationality</h3>
                            <span className="description">{playerNationality}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Age</h3>
                            <span className="description">{playerAge}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">DOB</h3>
                            <span className="description">{playerDOB}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Height</h3>
                            <span className="description">{playerHeight}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals</h3>
                            <span className="description">{playerStats.goals === null || !playerStats.appearances  ? "0" : playerStats.goals}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Assists</h3>
                            <span className="description">{playerStats.assists === null || !playerStats.appearances ? '0' : playerStats.assists}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Appearances</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.matchesStarted}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals/Assists</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.goalsAssistsSum}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.minutesPlayed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Key Passes</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.keyPasses}</span>
                        </div>
                    </div>
                </div>
              )
            }
          })()}
        </div>
      )
}