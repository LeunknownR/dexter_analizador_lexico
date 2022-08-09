import styled from "styled-components";
import { keyframes } from "styled-components";

const unfold = keyframes`
 from { clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%); }
  to   { clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%); }
`;

// const fold =
//  /* from { clip-path: polygon(100% 0, 100% 100%, 100% 100%, 0 100%, 0 0); } */
//  /* to   { clip-path: polygon(100% 0, 100% 50%, 50% 100%, 0 100%, 0 0); } */
//  from { visibility: hidden; clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%); }
//   to   { clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%); visibility: hidden }
// `;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #00000099;
    width: 350px;
    padding: 30px 40px;
    gap: 20px;
    border-radius: 15px;
    position: absolute;
    right: 225px;
    top: 80px;
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
    h5 {
        font-weight: 700;
    }
    &.active {
        visibility: visible;
        opacity: 1;
        animation-name: ${unfold};
        animation-duration: 0.6s;
    }
    /* &.inactive {
        visibility: hidden;
        animation-name: ;
        animation-duration: 0.6s;
    } */
`;
export const CardsContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

//SubComponent

export const MemberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d0eaff;
    border-radius: 35px;
    padding: 10px 20px;
    width: 80%;
    gap: 10px;
    position: relative;
    overflow: hidden;
    span {
        color: var(--barely-used-gray);
        font-size: 19px;
        width: 55%;
    }
    &::after {
        content: "";
        position: absolute;
        left: 50%;
        width: 200px;
        height: 100%;
        background: #428bca;
        opacity: 0.15;
        -webkit-transform: skew(-30deg);
        transform: skew(-30deg);
        z-index: 1;
    }
`;

