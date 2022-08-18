import styled from "styled-components";
import { keyframes } from "styled-components";

const unfold = keyframes`
 from { clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%); }
  to   { clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%); }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #00000099;
    width: 350px;
    padding: 30px 40px;
    gap: 20px;
    border-radius: 15px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    right: 225px;
    top: 70px;
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
    @media (max-width: 1100px) {
        right: 155px;
    }
    @media (max-width: 800px) {
        right: 65px;
    }
    @media (max-height: 650px) {
        padding: 25px 30px;
    }
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
    padding: 10px 10px;
    width: 88%;
    gap: 10px;
    position: relative;
    overflow: hidden;
    @media (max-height: 650px) {
            padding: 8px 5px;
        }
    span {
        color: var(--barely-used-gray);
        font-size: 19px;
        width: 55%;
        @media (max-height: 650px) {
            font-size: 16px;
        }
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
