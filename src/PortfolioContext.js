import React, { useState } from "react";

export const PortfolioContext = React.createContext();

const PortfolioContextProvider = (props) => {
  // SET UP FOR PROJECT CARSOUEL IMAGES
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
        "After realizing my growing interest in software could not be ignored, I decided to join Thinkful's Full Stack Engineering Immersion program. At Thinkful, I was exposed to a multitude of concepts and grew my technical skill-set further than I imagined within the 5-month timeframe. However, even with the growth I've seen in myself, one thing about software development that I love to consider is that, of course, the learning never stops. Every concept that I've seemed to conquer along the way opens up hundreds of more paths to explore and learn further. And that is absolutely exhilarating to me.",
        "I consider myself a full-stack engineer and have a great interest in both front-end and back-end development. On the client-side, I have always enjoyed elegant UX/UI designs, and having a strong eye for detail, I retain the confidence in taking high-fidelity mocks and writing maintainable code to produce powerful interfaces. Having previous experience working with a front-end dev team, Thinkful was my first experience with back-end work. I was very eager to dive into this aspect of programming and learn more about the area I was less familiar with. I was immediately intrigued by the structure of server-side code and enjoyed working with databases the most. From designing database schemas to creating queries that extract specific configurations of data - the more I worked with it, the more ideas I had to use my learnings for other projects.",
        "Overall, at Thinkful I earned industry best practices and practical software development standards. On the front-end, a focus of HTML5, CSS3, JavaScript, jQuery, and React.js. On the back-end, a focus on Node.js, Express, PostgreSQL and Mocha, Chai, Supertest for testing. I created and deployed mobile-first applications while learning new languages and frameworks by collaborating with senior web developers.",
        "Upon what I learned through our curriculum, I dove deeper into the concepts we were exposed to. I became familiar with working with other powerful techniques such as React Hooks, Styled Components, AWS S3 storage bucks, and others. This is just the beginning, and I am already exploring more technologies to expand my skill-set. Technologies I am currently interested in learning are ReactNative, AngularJS, and Ruby On Rails. And let's face it, anything that presents itself while on my journey forward.",
      ],
    },
    {
      id: 2,
      company: "Trustwork",
      position: "Project & Product Manager",
      duration: "June 2018 - July 2019",
      expanded: [
        "After graduating college, I was working in business development as a Project Manager at Trustwork, a startup creating a tool to assist real estate management, where I built strong relationships with people in the field using the app. After noticing a pattern of problematic friction points, I began performing user research and collecting feedback. Presenting these findings and cohesive potential solutions to our product owners, I was granted the opportunity to become a Product Manager for the team.",
        "As a PM, I was the middleman between our problems and solutions. I created user stories and developed application and process solutions for our product, business and customer support teams. I also worked directly with our distributed design team, mediating ideas and leading action plans to ensure that we stayed on track with our product roadmap goals. It was an absolute blast - full of challenges, roadblocks and getting creative with our solutions.",
        "Being a start-up, I often wore many hats while in this position. One of the roles I also took on was acting Scrum Master for our front-end development team. I worked with our lead engineer creating a structured sprint process to decrease obstacles and increase efficiency and output for our devs. Working well with this team and seeing immediate results with these processes in place, I continued as a supplemental part of the team by facilitating retros, cost estimation meetings, and sprint planning.",
        "This is where I was first introduced to the world of development. Being a curious person and having a love for problem-solving, I was drawn to the world of development quite naturally. I began learning everything and anything I could in my free time. Quickly realizing that this growing interest in software couldn't be ignored, continued learning became a part of my every day.",
      ],
    },
    {
      id: 3,
      company: "Lot 5 Studios",
      position: "Photographer",
      duration: "Aug. 2014 - July 2017",
      expanded: [
        "After graduating high school, I was fortunate enough to join a photography team consisting of inspiring, brilliant and creative women who fueled their life and businesses with their unwavering passion for photography. ",
        "With a niche target market, Lot 5 focused their client base to serve many private elementary, middle and high schools in the Houston area. Their high-quality and customized services from a small, talented team gave them an edge over the large photography businesses most schools use which results in mediocre, cookie-cutter photographs.",
        "The same team also owned a studio in Sawyer Heights, called Fill In The Blank, which I was also given the opportunity to help run. Fill In The Blank was a beautiful, indoor open space studio available to being rent out for photography shoots, social events, meetings, etc.",
        "During my time there, I assisted in photoshoots as well as business structure. Being a faced-paced business and having a variety of moving parts, I helped coordinate clients and staff systematically to allow our events to run efficiently. I learned and exhibited versed communication skills with partners, patrons and co-workers to establish a well-functioning workplace.",
        "Working with this team was my first look into the world of entrepreneurship. I witnessed first-hand what it took to grow your own business and the dynamic environment that constitutes it. Gaining this experience shaped my future, as I fell in love with this challenging environment and continued to chase more opportunities like it.",
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
