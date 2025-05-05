import styled from "styled-components";

export const LayoutStyled = styled.div`
    background: #12253e;
    .header {
        height: 120px;
        max-width: 1290px;
        margin: 0 auto;
    }
    .footer {
        width: 100%;
        background: #0c1622;
        padding: 100px 315px 35px;
        display: flex;
        flex-direction: column;
        gap: 136px;
        .footer-content {
            display: grid;
            column-gap: 65px;
            grid-template-columns: 264px auto;
        }
        .divider {
            height: 5px;
            width: 32px;
            background: #f4796c;
        }
        &__cols {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 85px;
        }
    }
`;
