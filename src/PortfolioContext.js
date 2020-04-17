import React, { useState } from "react";

export const PortfolioContext = React.createContext();

const PortfolioContextProvider = (props) => {
  // const [thoughtfulTravelsImgs, setTTImages] = useState([

  // ])
  // const [repetitionImgs, setRepetitionImages] = useState([

  // ])
  // const [folkulImgs, setFolkulImages] = useState([

  // ])

  const [experienceItems] = useState([
    {
      id: 1,
      company: "Thinkful",
      position: "Full Stack Apprenticeship",
      duration: "Oct. 2019 - April 2020",
      expanded: [
        "Learned industry best practices and practical software development standards with a focus on HTML5, CSS3, JavaScript, jQuery, Node.js, React, algorithms and data structures",
        "Created and deployed mobile-first applications while learning new languages and frameworks by collaborating with senior web developers",
      ],
    },
    {
      id: 2,
      company: "Trustwork",
      position: "Project & Product Manager",
      duration: "June 2018 - July 2019",
      expanded: [
        "Strategized among company founders, CEO, Head of Product & Head of Engineering to establish the product roadmap",
        "Conducted user research and testing utilized in establishing product direction and setting product goals",
        "Gathered and analyzed current data patterns to prioritize product backlog, bugs, requests and new features for each sprint",
        "Launched innovative features making a direct impact across 60 real estate properties with a monthly revenue of $500K",
        "Directed and collaborated with the distributed design team to conceptualize intuitive consumer experience",
      ],
    },
    {
      id: 3,
      company: "Lot 5 Studios",
      position: "Photographer",
      duration: "Aug. 2014 - July 2017",
      expanded: [
        "Represented the firm while communicating with locally-based influential figures to promote our brand",
        "Exhibited versed communication skills with partners, patrons and co-workers to establish a well functioning workplace",
        "Coordinated clients and staff systematically to allow each photo-station to run efficiently ",
      ],
    },
  ]);

  return (
    <PortfolioContext.Provider value={{ experienceItems }}>
      {props.children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContextProvider;
