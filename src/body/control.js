import React from "react";
import styled from "styled-components";
import { func, string, bool, object } from "prop-types";

import { Button } from "ui/button";

export class Control extends React.Component {
  static propTypes = {
    music: string.isRequired,
    playMusic: func.isRequired,
    stopMusic: func.isRequired,
    isMusicPlaying: bool.isRequired,
    updateAlarmStatus: func.isRequired,
    audioRef: object.isRequired,
    uploadMusic: func.isRequired,
    musicName: string
  };

  render() {
    const {
      music,
      playMusic,
      stopMusic,
      isMusicPlaying,
      updateAlarmStatus,
      audioRef,
      uploadMusic,
      musicName
    } = this.props;

    return (
      <ControlWrapper>
        <ButtonsWrapper>
          {isMusicPlaying ? (
            <Button name="STOP MUSIC" handleClick={stopMusic} />
          ) : (
            <Button name="PLAY MUSIC" handleClick={playMusic} />
          )}
          <Button name="START ALARM" handleClick={updateAlarmStatus} />
        </ButtonsWrapper>
        <MusicNameButton>
          {musicName}
          <input
            style={{ display: "none" }}
            accept="audio/*"
            type="file"
            onChange={e => uploadMusic(e)}
          />
        </MusicNameButton>
        <audio ref={audioRef} src={music} />
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

const MusicNameButton = styled.label`
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
