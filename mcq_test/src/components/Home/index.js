import {HomePageContainer, Title, Description, ButtonContainer, StartButton, PracticeButton, LeaderboardButton} from './styledComponent'

const Home = () => {
  return (
    <HomePageContainer>
      <Title>MCQ Test</Title>
      <Description>Welcome to our MCQ test platform!</Description>
      <ButtonContainer>
        <StartButton>Start Test</StartButton>
        <PracticeButton>Practice Questions</PracticeButton>
        <LeaderboardButton>Leaderboard</LeaderboardButton>
      </ButtonContainer>
    </HomePageContainer>
  );
};

export default Home;