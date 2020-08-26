import React, { Component } from "react";
import ScoreBoard from "../scoreboard/Scoreboard";
import Team from "../team/Team";
import shootSoundMp3 from "../../assets/sounds/shoots.mp3";
import scoreSoundMp3 from "../../assets/sounds/scored.mp3";
import missSoundMp3 from "../../assets/sounds/missed.mp3";
import resetButton from "../../assets/images/reset_button.png";

class Game extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resetCount: 0,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    };

    this.shootSound = new Audio(shootSoundMp3);
    this.scoreSound = new Audio(scoreSoundMp3);
    this.missSound = new Audio(missSoundMp3);
  }

  shoot = (team) => {
    const teamStatsKey = `${team}TeamStats`;
    let score = this.state[teamStatsKey].score;
    this.shootSound.play();

    if (Math.random() > 0.5) {
      score += 2;
      setTimeout(() => {
        this.scoreSound.play();
      }, 250);
    } else {
      setTimeout(() => {
        this.missSound.play();
      }, 900);
    }

    this.setState((state, props) => ({
      [teamStatsKey]: {
        shots: state[teamStatsKey].shots + 1,
        score,
      },
    }));
  };

  resetGame = () => {
    this.setState((state, props) => ({
      resetCount: state.resetCount + 1,
      homeTeamStats: {
        shots: 0,
        score: 0,
      },
      visitingTeamStats: {
        shots: 0,
        score: 0,
      },
    }));
  };

  render() {
    return (
      <div className="Game">
        <ScoreBoard
          visitingTeamStats={this.state.visitingTeamStats}
          homeTeamStats={this.state.homeTeamStats}
        />

        <h1>Welcome to {this.props.venue}</h1>
        <div className="stats">
          <Team
            name={this.props.visitingTeam.name}
            logo={this.props.visitingTeam.logoSrc}
            stats={this.state.visitingTeamStats}
            shootButton={this.props.visitingTeam.shootButton}
            shotHandler={() => this.shoot("visiting")}
          />

          <div className="versus">
            <h1>VS</h1>
            <div>
              <img
                onClick={this.resetGame}
                src={resetButton}
                alt={"Reset Button"}
              />
              <br></br>
              <strong>Resets:</strong> {this.state.resetCount}
            </div>
          </div>

          <Team
            name={this.props.homeTeam.name}
            logo={this.props.homeTeam.logoSrc}
            stats={this.state.homeTeamStats}
            shootButton={this.props.homeTeam.shootButton}
            shotHandler={() => this.shoot("home")}
          />
        </div>
      </div>
    );
  }
}
export default Game;
