import styled from "styled-components";
export const FlexSBC = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
export const FlexColJC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// {
//   SocialProfileData.map((profile, index) => {
//     return (
//       <Link key={index} href={profile.link} target="_blank" rel="noreferrer">
//         <span>{profile.icon}</span>
//         <span>{profile.linkName}</span>
//       </Link>
//     );
//   });
// }

// const Link = styled.a`
//   width: 180px;
//   font-weight: 550;
//   text-shadow: 2px 2px 1px black;
//   transition: transform 0.3s ease-out;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 1rem;
//   margin: 0.5rem;
//   @media (max-width: 768px) {
//     width: 150px;
//   }
//   span {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     font-size: 1.5rem;
//     @media (max-width: 768px) {
//       font-size: 1.2rem;
//     }

//     svg {
//       font-size: 1.7rem;
//       margin-right: 0.7rem;
//       @media (max-width: 768px) {
//         font-size: 1.4rem;
//       }
//     }
//   }
//   &:hover {
//     transform: translateY(8px);
//   }
// `;
