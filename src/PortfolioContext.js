import React, {useState} from 'react'

const PortfolioContext = React.createContext()

const PortfolioContextProvider = (props) => {
  const [thoughtfulTravelsImgs, setTTImages] = useState([

  ])
  const [repetitionImgs, setRepetitionImages] = useState([

  ])
  const [folkulImgs, setFolkulImages] = useState([

  ])

  const [experienceItems] = useState([
    {
      id: 1,
      company: "Thinkful",
      position: "Full Stack Apprenticeship",
      duration: "Oct. 2019 - April 2020",
      expanded: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
    {
      id: 2,
      company: "Trustwork",
      position: "Project & Product Manager",
      duration: "June 2018 - July 2019",
      expanded: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
    {
      id: 3,
      company: "Lot 5 Studios",
      position: "Photographer",
      duration: "Aug. 2014 - July 2017",
      expanded: ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"],
    },
  ]);

  return(
    <PortfolioContext.Provider value={{thoughtfulTravelsImgs, repetitionImgs, folkulImgs, experienceItems}}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default PortfolioContextProvider