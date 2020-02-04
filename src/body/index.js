import React from "react";
import styled from "styled-components";

import { TimeSelectList } from "./time-select-list";
import { Control } from "./control";
import { TimerModal } from "./timer-modal";
import { timeMock } from "../utils";
import sample from "../music/Click me to browse music.mp3";

export class Body extends React.Component {
  state = {
    hour: 0,
    minute: 0,
    music: sample,
    isAlarmStart: false,
    isHourChoosing: false,
    isMinuteChoosing: false,
    isMusicPlaying: false
  };

  audioRef = React.createRef();

  updateTimeSelectState = str => {
    if (str === "hour") {
      this.setState(state => ({
        isHourChoosing: !state.isHourChoosing
      }));
    } else if (str === "minute") {
      this.setState(state => ({
        isMinuteChoosing: !state.isMinuteChoosing
      }));
    }
  };

  handleItemClick = element => {
    if (this.state.isHourChoosing) {
      this.setState({ hour: element });
      this.updateTimeSelectState("hour");
    } else if (this.state.isMinuteChoosing) {
      this.setState({ minute: element });
      this.updateTimeSelectState("minute");
    }
  };

  updateAlarmStatus = () => {
    this.setState(state => ({
      isAlarmStart: !state.isAlarmStart
    }));
  };

  playMusic = () => {
    this.setState({ isMusicPlaying: true });
    this.audioRef.play();
  };

  stopMusic = () => {
    this.setState({ isMusicPlaying: false });
    this.audioRef.pause();
    this.audioRef.currentTime = 0;
  };

  render() {
    console.log(this.state);

    return (
      <React.Fragment>
        <Alarm>
          <Value onClick={() => this.updateTimeSelectState("hour")}>
            {this.state.hour < 10 ? "0" + this.state.hour : this.state.hour}
          </Value>
          <Colon>:</Colon>
          <Value onClick={() => this.updateTimeSelectState("minute")}>
            {this.state.minute < 10
              ? "0" + this.state.minute
              : this.state.minute}
          </Value>

          {this.state.isHourChoosing && (
            <TimeSelectList
              timeType="hours"
              time={timeMock}
              handleItemClick={this.handleItemClick}
            />
          )}
          {this.state.isMinuteChoosing && (
            <TimeSelectList
              time={timeMock}
              timeType="minutes"
              handleItemClick={this.handleItemClick}
            />
          )}
        </Alarm>
        <Control
          updateAlarmStatus={this.updateAlarmStatus}
          audioRef={el => (this.audioRef = el)}
          isMusicPlaying={this.state.isMusicPlaying}
          playMusic={this.playMusic}
          stopMusic={this.stopMusic}
          music={this.state.music}
        />
        {this.state.isAlarmStart && (
          <TimerModal
            hour={this.state.hour}
            minute={this.state.minute}
            updateAlarmStatus={this.updateAlarmStatus}
          />
        )}
      </React.Fragment>
    );
  }
}

const Alarm = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  font-size: 200px;
  font-family: Barlow Condensed, sans-serif;
  color: #ffe3e1;
  margin-bottom: 30px;
`;

const Value = styled.button`
  color: #ffe3e1;
  background: transparent;
  border: 0px;
  font-family: Barlow Condensed, sans-serif;
  transition: 0.2s ease;
  text-align: right;
  outline: none;
  &:hover {
    cursor: pointer;
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Colon = styled.span`
  line-height: 200px;
  &:hover {
    cursor: pointer;
  }
`;
