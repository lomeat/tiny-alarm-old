import React from "react";
import styled from "styled-components";
import { func, string, bool, shape, instanceOf } from "prop-types";

import { Button } from "ui/button";

export class Control extends React.Component {
  static propTypes = {
    music: string.isRequired,
    playMusic: func.isRequired,
    stopMusic: func.isRequired,
    isMusicPlaying: bool.isRequired,
    updateAlarmStatus: func.isRequired,
    audioRef: shape({
      current: instanceOf(Element)
    })
  };

  render() {
    const musicName = this.props.music
      .split("/")
      .pop()
      .split(".")[0];

    return (
      <ControlWrapper>
        <ButtonsWrapper>
          {this.props.isMusicPlaying ? (
            <Button name="STOP MUSIC" handleClick={this.props.stopMusic} />
          ) : (
            <Button name="PLAY MUSIC" handleClick={this.props.playMusic} />
          )}
          <Button
            name="START ALARM"
            handleClick={this.props.updateAlarmStatus}
          />
        </ButtonsWrapper>
        <MusicNameButton>{musicName}</MusicNameButton>
        <audio ref={this.props.audioRef} src={this.props.music} />
      </ControlWrapper>
    );
  }
}

const ControlWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px 0;
  transition: 0.2s ease;
`;

const MusicNameButton = styled.button`
  font-size: 40px;
  font-family: Barlow Condensed, sans-serif;
  color: #ffe3e1;
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: center;
  transition: 0.2s ease;
  border: 0px;
  outline: none;
  background: transparent;
  &:hover {
    text-shadow: 5px 5px rgba(0, 0, 0, 0.5);
    cursor: pointer;
  }
`;
