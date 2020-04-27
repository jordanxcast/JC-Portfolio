import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { Link } from "react-router-dom";

export const BlogPreviewItem = (props) => {
  return (
    <BlogPreview>
      <PreviewTop className="blog-title">
        <BlogTitle>{props.title}</BlogTitle>
        <BlogDate>{props.date}</BlogDate>
      </PreviewTop>

      <BlogDescription className="blog-summary">
        {props.summary}
        <GoToBlog to={`/blog/${props.id}`}>Check it out >></GoToBlog>
      </BlogDescription>
    </BlogPreview>
  );
};

const BlogTitle = styled.div`
  font-size: 22px;
  width: 100%;
  margin: 0px auto;
  flex-wrap: wrap;
  color: ${colors.vermilion};
`;

const BlogDate = styled.div`
  font-size: 16px;
  color: ${colors.mint};
`;

const PreviewTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const BlogPreview = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
  min-height: 200px;
  width: 80%;
  margin: 30px auto 20px;
  background-color: #313638;
  /* background-color: #0c0f0a; */
  padding: 10px 30px;
  text-align: center;
  align-items: center;
  border: 2px solid #313638;

  box-shadow: 0px 3px 15px 1px rgba(66, 75, 84, 1);
  opacity: 1;

  transition: visibility 0s linear 0.5s, background-color 0.5s linear,
    opacity 0.5s ease-in, width 0.5s linear, box-shadow 0.2s linear;
  .blog-summary {
    visibility: hidden;
    display: none;
    opacity: 0;
    width: 0%;

    transition: visibility 0s linear 0.5s, opacity 0.5s ease-in,
      background-color 0.2s linear, width 0.5s linear;
  }

  :hover,
  :focus,
  :active {
    transition: visibility 0s linear 0.5s, background-color 0.5s linear,
      width 0.5s linear, box-shadow 0.5s linear;

    cursor: pointer;
    border: 3px solid ${colors.mint};
    background-color: ${colors.slategrey};
    color: ${colors.paleblue};
    box-shadow: none;
    .blog-title {
      display: none;
      visibility: hidden;
      opacity: 0;
      width: 0%;
    }
    .blog-summary {
      visibility: visible;
      display: flex;
      position: relative;
      top: 0;
      left: 0;
      opacity: 1;
      width: 80%;
    }
  }
`;

const BlogDescription = styled.div`
  font-size: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const GoToBlog = styled(Link)`
  background: transparent;
  width: fit-content;
  margin: 20px auto 0px;
  border: none;
  font-size: 14px;
  font-weight: lighter;
  text-decoration: none;
  color: ${colors.vermilion};

  :hover {
    cursor: pointer;
    color: ${colors.teal};
  }
`;

export const NoBlogsYet = styled.div`
  font-size: 28px;
  width: 80%;
  text-align: center;
  height: 50%;
  margin: auto;
  color: ${colors.vermilion};
`;
