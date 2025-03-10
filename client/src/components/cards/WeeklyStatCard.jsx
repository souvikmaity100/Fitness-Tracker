import styled from "styled-components";
import { BarChart } from "@mui/x-charts/BarChart";

const Card = styled.div`
  flex: 1 1 600px;
  min-width: 280px;
  padding: 24px;
  border: 1px solid ${({ theme }) => theme.text_primary + 20};
  border-radius: 14px;
  box-shadow: 1px 6px 20px 0px ${({ theme }) => theme.primary + 15};
  display: flex;
  flex-direction: column;
  gap: 6px;
  @media (max-width: 600px) {
    padding: 16px;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 16px;
  color: ${({ theme }) => theme.primary};
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TheamWraper = styled.div`
  & text {
    fill: ${({ theme }) => theme.text_primary} !important;
  }
  & line {
    stroke: ${({ theme }) => theme.text_primary} !important;
  }
`;

function WeeklyStatCard({ data }) {
  return (
    <Card>
      <Title>Weekly Calories Burned</Title>
      {data?.totalWeeksCaloriesBurnt && (
        <TheamWraper>
          <BarChart
            xAxis={[
              { scaleType: "band", data: data?.totalWeeksCaloriesBurnt?.weeks },
            ]}
            series={[{ data: data?.totalWeeksCaloriesBurnt?.caloriesBurned }]}
            height={300}
          />
        </TheamWraper>
      )}
    </Card>
  );
}

export default WeeklyStatCard;
