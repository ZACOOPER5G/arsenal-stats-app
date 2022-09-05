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
                        <h3 className="label">Position</h3>
                        <span className="description"></span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Nationality</h3>
                        <span className="description"></span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Age</h3>
                        <span className="description"></span>
                    </div>
                    <div className='group'>
                        <h3 className="label">DOB</h3>
                        <span className="description"></span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Height</h3>
                        <span className="description"></span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals</h3>
                        <span className="description"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
