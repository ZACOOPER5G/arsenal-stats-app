import axios from 'axios';
import { ReactNode, useEffect, useState } from 'react';
import playerData from '../data/players.json';
import { LimitMessage } from './LimitMessage';
import ClipLoader from "react-spinners/ClipLoader";

interface PlayerCardStats {
    [name: string] : ReactNode;
};

export const PlayerCard = (props: any) => {
    const [playerStats, setPlayerStats] = useState<PlayerCardStats>({});
    const [isGK, setIsGK] = useState<boolean>(false);
    const [limit, setLimit] = useState<boolean>(false)
    const [loading, setLoading] = useState(false)

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
        if (!loading) {
            setLoading(true)
        }
        axios.request(options)
        .then(res => {
            setPlayerStats(res.data.statistics)
            setLoading(false)
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
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
            {limit && 
                <>
                    <LimitMessage />
                </>}
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.goals}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Assists</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.assists}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Appearances</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.matchesStarted}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals/Assists</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.goalsAssistsSum}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.minutesPlayed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Key Passes</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.keyPasses}</span>
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Matches Started</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.appearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Minutes Played</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.minutesPlayed}</span>
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.cleanSheet}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.saves}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Clearances</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.clearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Rating</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Touches</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.touches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : Math.round(playerStats.accuratePasses) + '%'}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurated Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.accurateLongBallsPercentage)}%`}</span>
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.savesCaught}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Parried</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.savesParried}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Inside Box</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.savedShotsFromInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Saves Shots From Outside Box</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.savedShotsFromOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Punches</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.punches}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Faced</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.penaltyFaced}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Saved</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${playerStats.penaltySave}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Penalties Conceded</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${playerStats.penaltyConceded}`}</span>
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.goalsConceded}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Inside the Box</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.goalsConcededInsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Goals Conceded Outside the Boox</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.goalsConcededOutsideTheBox}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">High Claims</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.highClaims}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Crosses Not Claimed</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.crossesNotClaimed}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Goals</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.errorLeadToGoal}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Errors Leading to Shots</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${playerStats.errorLeadToShot}`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${playerStats.totwAppearances}`}</span>
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
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : Math.round(playerStats.rating).toFixed(2)}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots On Target</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.shotsOnTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Shots Off Target</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.shotsOffTarget}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribbles</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.successfulDribbles}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Successful Dribble %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.successfulDribblesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">TOTW Appearances</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totwAppearances}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Passes</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalPasses}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Pass %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.accuratePassesPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Total Long Balls</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalLongBalls}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Accurate Long Ball %</h3>
                            {/* @ts-ignore */}
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.accurateLongBallsPercentage)}%`}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Created</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.bigChancesCreated}</span>
                        </div>
                        <div className='group'>
                            <h3 className="label">Big Chances Missed</h3>
                            <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.bigChancesMissed}</span>
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
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Oppositional Half Passes</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.accurateOppositionHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Own Half Passes</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Own Half Passes</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.accurateOwnHalfPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Final Third Passes</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.accurateFinalThirdPasses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Cross Attempts</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalCross}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Crosses</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.accurateCrosses}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Accurate Cross %</h3>
                              {/* @ts-ignore */}
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.accurateCrossesPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Total Long Balls</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalLongBalls}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Pass to Assist</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.passToAssist}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Touches</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.touches}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Possession Lost</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.possessionLost}</span>
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
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.cleanSheet}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Clearances</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.clearances}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Blocked Shots</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.blockedShots}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Attempted</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.tackles}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackles Won</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.tacklesWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Tackle Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.tacklesWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Won</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.totalDuelsWon}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duel Win %</h3>
                                {/* @ts-ignore */}
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.totalDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Duels Lost</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.duelLost}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ground Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.groundDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Ariel Duel Win %</h3>
                                 {/* @ts-ignore */}
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : `${Math.round(playerStats.aerialDuelsWonPercentage)}%`}</span>
                          </div>
                          <div className='group'>
                              <h3 className="label">Interceptions</h3>
                              <span className="description">{loading ? <ClipLoader loading={loading} size={15}/> : playerStats.interceptions}</span>
                          </div>
                      </div>
                  </div>
                )
              }
          })()}
        </div>
      )
}