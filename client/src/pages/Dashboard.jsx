import styled from "styled-components";
import { counts } from "../utils/data";
import CountsCard from "../components/cards/CountsCard";
import WeeklyStatCard from "../components/cards/WeeklyStatCard";
import CategoryChart from "../components/cards/CategoryChart";

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
  flex-direction: column;
  gap: 22px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

const Title = styled.div`
  padding: 0px 16px;
  font-size: 22px;
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
`;

const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 22px;
  padding: 0px 16px;
  @media (max-width: 600px) {
    gap: 12px;
  }
`;

function Dashboard() {
  const data = {
    totalCaloriesBurnt: 12560,
    totalWorkouts: 7,
    avgCaloriesBurntPerWorkout: 2100,
    totalWeeksCaloriesBurnt: {
      weeks: ["15th", "16th", "17th", "18th", "19th", "20th", "21th"],
      caloriesBurned: [9500, 450, 85, 0, 48, 780, 0],
    },
    pieChartData: [
      {
        id: 0,
        value: 6000,
        label: "Legs",
      },
      {
        id: 1,
        value: 1750,
        label: "Shoulder",
      },
      {
        id: 2,
        value: 1500,
        label: "back",
      },
      {
        id: 3,
        value: 2250,
        label: "ABS",
      },
    ],
  };

  return (
    <Container>
      <Wrapper>
        <Title>Dashboard</Title>
        <FlexWrap>
          {counts.map((item, ind) => (
            <CountsCard item={item} key={ind} data={data} />
          ))}
        </FlexWrap>

        <FlexWrap>
          <WeeklyStatCard data={data} />
          <CategoryChart data={data} />
        </FlexWrap>
      </Wrapper>
    </Container>
  );
}

export default Dashboard;
