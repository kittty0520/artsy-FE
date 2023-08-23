import styled, { css } from 'styled-components';

const RowContainer = styled.div`
    width: 100%;
    padding: 1.8rem 0;
    display: flex;
    flex-direction: column;

    ${({ theme }) => theme.media.labtop} {
        flex-direction: row;

        ${({ $review }) =>
            $review &&
            css`
                display: none;
            `}
    }
`;

const TitleText = styled.span`
    font-size: 1.6rem;
    font-weight: 600;

    ${({ theme }) => theme.media.labtop} {
        text-align: left;
        width: 10rem;
    }
`;

const DetailText = styled.span`
    font-size: 1.4rem;
    margin: 10px 0;
    line-height: 2.5rem;

    ${({ theme }) => theme.media.labtop} {
        white-space: nowrap; // 다음 줄로 넘어가지 않도록

        margin: 0;
        width: 20rem;
        text-align: left;
    }
`;

export { RowContainer, TitleText, DetailText };
