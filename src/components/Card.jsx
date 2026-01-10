import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card_box">
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card_box {
    width: 200px;
    height: 250px;
    border-radius: 20px;
    background: linear-gradient(170deg, rgba(58, 56, 56, 0.623) 0%, rgb(31, 31, 31) 100%);
    position: relative;
    box-shadow: 0 25px 50px rgba(0,0,0,0.55);
    cursor: pointer;
    transition: all .3s;
  }

  .card_box:hover {
    transform: scale(0.9);
  }`;

export default Card;
