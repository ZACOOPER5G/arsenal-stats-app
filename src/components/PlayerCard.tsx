import playerData from '../data/players.json'

type PlayerDataProps = {
    name: string
    imageUrl: string
    // position: string
    // nationality: string
    // age: string
    // dob: string
    // height: string
    // goals: string
}

export const PlayerCard = () => {
    let playerImg = playerData.map(item => item.imageUrl).toString()
    let playerName = playerData.map(item => item.name).toString();

    return (
        <div className="container">
            <div className="card">
                <div className="player">
                    <img src={playerImg} alt={playerName}/>
                </div>
                <div className="player-name">
                    {playerName}
                </div>
                <div className="stats-container" >
                    <div className="group">
                        <div className="label">Position</div>
                        <div className="description"></div>
                    </div>
                    <div className='group'>
                        <div className="label">Nationality</div>
                        <div className="description"></div>
                    </div>
                    <div className='group'>
                        <div className="label">Age</div>
                        <div className="description"></div>
                    </div>
                    <div className='group'>
                        <div className="label">DOB</div>
                        <div className="description"></div>
                    </div>
                    <div className='group'>
                        <div className="label">Height</div>
                        <div className="description"></div>
                    </div>
                    <div className='group'>
                        <div className="label">Goals</div>
                        <div className="description"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
