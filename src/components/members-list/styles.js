import styled from "styled-components";
import { keyframes } from "styled-components";

const unfold = keyframes`
 from { clip-path: polygon(100% 0%, 100% 0%, 100% 0%, 100% 0%); }
  to   { clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%); }
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #00000099;
    width: 360px;
    padding: 30px 40px;
    gap: 20px;
    border-radius: 15px;
    position: absolute;
    right: 225px;
    top: 70px;
    height: 1.5%;
    z-index: 50;
    overflow: hidden;
    visibility: hidden;
    opacity: 0;
    transition: 0.4s;
    h5 {
        font-weight: 700;
    }
    &.active {
        visibility: visible;
        opacity: 1;
        height: 600px;
    }
    @media (max-width: 1500px) {
        top: 0px;
        right: 205px;
        transform: scale(0.8);
    }
    /* &.active {
        visibility: visible;
        opacity: 1;
        animation-name: ${unfold};
        animation-duration: 0.6s;
    } */
    /* @media (max-width: 1100px) {
        right: 155px;
    }
    @media (max-width: 800px) {
        right: 65px;
    }
    @media (max-height: 650px) {
        padding: 25px 30px;
    } */
`;
export const CardsContainer = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 100%;
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
    transition: 0.5s;
    opacity: 0;
    transform: translateX(-300px);
    transition-delay: ${({ delayFactor }) => delayFactor*0.1}s;
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
    &.active {
        transform: translateX(0px);
        opacity: 1;
    }
    @media (max-height: 650px) {
        padding: 8px 5px;
    }
`;
