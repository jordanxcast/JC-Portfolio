import React, { useEffect, useState, useContext } from "react";
import { readBlogEntries } from "../../server/server";
import { PageWrapper } from "../../styles";
import { BlogPreviewItem, NoBlogsYet } from "./Blog.style";
import styled from "styled-components";
import { colors } from "../../constant_styles";
import { PortfolioContext } from "../../PortfolioContext";

const BlogTitle = styled.div`
  font-size: 36px;
  width: 80%;
  margin: 40px auto 0px;
  background-color: ${colors.offwhite};
  padding: 50px 30px;
  text-align: center;
  @media (min-width: 500px) {
    /* padding: 30px 30px 30px 20%; */
    text-align: center;
  }
`;

const BlogLogo = styled.div`
  padding: 3px 10px;
  color: ${colors.darkgrey};
  border: 2px solid ${colors.mint};
  margin-right: 10px;
  display: inline-block;
  align-content: center;
  font-size: 36px;
`;

export default function Blog() {
  const [blogEntries, setBlogEntries] = useState([]);
  const { setBlogPosts } = useContext(PortfolioContext);

  useEffect(() => {
    const setAllBlogPosts = (val) => {
      setBlogEntries(val);
      setBlogPosts(val);
    };
    readBlogEntries((val) => {
      setAllBlogPosts(val);
    });
    window.scrollTo(0, 0);
  }, [setBlogPosts]);

  return (
    <PageWrapper padding="0px" bgColor={colors.offwhite}>
      <BlogTitle>
        <BlogLogo>JC</BlogLogo>Blog
      </BlogTitle>

      {blogEntries.length > 0 ? (
        blogEntries.map((blog, idx) => {
          return (
            <BlogPreviewItem
              title={blog.key}
              summary={blog.blogSummary}
              date={blog.blogDate}
              id={idx}
              key={idx}
            ></BlogPreviewItem>
          );
        })
      ) : (
        <NoBlogsYet>Blog Posts Coming Soon!</NoBlogsYet>
      )}
    </PageWrapper>
  );
}
