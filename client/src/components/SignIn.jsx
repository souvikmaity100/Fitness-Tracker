import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button"

const Container = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.text_primary};
`;
const Span = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary + 90};
`;

const Section = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

function SignIn() {
  return (
    <Container>
      <div>
        <Title>Welcome to Fitness-Tracker 👋</Title>
        <Span>Please login with your details here</Span>
      </div>
      <Section>
        <TextInput
          label="Email Address"
          placeholder="Enter your email address"
        />
        <TextInput
          label="Password"
          placeholder="Enter your password"
          password
        />
        <Button
          text="SignIn"
        />
      </Section>
    </Container>
  );
}

export default SignIn;
