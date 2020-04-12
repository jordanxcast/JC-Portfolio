import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";

const Link = styled.div`
  border: 1px solid ${colors.vermilion};
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 10px;
  text-align: center;
  margin: 10px 5px;
  color: ${colors.mint};

  > i {
    margin: auto;
    text-align: center;
    font-size: 12px;
  }
`;

function LinkItem(props) {
  return (
    <Link>
      <i className="LinkItem_icon">{props.icon} Icon</i>
    </Link>
  );
}

export default LinkItem;
