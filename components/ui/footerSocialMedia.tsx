import React from "react";
import styled from "styled-components";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export const Social = () => {
  return (
    <StyledWrapper>
      <ul className="wrapper">
        <li className="icon max-xs:w-10 max-xs:h-10 w-12 h-12 facebook">
          <span className="tooltip">Telegram</span>
          <FaTelegram size={25} />
        </li>
        <li className="icon max-xs:w-10 max-xs:h-10 w-12 h-12 twitter">
          <span className="tooltip">Twitter</span>
          <FaXTwitter size={25} />
        </li>
        <li className="icon max-xs:w-10 max-xs:h-10 w-12 h-12 instagram">
          <span className="tooltip">Discord</span>
          <FaDiscord size={25} />
        </li>
      </ul>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #222;
    border-radius: 50%;
    margin: 10px;
    // width: 50px;
    // height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .facebook:hover,
  .wrapper .facebook:hover .tooltip,
  .wrapper .facebook:hover .tooltip::before {
    background: #24a1de;
    color: #fff;
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #7289da;
    color: #fff;
  }
`;