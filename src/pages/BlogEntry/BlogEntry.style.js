import styled from "styled-components";
import { colors } from "../../constant_styles";
import React from "react";

export function EntryContent({ children, deleteCallback }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        height: "fit-content",
        margin: "auto ",
      }}
    >
      <DeleteButton onClick={() => deleteCallback()}> X </DeleteButton>
      {children}
    </div>
  );
}

const DeleteButton = styled.button`
  border: none;
  background: transparent;
  font-size: 16px;
  padding: 0px 0px 0px 0px;
  width: 10%;
  margin: 0%;
  text-align: center;
  color: ${colors.purplegrey};
  :hover,
  :focus,
  :active {
    cursor: pointer;
    color: ${colors.vermilion};
  }
`;

export const EntryLabel = styled.label`
  font-size: 18px;
  width: fit-content;
  margin: 20px auto;
`;

export const ContentTitle = styled.div`
  font-size: 18px;
  width: fit-content;
  margin: 20px auto;
`;

export const EntryInput = styled.input`
  border: 1px solid ${colors.vermilion};
  padding: 10px 20px;
  width: 80%;
  margin: 10px auto;
  font-size: 18px;
  color: ${colors.slategrey};
  text-align: center;

  :focus {
    border: 2px solid ${colors.teal};
  }
`;

export const EntryTextarea = styled.textarea`
  border: 1px solid ${colors.vermilion};
  width: 80%;
  padding: 30px;
  font-size: 18px;
  margin: 10px auto;
  text-align: center;

  :focus {
    border: 2px solid ${colors.teal};
  }
`;

export const NewTextarea = styled.textarea`
  border: 1px solid ${colors.darkgrey};
  width: 80%;
  padding: 30px;
  font-size: 14px;
  margin: 10px 0px;
  text-align: center;
  height: 150px;
  :focus {
    border: 2px solid ${colors.teal};
  }
`;

export const NewImage = styled.input`
  border: 1px solid ${colors.deeppurple};
  border-radius: 30px;
  width: 80%;
  margin: 10px 0px;
  padding: 10px 30px;
  font-size: 14px;
  text-align: center;
`;

export const NewCodeBlock = styled.textarea`
  border: 1px solid ${colors.mint};
  border-radius: 10px;
  width: 80%;
  height: 100px;
  margin: 10px 0px;
  padding: 30px;
  font-size: 14px;
  text-align: center;
`;

export const NewSubtitle = styled.input`
  border: 1px solid ${colors.purplegrey};
  border-radius: 5px;
  width: 80%;
  margin: 10px 0px;
  padding: 10px 30px;
  font-size: 14px;
  text-align: center;
  color: ${colors.vermilion};
`;

export const EntryForm = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const AddNew = styled.button`
  background: transparent;
  padding: 5px 10px;
  font-size: 14px;
  width: fit-content;
  line-height: 14px;
  height: 24px;
  border: 1px solid ${colors.lightgrey};
  align-self: center;
  margin-right: 20px;
  color: ${colors.purplegrey};

  :hover,
  :active,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
    color: ${colors.deeppurple};
  }
`;

export const AddBlogEntry = styled.button`
  background: transparent;
  border: 1px solid ${colors.lightgrey};
  border-radius: 20px;
  width: fit-content;
  padding: 10px 30px;
  margin: 30px auto;
  font-size: 14px;
  color: ${colors.purplegrey};

  :hover,
  :active,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
    color: ${colors.deeppurple};
  }
`;

export const AddElement = styled.div`
  display: flex;
  margin: 50px auto 20px;
  width: 80%;
  align-items: center;
  height: fit-content;
  flex-wrap: wrap;
`;

export const ElementSelection = styled.div`
  display: flex;
  justify-content: space-between;
  width: fit-content;
  padding: 0px;
  flex-wrap: wrap;
`;

export const AddTextarea = styled.button`
  background: transparent;
  padding: 5px 10px;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid ${colors.teal};

  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
  }
`;

export const AddImages = styled.button`
  background: transparent;
  padding: 5px 10px;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid ${colors.teal};

  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
  }
`;

export const AddCode = styled.button`
  background: transparent;
  padding: 5px 10px;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid ${colors.teal};

  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
  }
`;

export const AddSubtitle = styled.button`
  background: transparent;
  padding: 5px 10px;
  font-size: 14px;
  margin-right: 10px;
  border: 1px solid ${colors.teal};

  :hover,
  :focus {
    cursor: pointer;
    border: 1px solid ${colors.vermilion};
  }
`;
