import React from "react";
import styled from "styled-components";

export const TimeSelectList = ({ time, timeType, handleItemClick }) => {
  const currentTimeType = timeType === "hours" ? time.hours : time.minutes;

  const content = currentTimeType.map(timeEl => (
    <Item onClick={() => handleItemClick(timeEl)}>
      {timeEl < 10 ? "0" + timeEl : timeEl}
    </Item>
  ));

  return (
    <ListWrapper>
      <List>{content}</List>
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  background: #f15a51;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  z-index: 2;
  top: 0;
  left: 0;
`;

const List = styled.div`
  background: #f15a51;
  color: #ffe3e1;
  font-size: 140px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll;
`;

const Item = styled.div`
  padding: 10px;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: #ccc;
  }
`;
