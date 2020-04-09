import React from "react";
import styled from "styled-components";
import { colors } from "../../constant_styles";

const Link = styled.div`
  border: 1px solid ${colors.palebue};
  width: 40px;
  height: 40px;
  border-radius: 50px;
  text-align: center;
  margin: 10px 5px;
`;

function LinkItem(props) {
  return (
    <Link>
      <i className="LinkItem_icon">{props.icon} Icon</i>
    </Link>
  );
}

export default LinkItem;
