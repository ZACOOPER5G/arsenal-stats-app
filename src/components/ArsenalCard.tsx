

export const ArsenalCard = () => {


    return (
        <div className="container">
            <div className="card">
                <div className="player">
                    <img src={'playerImg'} alt={'playerName'} className={'playerName'} />
                </div>
                <div className="player-name">
                    {'playerName'}
                </div>
                <div className="stats-container" >
                    <div className="group">
                        <h3 className="label">Position</h3>
                        <span className="description">{'playerPosition'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Nationality</h3>
                        <span className="description">{'playerNationality'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Age</h3>
                        <span className="description">{'playerAge'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">DOB</h3>
                        <span className="description">{'playerDOB'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Height</h3>
                        <span className="description">{'playerHeight'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals</h3>
                        <span className="description">{''}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Assists</h3>
                        <span className="description">{'playerStats.assists === null || !playerStats.appearances ? : playerStats.assists'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Appearances</h3>
                        <span className="description">{'playerStats.appearances === null || !playerStats.appearances ? : playerStats.appearances'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Matches Started</h3>
                        <span className="description">{'playerStats.matchesStarted === null || !playerStats.matchesStarted ? : playerStats.matchesStarted'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Goals/Assists</h3>
                        <span className="description">{'playerStats.goalsAssistsSum === null || !playerStats.goalsAssistsSum ? : playerStats.goalsAssistsSum'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Minutes Played</h3>
                        <span className="description">{'playerStats.minutesPlayed === null || !playerStats.minutesPlayed ? : playerStats.minutesPlayed'}</span>
                    </div>
                    <div className='group'>
                        <h3 className="label">Key Passes</h3>
                        <span className="description">{'playerStats.keyPasses === null || !playerStats.keyPasses ? : playerStats.keyPasses'}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
