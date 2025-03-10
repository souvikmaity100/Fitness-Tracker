import styled from "styled-components";
import WorkoutCard from "../components/cards/WorkoutCard";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 22px 0px;
  overflow-y: scroll;
`;

const Wrapper = styled.div`
  flex: 1;
  max-width: 1400px;
  display: flex;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 750px) {
    gap: 12px;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 0.2 0 75px;
  height: fit-content;
  padding: 18px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};

  & div {
    color: ${({ theme }) => theme.text_primary} !important;
  }
  & svg {
    color: ${({ theme }) => theme.text_secondary} !important;
  }
  & span {
    color: ${({ theme }) => theme.primary} !important;
  }
  & button {
    color: ${({ theme }) => theme.text_primary} !important;
    border-color: ${({ theme }) => theme.text_primary} !important;
  }
  & button.Mui-selected {
    color: ${({ theme }) => theme.white} !important;
  }
`;

const Title = styled.h3`
  font-weight: 600;
  margin: 0;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  flex: 1;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 100px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  gap: 22px;
  @media (max-width: 750px) {
    gap: 12px;
    padding: 0px;
  }
`;

const SecTitle = styled.h2`
  margin: 0;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

function Workouts() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Select Date</Title>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar />
          </LocalizationProvider>
        </Left>
        <Right>
          <Section>
            <SecTitle>Todays Workout</SecTitle>
            <CardWrapper>
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
              <WorkoutCard />
            </CardWrapper>
          </Section>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Workouts;
