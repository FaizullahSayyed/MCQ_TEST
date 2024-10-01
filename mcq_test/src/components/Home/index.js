// import {HomePageContainer, Title, Description, ButtonContainer, StartButton, PracticeButton, LeaderboardButton} from './styledComponent'

// const Home = () => {
//   return (
//     <HomePageContainer>
//       <Title>MCQ Test</Title>
//       <Description>Welcome to our MCQ test platform!</Description>
//       <ButtonContainer>
//         <StartButton>Start Test</StartButton>
//         <PracticeButton>Practice Questions</PracticeButton>
//         <LeaderboardButton>Leaderboard</LeaderboardButton>
//       </ButtonContainer>
//     </HomePageContainer>
//   );
// };

// export default Home;
import React, { useState } from 'react';
import { Circles } from 'react-loader-spinner';

// ... (rest of your imports)
import {HomePageContainer, Title, Description, ButtonContainer, StartButton, PracticeButton, LeaderboardButton, SearchBoxContainer, SearchInput} from './styledComponent'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false); // State to control loader visibility

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Perform search logic here (e.g., filter tests based on search term)
  };

  const startTest = () => {
    setIsLoading(true); // Show loader

    // Simulate a delay for demonstration purposes
    setTimeout(() => {
      setIsLoading(false); // Hide loader
      // Start the test logic here
    }, 2000);
  };

  return (
    <HomePageContainer>
      <Title>MCQ Test</Title>
      <Description>Welcome to our MCQ test platform!</Description>
      <SearchBoxContainer>
        <SearchInput
          type="text"
          placeholder="Enter topic for search"
          value={searchTerm}
          onChange={handleSearch}
        />
      </SearchBoxContainer>
      <ButtonContainer>
        <StartButton onClick={startTest}>
          {isLoading ? (
            <Circles color="#ffffff" height={30} width={30} />
          ) : (
            "Start Test"
          )}
        </StartButton>
        <PracticeButton>Practice Questions</PracticeButton>
        <LeaderboardButton>Leaderboard</LeaderboardButton>
      </ButtonContainer>
    </HomePageContainer>
  );
};

export default Home;