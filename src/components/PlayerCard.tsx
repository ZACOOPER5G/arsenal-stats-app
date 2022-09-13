import playerData from '../data/players.json'

export const PlayerCard = (props: any) => {
    // retrieves player object
    let playerObj = playerData.find(item => {
        if (item.keyName === props.player) {
            return item
        }
    })

    let playerImg = playerObj?.imageUrl

    let playerName = playerObj?.name

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
