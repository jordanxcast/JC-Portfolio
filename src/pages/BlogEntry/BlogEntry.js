import React, { useState } from "react";
import { writeBlogEntry } from "../../server/server";
import { PageWrapper, PageTitle } from "../../styles";
import {
  EntryForm,
  EntryInput,
  EntryLabel,
  ContentTitle,
  EntryTextarea,
  EntryContent,
  NewTextarea,
  NewImage,
  NewCodeBlock,
  NewSubtitle,
  AddNew,
  AddElement,
  AddTextarea,
  AddImages,
  AddCode,
  ElementSelection,
  AddBlogEntry,
  AddSubtitle,
} from "./BlogEntry.style";

export default function BlogEntry(props) {
  const [addingElement, setAddingElement] = useState(false);

  const [content, setContent] = useState([]);

  const [setBlogEntry] = useState({});

  const handleAddTextarea = () => {
    const values = [...content];
    values.push({ type: "textarea", value: null, position: values.length });
    setContent(values);
  };

  const handleAddImage = () => {
    const values = [...content];
    values.push({ type: "image", value: null, position: values.length });
    setContent(values);
  };

  const handleAddCodeBlock = () => {
    const values = [...content];
    values.push({ type: "code-block", value: null, position: values.length });
    setContent(values);
  };

  const handleAddSubtitle = () => {
    const values = [...content];
    values.push({ type: "subtitle", value: null, position: values.length });
    setContent(values);
  };

  const handleChange = (ev, i) => {
    const values = [...content];
    values[i].value = ev.target.value;
    setContent(values);
  };

  const handleRemove = (idx) => {
    const values = [...content];
    values.splice(idx, 1);
    setContent(values);
  };

  const handleNewEntry = (ev) => {
    ev.preventDefault();
    const { blog_title, blog_summary } = ev.target;
    const title = blog_title.value;
    const summary = blog_summary.value;
    let dateCreated = new Date().toLocaleDateString();

    const newEntry = {
      blogTitle: title,
      blogSummary: summary,
      blogDate: dateCreated,
      blogContent: content || {},
    };
    setBlogEntry(newEntry);
    // console.log(blogEntry, "blog entry!");
    writeBlogEntry(newEntry);

    const { history } = props;
    history.push("/blog");
  };

  return (
    <PageWrapper padding="0px">
      <PageTitle margin="50px auto" padding="10px">
        Create your next blog post
      </PageTitle>
      <EntryForm
        onSubmit={(ev) => {
          handleNewEntry(ev);
        }}
      >
        <EntryLabel htmlFor="blog_title">Blog Title</EntryLabel>
        <EntryInput type="text" name="blog_title"></EntryInput>
        <EntryLabel htmlFor="blog_summary">Entry Summary</EntryLabel>
        <EntryTextarea name="blog_summary"></EntryTextarea>
        <ContentTitle>Content</ContentTitle>
        {content.map((element, idx) => {
          if (element.type === "textarea") {
            return (
              <EntryContent
                deleteCallback={() => handleRemove(idx)}
                key={`${element.type}-${idx}`}
              >
                <NewTextarea
                  key={`${element.type}-${idx}`}
                  placeholder="text"
                  onChange={(ev) => handleChange(ev, idx)}
                ></NewTextarea>
              </EntryContent>
            );
          } else if (element.type === "image") {
            return (
              <EntryContent
                deleteCallback={() => handleRemove(idx)}
                key={`${element.type}-${idx}`}
              >
                <NewImage
                  key={`${element.type}-${idx}`}
                  onChange={(ev) => handleChange(ev, idx)}
                  type="url"
                  placeholder="image url"
                ></NewImage>
              </EntryContent>
            );
          } else if (element.type === "subtitle") {
            return (
              <EntryContent
                deleteCallback={() => handleRemove(idx)}
                key={`${element.type}-${idx}`}
              >
                <NewSubtitle
                  key={`${element.type}-${idx}`}
                  onChange={(ev) => handleChange(ev, idx)}
                  placeholder="Topic change"
                ></NewSubtitle>
              </EntryContent>
            );
          } else if (element.type === "code-block") {
            return (
              <EntryContent
                deleteCallback={() => handleRemove(idx)}
                key={`${element.type}-${idx}`}
              >
                <NewCodeBlock
                  key={`${element.type}-${idx}`}
                  onChange={(ev) => handleChange(ev, idx)}
                  placeholder="code block"
                ></NewCodeBlock>
              </EntryContent>
            );
          } else {
            return "Error";
          }
        })}

        <AddElement>
          {" "}
          <AddNew
            type="button"
            onClick={() => {
              setAddingElement(!addingElement);
            }}
          >
            {addingElement ? "Close " : "Build Element "}
          </AddNew>
          {addingElement && (
            <ElementSelection>
              <AddTextarea
                type="button"
                onClick={(ev) => {
                  handleAddTextarea(ev);
                }}
              >
                Textarea
              </AddTextarea>
              <AddImages
                type="button"
                onClick={(ev) => {
                  handleAddImage(ev);
                }}
              >
                Photo
              </AddImages>
              <AddCode
                type="button"
                onClick={(ev) => {
                  handleAddCodeBlock(ev);
                }}
              >
                Code
              </AddCode>
              <AddSubtitle
                type="button"
                onClick={(ev) => {
                  handleAddSubtitle(ev);
                }}
              >
                Subtitle
              </AddSubtitle>
            </ElementSelection>
          )}
        </AddElement>

        <AddBlogEntry type="submit">Add Entry to Collection</AddBlogEntry>
      </EntryForm>
    </PageWrapper>
  );
}
