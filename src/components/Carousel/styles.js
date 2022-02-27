import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 10px 0px 5px 0px;
  display: flex;
  justify-content: left;
  align-content: space-between;
  line-height: 1;

  @media (max-width: 800px) {
    padding: 5px;
  }
`;

export const TextCarroseulNull = styled.div`

  margin-bottom: 16px;
  display: flex !important;
  width:90vw !important;
  justify-content: center;
  align-content: center;
  line-height: 1;

`;


export const MovieContainer = styled.img`
  overflow: hidden;
  background-position: center;
  margin-left: 20%;
  text-decoration: none;
  width: 220px;
  height: 350px;
  background-size: cover;
  color: white;
  position: relative;
  cursor: pointer;
  transition: opacity .5;
  transition: 300ms linear;
  &:hover {
    margin-top: -10px;
    transform: scale(1.1);
    transition: 300ms ease-in-out;
    z-index: 5000;
    -5px 6px 27px -4px rgba(0,0,0,0.9);
  }
  &:focus {
    opacity: .5;
  }
  &:not(:first-child) {
    margin-left: 20px;
  }
`;




