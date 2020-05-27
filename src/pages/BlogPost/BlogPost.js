/* eslint-disable eqeqeq */
import React, { useState, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PortfolioContext } from "../../PortfolioContext";
import { colors } from "../../constant_styles";
import { PageWrapper, PageTitle, BackToTop } from "../../styles";
import {
  BlogOverview,
  BlogSummary,
  BlogDate,
  BackToBlogs,
  BlogContent,
  BlogTextarea,
  BlogImage,
  BlogCodeBlock,
  BlogSubtitle,
} from "./BlogPost.style";

const formatDate = (date) => {
  let rawDate = new Date(date);
  let options = {
    // weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
  };

  let newDate = rawDate.toLocaleString("en-us", options);

  return newDate;
};

export default function BlogPost(props) {
  const { blogPosts } = useContext(PortfolioContext);
  const [currentBlog, setCurrentBlog] = useState({});
  const [blogContent, setBlogContent] = useState([]);
  const blogId = props.match.params.blog_id;

  const blogDate = formatDate(currentBlog.blogDate);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 65);
    blogPosts.map(function (blog, idx) {
      let currentBlogPost;
      if (idx == blogId) {
        currentBlogPost = blog;
        setCurrentBlog(currentBlogPost);
      }
      return "";
    });
    const currentContent = currentBlog.blogContent;
    setBlogContent(currentContent);
  }, [blogPosts, currentBlog.blogContent, blogId, currentBlog, props]);

  //listener sets scroll button to be visible or not
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  //executes scroll to the top of the page
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //simple event listener to show or hide the scroll to top button
  window.addEventListener("scroll", checkScrollTop);

  return (
    <PageWrapper padding="30px 0px">
      <BackToBlogs to={`/blog`}>
        <FontAwesomeIcon icon="arrow-left" />
      </BackToBlogs>
      <PageTitle margin="0px auto" color={colors.vermilion}>
        {currentBlog.blogTitle}
      </PageTitle>
      <BlogOverview>
        <BlogDate>{blogDate}</BlogDate>
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
            } else if (contentItem.type === "subtitle") {
              return <BlogSubtitle key={idx}>{contentItem.value}</BlogSubtitle>;
            } else {
              return "";
            }
          })}
      </BlogContent>
      {showScroll && (
        <BackToTop onClick={scrollTop}>
          <FontAwesomeIcon icon="arrow-up" />
        </BackToTop>
      )}
    </PageWrapper>
  );
}
