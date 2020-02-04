import React from "react";
import styled from "styled-components";

export const TimeSelectList = ({ time, timeType, handleItemClick }) => {
  const currentTimeArr = timeType === "hours" ? time.hours : time.minutes;

  const content = currentTimeArr.map(timeEl => (
    <Item onClick={() => handleItemClick(timeEl)}>
      {timeEl < 10 ? "0" + timeEl : timeEl}
    </Item>
  ));

  return (
    <ListWrapper>
      <Grid timeType={timeType}>{content}</Grid>
    </ListWrapper>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.timeType === "hours" ? "repeat(8, 1fr)" : "repeat(6, 1fr)"};
  grid-gap: 20px;
`;

const ListWrapper = styled.div`
  background: #f15a51;
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  top: 0;
  left: 0;
`;

const Item = styled.div`
  padding: 10px;
  text-align: center;
  font-size: 120px;
  &:hover {
    cursor: pointer;
    color: #ccc;
  }
`;
