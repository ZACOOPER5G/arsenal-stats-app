import axios from 'axios'
import { Stats } from 'fs'
import { ReactNode, useEffect, useState } from 'react'
import playerData from '../data/players.json'

interface PlayerCardStats {
    [name: string] : ReactNode;
}

export const PlayerCard = (props: any) => {
    const [playerStats, setPlayerStats] = useState<PlayerCardStats>({})
    const [isPlayerSelected, setIsPlayerSelected] = useState(false)
    // retrieves player object
    let playerObj = playerData.find(item => {
        if (item.keyName === props.player) {
            return item
        }
        props.player && setIsPlayerSelected(true)
    })

    let playerKey = playerObj?.id
    let playerImg = playerObj?.imageUrl
    let playerName = playerObj?.name
    let playerPosition = playerObj?.position
    let playerNationality = playerObj?.nationality
    let playerAge = playerObj?.age
    let playerDOB = playerObj?.dob
    let playerHeight = playerObj?.height

    const options = {
        method: 'GET',
        url: `https://footapi7.p.rapidapi.com/api/player/${playerKey}/tournament/17/season/41886/statistics`,
        headers: {
          'X-RapidAPI-Key': '27d1c8b018mshf0fd64efe848ad6p1be2b4jsn632339a8f382',
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };

    useEffect(() => {
        getPlayerData()
    }, [isPlayerSelected])

    const getPlayerData = () => {
        //@ts-ignore
        axios.request(options)
        .then(res => {
            setPlayerStats(res.data.statistics)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container">
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
                        <span className="description">{playerStats.goals}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Assists</h3>
                        <span className="description">{playerStats.assists}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Appearances</h3>
                        <span className="description">{playerStats.appearances}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
