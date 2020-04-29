import React from "react";
import { PageWrapper, Section, NextPage } from "../../styles";
import { colors } from "../../constant_styles";

export default function NotFoundPage(props) {
  return (
    <PageWrapper
      style={{
        textAlign: "center",
        color: colors.mint,
        alignItems: "center",
        overflow: "hidden",
      }}
      bgColor={colors.black}
    >
      <h1>404 - Page Not Found</h1>
      <Section>
        <h2>Whoops, looks like you're a little lost</h2>
        <iframe
          title="solar system gif"
          src="https://giphy.com/embed/FsTRLi4SnM86Y"
          width="400"
          height="474"
          frameBorder="1"
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </Section>
      {/* <p>
        <a href="https://giphy.com/gifs/gravity-physics-FsTRLi4SnM86Y">
          via GIPHY
        </a>
      </p> */}
      <h3>
        Trust me, I agree the universe is cool but let's get back you to Earth.
      </h3>
      <div
        style={{
          display: "flex",
          margin: "auto",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <NextPage to="/" margin="30px" color={colors.teal}>
          Home
        </NextPage>
        <NextPage to="/contact" margin="30px" color={colors.teal}>
          {" "}
          Contact
        </NextPage>
      </div>
    </PageWrapper>
  );
}
