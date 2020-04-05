import styled from 'styled-components'
import { colors } from './constant_styles'

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: -webkit-fill-available;
  width: -webkit-fill-available;
  margin: auto;
  padding: 0px 30px;
  position: absolute;
  top: 65;
  z-index: 1;
  background-color: ${props => props ? props.bgColor : colors.offwhite };
  /* align-content: ${({alignContent}) => alignContent ? alignContent : 'center'};    */

`;

export const Section = styled.section`
  width: 80%;
  margin: auto;
`;

export const PageTitle = styled.h1`
  color: ${colors.grey};
  font-size: 30px;
  text-align: ${props => props.align};
  padding: 10px 10px 10px 0px;
  margin: 70px auto auto auto;
  font-weight: normal;
  width: 80%;
`;

/* 
// export const SectionTitle = styled.h3 `
//   margin-top: 1.5em;
//   margin-bottom: 0.5em;
// `;

// export const Paragraph = styled.p `
//   white-space: pre-wrap;
// `;

// export const Pill = styled.span `
//   display: inline-block;
//   margin-right: 0.75em;
//   margin-bottom: 0.75rem;
//   padding: 0.5rem 1rem;
//   background-color: ${blue[20]};
//   color: ${blue[70]};
//   border: 3px solid ${blue[70]};
//   border-radius: 2px;
//   font-weight: bold;
// `;

//HEADER STYLES
// export const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;

//   @media (max-width: 640px) {
//     display: ${({ isHome }) => (!isHome ? 'none' : 'flex')}; 
//     flex-direction: row;
//   }
// `;

// export const Header = styled.div `
//   display: flex;

//   @media(max-width: 640px) {
//     flex-direction: row;
//   }
// `;

// export const Image = styled.img `
//   width: 200px;
//   margin-right: 1em;
//   border-radius: 2px;
// `;

// export const ViewResumeLink = styled.a `
//   display: flex;
//   text-decoration: none;
//   padding: 0.75em 1em;
//   font-weight: bold;
//   align-items: center;
// `; */