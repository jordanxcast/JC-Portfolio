import styled from 'styled-components'
import { colors } from './constant_styles'

export const PageWrapper = styled.div`
  background-color: ${props => props ? props.bgColor : colors.offwhite };
  margin: 0px;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-content: ${({alignContent}) => alignContent ? alignContent : 'center'}
`;

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
// `;