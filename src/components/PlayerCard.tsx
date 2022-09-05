import playerData from '../data/players.json'
import yomama from '../../src/images/odegaard.jpg'

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

    console.log(yomama)

    let playerImg = playerData.map(item => item.imageUrl).toString()
    let playerName = playerData.map(item => item.name).toString();

    return (
        <div className="container">
            <div className="card">
                {playerData.map(item => (
                    <img src={item.imageUrl} alt={item.name}/>
                ))}
        
                <div className="player">

                </div>
            </div>
        </div>
    )
}
