import styled from "styled-components";

export const Container = styled.article`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 20px 35px;
`;
export const InfoTabs = styled.header`
    display: flex;
    background-color: var(--secondary-color);
    width: 100%;
    border-radius: 20px 20px 0 0;
    padding: 10px 10px 0 10px;
    gap: 10px;
`;
export const Tab = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-back-color);
    border-radius: 10px 10px 0 0;
    padding: 0 5px;
    width: 23%;
    user-select: none;
    cursor: pointer;
    h5 {
        color: #A4A4A4;
        font-size: 14px;
        margin: 0;
        padding: 0;
    }
    #icon {
        color: #A4A4A4;
    }
`;
export const InfoBody = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    padding: 10px 10px 0 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0 0 20px 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;