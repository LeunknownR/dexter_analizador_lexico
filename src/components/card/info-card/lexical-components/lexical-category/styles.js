import styled from "styled-components";

export const RowContainer = styled.article`
    display: flex;
    border-bottom: #ECECEC 1px solid;
    cursor: pointer;
    padding: 10px 15px;
`;
export const RowContent = styled.article`
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    h3 {
        color: #515151;
        font-size: 18px;
    }
`;