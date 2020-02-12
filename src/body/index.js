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
    isMusicPlaying: false,
    musicName: "Click me to browse music"
  };

  audioRef = React.createRef();

  uploadMusic = e => {
    e.preventDefault();
    this.stopMusic();

    const musicURL = URL.createObjectURL(e.target.files[0]);
    localStorage.setItem("music", musicURL);
    this.setState({
      isMusicPlaying: false,
      music: musicURL,
      musicName: e.target.files[0].name.split(".mp3")[0]
    });

    e.onend = () => {
      URL.revokeObjectURL(e.target.src);
    };
  };

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
    const {
      music,
      minute,
      hour,
      isHourChoosing,
      isMinuteChoosing,
      isAlarmStart,
      isMusicPlaying,
      musicName
    } = this.state;

    console.log(musicName);

    return (
      <React.Fragment>
        <Alarm>
          <Value onClick={() => this.updateTimeSelectState("hour")}>
            {hour < 10 ? "0" + hour : hour}
          </Value>
          <Colon>:</Colon>
          <Value onClick={() => this.updateTimeSelectState("minute")}>
            {minute < 10 ? "0" + minute : minute}
          </Value>

          {isHourChoosing && (
            <TimeSelectList
              timeType="hours"
              time={timeMock}
              handleItemClick={this.handleItemClick}
            />
          )}
          {isMinuteChoosing && (
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
          isMusicPlaying={isMusicPlaying}
          playMusic={this.playMusic}
          stopMusic={this.stopMusic}
          music={music}
          musicName={musicName}
          uploadMusic={this.uploadMusic}
        />
        {isAlarmStart && (
          <TimerModal
            hour={hour}
            minute={minute}
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
