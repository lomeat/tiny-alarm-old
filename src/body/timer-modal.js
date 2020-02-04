import React from "react";
import styled from "styled-components";
import { number } from "prop-types";

import { Button } from "ui/button";

export class TimerModal extends React.Component {
  static propTypes = {
    hour: number.isRequired,
    minute: number.isRequired
  };

  static defaultProps = {
    hour: 2,
    minute: 35
  };

  render() {
    const { hour, minute, updateAlarmStatus } = this.props;
    const seconds = 43;

    return (
      <TimerWrapper>
        <Wrapper>
          <EmptySupportBlock>00</EmptySupportBlock>
          <Value>{hour < 10 ? "0" + hour : hour}</Value>
          <Colon>:</Colon>
          <Value>{minute < 10 ? "0" + minute : minute}</Value>
          <Seconds>{seconds}</Seconds>
        </Wrapper>
        <ButtonsWrapper>
          <Button name="RESET" handleClick={updateAlarmStatus} />
        </ButtonsWrapper>
      </TimerWrapper>
    );
  }
}

const TimerWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #5e221e;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  top: 0;
  left: 0;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  font-size: 350px;
  font-family: Barlow Condensed, sans-serif;
  color: #ffe3e1;
  margin-bottom: 200px;
`;

const Value = styled.div`
  color: #ffe3e1;
  font-family: Barlow Condensed, sans-serif;
  outline: none;
`;

const Seconds = styled.div`
  color: #847676;
  font-size: 175px;
  align-self: flex-end;
  padding: 0 0 35px 10px;
  font-family: Barlow Condensed, sans-serif;
`;

const EmptySupportBlock = styled(Seconds)`
  color: transparent;
  padding: 0 10px 35px 0;
`;

const Colon = styled.span`
  line-height: 350px;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 100px;
`;
