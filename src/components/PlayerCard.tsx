import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import playerData from '../data/players.json';

interface PlayerCardStats {
    [name: string] : ReactNode;
};

export const PlayerCard = (props: any) => {
    const [playerStats, setPlayerStats] = useState<PlayerCardStats>({});
    const [isGK, setIsGK] = useState<boolean>(false);

    // retrieves player object
    let playerObj = playerData.find(item => {
        if (item.keyName === props.player) {
            return item
        }
    });

    let playerKey = playerObj?.id;
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
        url: `https://footapi7.p.rapidapi.com/api/player/${playerKey}/tournament/17/season/41886/statistics`,
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
                            <span className="description">{playerStats.matchesStarted === null || !playerStats.matchesStarted ? '0' : playerStats.matchesStarted}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals/Assists</h3>
                            <span className="description">{playerStats.goalsAssistsSum === null || !playerStats.goalsAssistsSum ? '0' : playerStats.goalsAssistsSum}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{playerStats.minutesPlayed === null || !playerStats.minutesPlayed ? '0' : playerStats.minutesPlayed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Key Passes</h3>
                            <span className="description">{playerStats.keyPasses === null || !playerStats.keyPasses ? '0' : playerStats.keyPasses}</span>
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
                            <h3 className="label">Appearances</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{playerStats.appearances === null || !playerStats.appearances ? '0' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{playerStats.minutesPlayed === null || !playerStats.minutesPlayed ? '0' : playerStats.minutesPlayed}</span>
                        </div>
                    </div>
                </div>
              )
            } else if (isGK && props.page === 2) {
                return (
                  <div className="card">
                      <div className="player">
                          <img src={playerImg} alt={playerName} className={playerName} />
                      </div>
                      <div className="player-name">
                          {playerName}
                      </div>
                      <div className="stats-container" >
                      <div className='group'>
                            <h3 className="label">Clean Sheets</h3>
                            <span className="description">{playerStats.cleanSheet === null || !playerStats.cleanSheet ? '0' : playerStats.cleanSheet}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves</h3>
                            <span className="description">{playerStats.saves === null || !playerStats.saves ? '0' : playerStats.saves}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Clearances</h3>
                            <span className="description">{playerStats.clearances === null || !playerStats.clearances ? '0' : playerStats.clearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Rating</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.rating === null || !playerStats.rating ? '0' : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Touches</h3>
                            <span className="description">{playerStats.touches === null || !playerStats.touches ? '0' : playerStats.touches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{playerStats.totalPasses === null || !playerStats.totalPasses ? '0' : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.accuratePasses === null || !playerStats.accuratePasses ? '0%' : Math.floor(playerStats.accuratePasses) + '%'}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurated Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.accurateLongBallsPercentage === null || !playerStats.accurateLongBallsPercentage ? '0%' : `${Math.floor(playerStats.accurateLongBallsPercentage)}%`}</span>
                        </div>
                    </div>
                </div>
                )
              } else if (isGK && props.page === 3) {
                return (
                  <div className="card">
                      <div className="player">
                          <img src={playerImg} alt={playerName} className={playerName} />
                      </div>
                      <div className="player-name">
                          {playerName}
                      </div>
                      <div className="stats-container" >
                      <div className='group'>
                            <h3 className="label">Saves Caught</h3>
                            <span className="description">{playerStats.savesCaught === null || !playerStats.savesCaught ? '0' : playerStats.savesCaught}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Parried</h3>
                            <span className="description">{playerStats.savesParried === null || !playerStats.savesParried ? '0' : playerStats.savesParried}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Inside Box</h3>
                            <span className="description">{playerStats.savedShotsFromInsideTheBox === null || !playerStats.savedShotsFromInsideTheBox ? '0' : playerStats.savedShotsFromInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Outside Box</h3>
                            <span className="description">{playerStats.savedShotsFromOutsideTheBox === null || !playerStats.savedShotsFromOutsideTheBox ? '0' : playerStats.savedShotsFromOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Punches</h3>
                            <span className="description">{playerStats.punches === null || !playerStats.punches ? '0' : playerStats.punches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Faced</h3>
                            <span className="description">{playerStats.penaltyFaced === null || !playerStats.penaltyFaced ? '0' : playerStats.penaltyFaced}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Saved</h3>
                            <span className="description">{playerStats.penaltySave === null || !playerStats.penaltySave ? '0' : `${playerStats.penaltySave}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Conceded</h3>
                            <span className="description">{playerStats.penaltyConceded === null || !playerStats.penaltyConceded ? '0' : `${playerStats.penaltyConceded}`}</span>
                        </div>
                    </div>
                </div>
                )
              } else if (isGK && props.page === 4) {
                return (
                  <div className="card">
                      <div className="player">
                          <img src={playerImg} alt={playerName} className={playerName} />
                      </div>
                      <div className="player-name">
                          {playerName}
                      </div>
                      <div className="stats-container" >
                      <div className='group'>
                            <h3 className="label">Goals Conceded</h3>
                            <span className="description">{playerStats.goalsConceded === null || !playerStats.goalsConceded ? '0' : playerStats.goalsConceded}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Inside the Box</h3>
                            <span className="description">{playerStats.goalsConcededInsideTheBox === null || !playerStats.goalsConcededInsideTheBox ? '0' : playerStats.goalsConcededInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Outside the Boox</h3>
                            <span className="description">{playerStats.goalsConcededOutsideTheBox === null || !playerStats.goalsConcededOutsideTheBox ? '0' : playerStats.goalsConcededOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">High Claims</h3>
                            <span className="description">{playerStats.highClaims === null || !playerStats.highClaims ? '0' : playerStats.highClaims}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Crosses Not Claimed</h3>
                            <span className="description">{playerStats.crossesNotClaimed === null || !playerStats.crossesNotClaimed ? '0' : playerStats.crossesNotClaimed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Goals</h3>
                            <span className="description">{playerStats.errorLeadToGoal === null || !playerStats.errorLeadToGoal ? '0' : playerStats.errorLeadToGoal}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Shots</h3>
                            <span className="description">{playerStats.errorLeadToShot === null || !playerStats.errorLeadToShot ? '0' : `${playerStats.errorLeadToShot}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{playerStats.totwAppearances === null || !playerStats.totwAppearances ? '0' : `${playerStats.totwAppearances}`}</span>
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
                            <h3 className="label">Rating</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.rating === null || !playerStats.rating ? "0" : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots On Target</h3>
                            <span className="description">{playerStats.shotsOnTarget === null || !playerStats.shotsOnTarget ? "0" : playerStats.shotsOnTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots Off Target</h3>
                            <span className="description">{playerStats.shotsOffTarget === null || !playerStats.shotsOffTarget ? "0" : playerStats.shotsOffTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribbles</h3>
                            <span className="description">{playerStats.successfulDribbles === null || !playerStats.successfulDribbles ? "0" : playerStats.successfulDribbles}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribble %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.successfulDribblesPercentage === null || !playerStats.successfulDribblesPercentage ? "0%" : `${Math.floor(playerStats.successfulDribblesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{playerStats.totwAppearances === null || !playerStats.totwAppearances  ? "0" : playerStats.totwAppearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{playerStats.totalPasses === null || !playerStats.totalPasses ? '0' : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.accuratePassesPercentage === null || !playerStats.accuratePassesPercentage ? '0%' : `${Math.floor(playerStats.accuratePassesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Long Balls</h3>
                            <span className="description">{playerStats.totalLongBalls === null || !playerStats.totalLongBalls ? '0' : playerStats.totalLongBalls}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.accurateLongBallsPercentage === null || !playerStats.accurateLongBallsPercentage ? '0%' : `${Math.floor(playerStats.accurateLongBallsPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Created</h3>
                            <span className="description">{playerStats.bigChancesCreated === null || !playerStats.bigChancesCreated ? '0' : playerStats.bigChancesCreated}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Missed</h3>
                            <span className="description">{playerStats.bigChancesMissed === null || !playerStats.bigChancesMissed ? '0' : playerStats.bigChancesMissed}</span>
                        </div>
                    </div>
                </div>
              )
            } else if (!isGK && props.page === 3) {
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
                              <h3 className="label">Total Opposition Half Passes</h3>
                              <span className="description">{playerStats.totalOppositionHalfPasses === null || !playerStats.totalOppositionHalfPasses ? "0" : playerStats.totalOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Oppositional Half Passes</h3>
                              <span className="description">{playerStats.accurateOppositionHalfPasses === null || !playerStats.accurateOppositionHalfPasses ? "0" : playerStats.accurateOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Own Half Passes</h3>
                              <span className="description">{playerStats.totalOwnHalfPasses === null || !playerStats.totalOwnHalfPasses ? "0" : playerStats.totalOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Own Half Passes</h3>
                              <span className="description">{playerStats.accurateOwnHalfPasses === null || !playerStats.accurateOwnHalfPasses ? "0" : playerStats.accurateOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Final Third Passes</h3>
                              <span className="description">{playerStats.accurateFinalThirdPasses === null || !playerStats.accurateFinalThirdPasses ? "0" : playerStats.accurateFinalThirdPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Cross Attempts</h3>
                              <span className="description">{playerStats.totalCross === null || !playerStats.totalCross  ? "0" : playerStats.totalCross}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Crosses</h3>
                              <span className="description">{playerStats.accurateCrosses === null || !playerStats.accurateCrosses ? '0' : playerStats.accurateCrosses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Cross %</h3>
                              {/* @ts-ignore */}
                              <span className="description">{playerStats.accurateCrossesPercentage === null || !playerStats.accurateCrossesPercentage ? '0%' : `${Math.floor(playerStats.accurateCrossesPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Long Balls</h3>
                              <span className="description">{playerStats.totalLongBalls === null || !playerStats.totalLongBalls ? '0' : playerStats.totalLongBalls}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Pass to Assist</h3>
                              <span className="description">{playerStats.passToAssist === null || !playerStats.passToAssist ? '0' : playerStats.passToAssist}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Touches</h3>
                              <span className="description">{playerStats.touches === null || !playerStats.touches ? '0' : playerStats.touches}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Possession Lost</h3>
                              <span className="description">{playerStats.possessionLost === null || !playerStats.possessionLost ? '0' : playerStats.possessionLost}</span>
                          </div>
                      </div>
                  </div>
                )
              } else if (!isGK && props.page === 4) {
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
                              <h3 className="label">Clean Sheets</h3>
                              <span className="description">{playerStats.cleanSheet === null || !playerStats.cleanSheet ? "0" : playerStats.cleanSheet}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Clearances</h3>
                              <span className="description">{playerStats.clearances === null || !playerStats.clearances ? "0" : playerStats.clearances}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Blocked Shots</h3>
                              <span className="description">{playerStats.blockedShots === null || !playerStats.blockedShots ? "0" : playerStats.blockedShots}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Attempted</h3>
                              <span className="description">{playerStats.tackles === null || !playerStats.tackles ? "0" : playerStats.tackles}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Won</h3>
                              <span className="description">{playerStats.tacklesWon === null || !playerStats.tacklesWon ? "0" : playerStats.tacklesWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackle Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{playerStats.tacklesWonPercentage === null || !playerStats.tacklesWonPercentage  ? "0%" : `${Math.floor(playerStats.tacklesWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Won</h3>
                              <span className="description">{playerStats.totalDuelsWon === null || !playerStats.totalDuelsWon ? '0' : playerStats.totalDuelsWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duel Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{playerStats.totalDuelsWonPercentage === null || !playerStats.totalDuelsWonPercentage ? '0%' : `${Math.floor(playerStats.totalDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Lost</h3>
                              <span className="description">{playerStats.duelLost === null || !playerStats.duelLost ? '0' : playerStats.duelLost}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ground Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{playerStats.groundDuelsWonPercentage === null || !playerStats.groundDuelsWonPercentage ? '0%' : `${Math.floor(playerStats.groundDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ariel Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{playerStats.aerialDuelsWonPercentage === null || !playerStats.aerialDuelsWonPercentage ? '0%' : `${Math.floor(playerStats.aerialDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Interceptions</h3>
                              <span className="description">{playerStats.interceptions === null || !playerStats.interceptions ? '0' : playerStats.interceptions}</span>
                          </div>
                      </div>
                  </div>
                )
              }
          })()}
        </div>
      )
}