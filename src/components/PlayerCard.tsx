import axios from 'axios'
import playerData from '../data/players.json'

export const PlayerCard = (props: any) => {
    // retrieves player object
    let playerObj = playerData.find(item => {
        if (item.keyName === props.player) {
            return item
        }
    })

    let playerKey = playerObj?.id
    let playerImg = playerObj?.imageUrl
    let playerName = playerObj?.name
    let playerPosition = playerObj?.position
    let playerNationality = playerObj?.nationality
    let playerAge = playerObj?.age
    let playerDOB = playerObj?.dob
    let playerHeight = playerObj?.height
    let playerGoals = playerObj?.goals

    const options = {
        method: 'GET',
        url: `https://footapi7.p.rapidapi.com/api/search/${playerKey}`,
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_KEY,
          'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
        }
      };

    const getPlayerData = () => {
        //@ts-ignore
        axios.request(options)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }


    return (
        <div className="container">
            <button onClick={getPlayerData}>click for stats</button>
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
                        <span className="description">{playerGoals}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals</h3>
                        <span className="description">{playerGoals}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals</h3>
                        <span className="description">{playerGoals}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
