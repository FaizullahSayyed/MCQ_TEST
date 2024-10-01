import styled from 'styled-components';

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 40px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const StartButton = styled.button`
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const PracticeButton = styled.button`
  background-color: #ff9800;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const LeaderboardButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const SearchBoxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px; /* Adjust spacing as needed */
`;

export const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px; /* Adjust the width as needed */

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;