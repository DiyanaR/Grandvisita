// import React from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Container = styled.div`
//   min-height: 100vh;
//   background: url("/images/nature.png");
//   background-size: cover;
//   background-position: center;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
//   text-align: center;
// `;

// const ContentWrapper = styled.div`
//   max-width: 600px;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const RecommendationsGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const RecommendationCard = styled.div`
//   flex: 0 0 300px;
//   margin: 10px;
//   padding: 20px;
//   background: rgba(255, 255, 255, 0.8);
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;

// const CountryTitle = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;
// const HotelImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   margin-bottom: 10px;
// `;

// const Recommendations = ({ recommendations }) => {
//   return (
//     <Container>
//       <ContentWrapper>
//         <Title>Your Travel Recommendations</Title>
//         <RecommendationsGrid>
//           {recommendations.map((rec, index) => (
//             <RecommendationCard key={index}>
//               <StyledLink
//                 to={{ pathname: "/rooms", state: { country: rec.country } }}
//               >
//                 {/* <StyledLink to="/rooms"> */}
//                 <CountryTitle>{rec.country}</CountryTitle>
//                 {rec.city && <p>City: {rec.city}</p>}
//                 <p>Recommended Hotel: {rec.hotel}</p>
//                 {rec.image && (
//                   <HotelImage src={rec.image} alt={`${rec.hotel}`} />
//                 )}

//                 {/* </StyledLink> */}
//               </StyledLink>
//             </RecommendationCard>
//           ))}
//         </RecommendationsGrid>
//       </ContentWrapper>
//     </Container>
//   );
// };

// export default Recommendations;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const Container = styled.div`
//   min-height: 100vh;
//   background-color: #f2f2f2;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 40px;
//   text-align: center;
// `;

// const ContentWrapper = styled.div`
//   max-width: 800px;
// `;

// const Title = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 20px;
// `;

// const RecommendationsGrid = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-around;
// `;

// const RecommendationCard = styled.div`
//   width: calc(50% - 40px);
//   margin: 20px;
//   padding: 20px;
//   background: rgba(255, 255, 255, 0.8);
//   border-radius: 10px;
//   box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//   }

//   @media (max-width: 768px) {
//     width: calc(100% - 40px);
//   }
// `;

// const StyledLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
// `;

// const CountryTitle = styled.h2`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const HotelImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 10px;
//   margin-bottom: 10px;
// `;

// const Button = styled.button`
//   background-color: #4caf50;
//   color: white;
//   padding: 10px 20px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   margin-top: 20px;
//   transition: background-color 0.3s ease;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// const BackButton = styled(Button)`
//   background-color: #e53935;
//   margin-right: 10px;
// `;

// const Recommendations = ({ recommendations }) => {
//   const [currentRecommendation, setCurrentRecommendation] = useState(0);

//   const nextRecommendation = () => {
//     setCurrentRecommendation((prevIndex) =>
//       prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevRecommendation = () => {
//     setCurrentRecommendation((prevIndex) =>
//       prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <Container>
//       <ContentWrapper>
//         <Title>Your Travel Recommendations</Title>
//         <RecommendationsGrid>
//           {recommendations.map((rec, index) => (
//             <RecommendationCard key={index}>
//               <StyledLink
//                 to={{
//                   pathname: "/rooms",
//                   state: { country: rec.country },
//                 }}
//               >
//                 <CountryTitle>{rec.country}</CountryTitle>
//                 {rec.city && <p>City: {rec.city}</p>}
//                 <p>Recommended Hotel: {rec.hotel}</p>
//                 {rec.image && (
//                   <HotelImage src={rec.image} alt={`${rec.hotel}`} />
//                 )}
//               </StyledLink>
//             </RecommendationCard>
//           ))}
//         </RecommendationsGrid>
//         <StyledLink to="/travelplanner">
//           <BackButton>Back to Travel Planner</BackButton>
//         </StyledLink>
//         <Button onClick={prevRecommendation}>Previous</Button>
//         <Button onClick={nextRecommendation}>Next</Button>
//       </ContentWrapper>
//     </Container>
//   );
// };

// export default Recommendations;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const RecommendationsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const RecommendationCard = styled.div`
  width: calc(50% - 40px);
  margin: 20px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: calc(100% - 40px);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CountryTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const HotelImage = styled.img`
  width: 100%;
  height: auto;

  margin-bottom: 10px;
`;

const CityText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 5px;
  font-weight: bold;
`;

const HotelText = styled.p`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const BackButton = styled(Button)`
  background-color: black;
  margin-right: 10px;
`;

const Recommendations = ({ recommendations }) => {
  const [setCurrentRecommendation] = useState(0);

  const nextRecommendation = () => {
    setCurrentRecommendation((prevIndex) =>
      prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRecommendation = () => {
    setCurrentRecommendation((prevIndex) =>
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Your Travel Recommendations</Title>
        <RecommendationsGrid>
          {recommendations.map((rec, index) => (
            <RecommendationCard key={index}>
              <StyledLink
                to={{
                  pathname: "/rooms",
                  state: { country: rec.country },
                }}
              >
                <CountryTitle>{rec.country}</CountryTitle>
                {rec.city && <CityText>City: {rec.city}</CityText>}
                <HotelText>Recommended Hotel: {rec.hotel}</HotelText>
                {rec.image && (
                  <HotelImage src={rec.image} alt={`${rec.hotel}`} />
                )}
              </StyledLink>
            </RecommendationCard>
          ))}
        </RecommendationsGrid>
        <StyledLink to="/travelplanner">
          <BackButton>Back to Travel Planner</BackButton>
        </StyledLink>
        <Button onClick={prevRecommendation}>Previous</Button>
        <Button onClick={nextRecommendation}>Next</Button>
      </ContentWrapper>
    </Container>
  );
};

export default Recommendations;
