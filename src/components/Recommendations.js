import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: url("/images/nature.png");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 600px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const RecommendationsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const RecommendationCard = styled.div`
  flex: 0 0 300px;
  margin: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CountryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Recommendations = ({ recommendations }) => {
  return (
    <Container>
      <ContentWrapper>
        <Title>Your Travel Recommendations</Title>
        <RecommendationsGrid>
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index}>
              <StyledLink
                to={{ pathname: "/rooms", state: { country: rec.country } }}
              >
                {/* <StyledLink to="/rooms"> */}
                <CountryTitle>{rec.country}</CountryTitle>
                {rec.city && <p>City: {rec.city}</p>}
                <p>Recommended Hotel: {rec.hotel}</p>

                {/* </StyledLink> */}
              </StyledLink>
            </RecommendationCard>
          ))}
        </RecommendationsGrid>
      </ContentWrapper>
    </Container>
  );
};

export default Recommendations;
