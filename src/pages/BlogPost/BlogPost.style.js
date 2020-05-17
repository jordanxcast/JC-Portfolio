import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { Link } from "react-router-dom";

export const BlogOverview = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 20px auto;
  text-align: center;
`;

export const BlogSummary = styled.h2`
  font-size: 14px;
  margin: 0px auto;
  width: 100%;
  font-weight: normal;
  font-style: italic;
  color: ${colors.blue};

  @media (min-width: 600px) {
    width: 60%;
  }
`;

export const BlogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlogDate = styled.div`
  font-size: 14px;
  margin: 0px auto 20px;
  color: ${colors.purplegrey};
`;

export const BlogTextarea = styled.div`
  padding: 20px 0px;
  width: 80%;
  margin: 20px auto;
  text-align: center;
  color: ${colors.slategrey};
  line-height: 1.5rem;
`;

export const BlogImage = styled.img`
  width: 80%;
  max-width: 500px;
  height: auto;
  margin: 30px auto 0px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.75);
`;

export const BackToBlogs = styled(Link)`
  margin: 10px 50px;
  padding: 10px;
  width: fit-content;
  text-decoration: none;
  line-height: 14px;
  font-size: 14px;
  /* border: 1px solid ${colors.deeppurple}; */
  border: none;
  border-radius: 20px;
  color: ${colors.deeppurple};

  :hover {
    border: 1px solid ${colors.vermilion};
    color: ${colors.vermilion};
    cursor: pointer;
  }
`;
const CodeBlock = styled.div`
  width: 50%;
  overflow: scroll;
  height: 300px;
  background-color: ${colors.offwhite};
  padding: 20px;
  display: block;
  color: ${colors.black};
`;

export const BlogCodeBlock = (props) => {
  return (
    <CodeBlock>
      <figure>
        <pre>
          <code>{props.code}</code>
        </pre>
      </figure>
    </CodeBlock>
  );
};

export const BlogSubtitle = styled.h3`
  color: ${colors.vermilion};
  font-size: 20px;
  margin-bottom: 0px;
`;
