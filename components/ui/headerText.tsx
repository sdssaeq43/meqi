import React from "react";
import styled from "styled-components";
interface MainTextProps {
  text: string;
  href?: string; // Optional: for customizable href
}

export const MainText = ({ text, href = "#" }: MainTextProps) => {
  return (
    <StyledWrapper>
      <a href={href} className="btn-shine">
        {text}
      </a>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .btn-shine {
    transform: translate(-50%, -50%);
    padding: 12px 48px;
    background: linear-gradient(to right, #9f9f9f 0, #fff 10%, #868686 20%);
    background-position: 0;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 3s infinite linear;
    animation-fill-mode: forwards;
    -webkit-text-size-adjust: none;
    text-decoration: none;
    white-space: nowrap;
  }
  @-moz-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-webkit-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @-o-keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
  @keyframes shine {
    0% {
      background-position: 0;
    }
    60% {
      background-position: 180px;
    }
    100% {
      background-position: 180px;
    }
  }
`;
