import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import playerData from '../data/players.json';
import { LimitMessage } from './LimitMessage';

interface PlayerCardStats {
    [name: string] : ReactNode;
};

export const PlayerCard = (props: any) => {
    const [playerStats, setPlayerStats] = useState<PlayerCardStats>({});
    const [isGK, setIsGK] = useState<boolean>(false);
    const [limit, setLimit] = useState<boolean>(false)

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
            if (err.response.status === 429) {
                setLimit(true)
            }
        })
    };

    useEffect(() => {
        getPlayerData();
    }, [props.player]);

    return (
        <div className='container'>
          {(() => {
            if (!isGK && props.page === 1) {
              return (
                <div className="card">
                    {limit && 
                    <>
                        <LimitMessage />
                    </>}
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
                            <span className="description">{!playerStats.goals ? "N/A" : playerStats.goals}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Assists</h3>
                            <span className="description">{!playerStats.assists ? 'N/A' : playerStats.assists}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Appearances</h3>
                            <span className="description">{!playerStats.appearances ? 'N/A' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{!playerStats.matchesStarted ? 'N/A' : playerStats.matchesStarted}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals/Assists</h3>
                            <span className="description">{!playerStats.goalsAssistsSum ? 'N/A' : playerStats.goalsAssistsSum}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{!playerStats.minutesPlayed ? 'N/A' : playerStats.minutesPlayed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Key Passes</h3>
                            <span className="description">{!playerStats.keyPasses ? 'N/A' : playerStats.keyPasses}</span>
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
                            <span className="description">{!playerStats.appearances ? 'N/A' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{!playerStats.appearances ? 'N/A' : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{!playerStats.minutesPlayed ? 'N/A' : playerStats.minutesPlayed}</span>
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
                            <span className="description">{!playerStats.cleanSheet ? 'N/A' : playerStats.cleanSheet}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves</h3>
                            <span className="description">{!playerStats.saves ? 'N/A' : playerStats.saves}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Clearances</h3>
                            <span className="description">{!playerStats.clearances ? 'N/A' : playerStats.clearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Rating</h3>
                            {/* @ts-ignore */}
                            <span className="description">{!playerStats.rating ? 'N/A' : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Touches</h3>
                            <span className="description">{!playerStats.touches ? 'N/A' : playerStats.touches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{!playerStats.totalPasses ? 'N/A' : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{playerStats.accuratePasses ? 'N/A%' : Math.floor(playerStats.accuratePasses) + '%'}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurated Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{!playerStats.accurateLongBallsPercentage ? 'N/A%' : `${Math.floor(playerStats.accurateLongBallsPercentage)}%`}</span>
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
                            <span className="description">{!playerStats.savesCaught ? 'N/A' : playerStats.savesCaught}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Parried</h3>
                            <span className="description">{!playerStats.savesParried ? 'N/A' : playerStats.savesParried}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Inside Box</h3>
                            <span className="description">{!playerStats.savedShotsFromInsideTheBox ? 'N/A' : playerStats.savedShotsFromInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Outside Box</h3>
                            <span className="description">{!playerStats.savedShotsFromOutsideTheBox ? 'N/A' : playerStats.savedShotsFromOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Punches</h3>
                            <span className="description">{!playerStats.punches ? 'N/A' : playerStats.punches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Faced</h3>
                            <span className="description">{!playerStats.penaltyFaced ? 'N/A' : playerStats.penaltyFaced}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Saved</h3>
                            <span className="description">{!playerStats.penaltySave ? 'N/A' : `${playerStats.penaltySave}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Conceded</h3>
                            <span className="description">{!playerStats.penaltyConceded ? 'N/A' : `${playerStats.penaltyConceded}`}</span>
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
                            <span className="description">{!playerStats.goalsConceded ? 'N/A' : playerStats.goalsConceded}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Inside the Box</h3>
                            <span className="description">{!playerStats.goalsConcededInsideTheBox ? 'N/A' : playerStats.goalsConcededInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Outside the Boox</h3>
                            <span className="description">{!playerStats.goalsConcededOutsideTheBox ? 'N/A' : playerStats.goalsConcededOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">High Claims</h3>
                            <span className="description">{!playerStats.highClaims ? 'N/A' : playerStats.highClaims}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Crosses Not Claimed</h3>
                            <span className="description">{!playerStats.crossesNotClaimed ? 'N/A' : playerStats.crossesNotClaimed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Goals</h3>
                            <span className="description">{!playerStats.errorLeadToGoal ? 'N/A' : playerStats.errorLeadToGoal}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Shots</h3>
                            <span className="description">{!playerStats.errorLeadToShot ? 'N/A' : `${playerStats.errorLeadToShot}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{!playerStats.totwAppearances ? 'N/A' : `${playerStats.totwAppearances}`}</span>
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
                            <span className="description">{!playerStats.rating ? "N/A" : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots On Target</h3>
                            <span className="description">{!playerStats.shotsOnTarget ? "N/A" : playerStats.shotsOnTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots Off Target</h3>
                            <span className="description">{!playerStats.shotsOffTarget ? "N/A" : playerStats.shotsOffTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribbles</h3>
                            <span className="description">{!playerStats.successfulDribbles ? "N/A" : playerStats.successfulDribbles}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribble %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{!playerStats.successfulDribblesPercentage ? "N/A%" : `${Math.floor(playerStats.successfulDribblesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{!playerStats.totwAppearances ? "N/A" : playerStats.totwAppearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{!playerStats.totalPasses ? 'N/A' : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{!playerStats.accuratePassesPercentage ? 'N/A%' : `${Math.floor(playerStats.accuratePassesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Long Balls</h3>
                            <span className="description">{!playerStats.totalLongBalls ? 'N/A' : playerStats.totalLongBalls}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{!playerStats.accurateLongBallsPercentage ? 'N/A%' : `${Math.floor(playerStats.accurateLongBallsPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Created</h3>
                            <span className="description">{!playerStats.bigChancesCreated ? 'N/A' : playerStats.bigChancesCreated}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Missed</h3>
                            <span className="description">{!playerStats.bigChancesMissed ? 'N/A' : playerStats.bigChancesMissed}</span>
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
                              <span className="description">{!playerStats.totalOppositionHalfPasses ? "N/A" : playerStats.totalOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Oppositional Half Passes</h3>
                              <span className="description">{!playerStats.accurateOppositionHalfPasses ? "N/A" : playerStats.accurateOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Own Half Passes</h3>
                              <span className="description">{!playerStats.totalOwnHalfPasses ? "N/A" : playerStats.totalOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Own Half Passes</h3>
                              <span className="description">{!playerStats.accurateOwnHalfPasses ? "N/A" : playerStats.accurateOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Final Third Passes</h3>
                              <span className="description">{!playerStats.accurateFinalThirdPasses ? "N/A" : playerStats.accurateFinalThirdPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Cross Attempts</h3>
                              <span className="description">{!playerStats.totalCross  ? "N/A" : playerStats.totalCross}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Crosses</h3>
                              <span className="description">{!playerStats.accurateCrosses ? 'N/A' : playerStats.accurateCrosses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Cross %</h3>
                              {/* @ts-ignore */}
                              <span className="description">{!playerStats.accurateCrossesPercentage ? 'N/A%' : `${Math.floor(playerStats.accurateCrossesPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Long Balls</h3>
                              <span className="description">{!playerStats.totalLongBalls ? 'N/A' : playerStats.totalLongBalls}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Pass to Assist</h3>
                              <span className="description">{!playerStats.passToAssist ? 'N/A' : playerStats.passToAssist}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Touches</h3>
                              <span className="description">{!playerStats.touches ? 'N/A' : playerStats.touches}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Possession Lost</h3>
                              <span className="description">{!playerStats.possessionLost ? 'N/A' : playerStats.possessionLost}</span>
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
                              <span className="description">{!playerStats.cleanSheet ? "N/A" : playerStats.cleanSheet}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Clearances</h3>
                              <span className="description">{!playerStats.clearances ? "N/A" : playerStats.clearances}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Blocked Shots</h3>
                              <span className="description">{!playerStats.blockedShots ? "N/A" : playerStats.blockedShots}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Attempted</h3>
                              <span className="description">{!playerStats.tackles ? "N/A" : playerStats.tackles}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Won</h3>
                              <span className="description">{!playerStats.tacklesWon ? "N/A" : playerStats.tacklesWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackle Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{!playerStats.tacklesWonPercentage  ? "N/A%" : `${Math.floor(playerStats.tacklesWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Won</h3>
                              <span className="description">{!playerStats.totalDuelsWon ? 'N/A' : playerStats.totalDuelsWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duel Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{!playerStats.totalDuelsWonPercentage ? 'N/A%' : `${Math.floor(playerStats.totalDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Lost</h3>
                              <span className="description">{!playerStats.duelLost ? 'N/A' : playerStats.duelLost}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ground Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{!playerStats.groundDuelsWonPercentage ? 'N/A%' : `${Math.floor(playerStats.groundDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ariel Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{!playerStats.aerialDuelsWonPercentage ? 'N/A%' : `${Math.floor(playerStats.aerialDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Interceptions</h3>
                              <span className="description">{!playerStats.interceptions ? 'N/A' : playerStats.interceptions}</span>
                          </div>
                      </div>
                  </div>
                )
              }
          })()}
        </div>
      )
}