/* eslint-disable eqeqeq */
import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioContext } from "../../PortfolioContext";
import { colors } from "../../constant_styles";
import { PageWrapper, PageTitle } from "../../styles";
import {
  BlogOverview,
  BlogSummary,
  BlogDate,
  BackToBlogs,
  BlogContent,
  BlogTextarea,
  BlogImage,
  BlogCodeBlock,
} from "./BlogPost.style";

export default function BlogPost(props) {
  const { blogPosts } = useContext(PortfolioContext);
  const [currentBlog, setCurrentBlog] = useState({});
  const [blogContent, setBlogContent] = useState([]);
  const blogId = props.match.params.blog_id;

  useEffect(() => {
    blogPosts.map(function (blog, idx) {
      let currentBlogPost;
      if (idx == blogId) {
        currentBlogPost = blog;
        setCurrentBlog(currentBlogPost);
      }
      window.scrollTo(0, 65);
      return "";
    });
    const currentContent = currentBlog.blogContent;
    console.log(currentContent, "current blog content");
    setBlogContent(currentContent);
  }, [blogPosts, currentBlog.blogContent, blogId]);

  return (
    <PageWrapper padding="30px 0px" >
      <BackToBlogs to={`/jc-blog`}>
        <FontAwesomeIcon icon="arrow-left" />
      </BackToBlogs>
      <PageTitle margin="0px auto" color={colors.vermilion}>
        {currentBlog.blogTitle}
      </PageTitle>
      <BlogOverview>
        <BlogDate>{currentBlog.blogDate}</BlogDate>
        <BlogSummary>{currentBlog.blogSummary}</BlogSummary>
      </BlogOverview>
      <BlogContent>
        {blogContent &&
          blogContent.map((contentItem, idx) => {
            if (contentItem.type === "textarea") {
              return <BlogTextarea key={idx}>{contentItem.value}</BlogTextarea>;
            } else if (contentItem.type === "image") {
              return (
                <BlogImage
                  src={contentItem.value}
                  alt="blog screenshot"
                  key={idx}
                />
              );
            } else if (contentItem.type === "code-block") {
              return (
                <BlogCodeBlock
                  key={idx}
                  code={contentItem.value}
                ></BlogCodeBlock>
              );
            } else {
              return "";
            }
          })}
      </BlogContent>
    </PageWrapper>
  );
}
