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
            </div>
        </div>
    )
}
