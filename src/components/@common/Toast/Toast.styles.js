import styled from 'styled-components';

const StyledToast = styled.div`
    width: calc(100% - 2rem);
    height: 4.8rem;
    line-height: 4.8rem;
    margin-top: 1.6rem;
    padding: 0 2rem;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius.large};
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: #fff;
    background-color: ${({ theme }) => theme.colors.black};
    box-shadow: 0px 1px 10px 3px rgba(0, 0, 0, 0.02);

    ${({ theme }) => theme.media.tablet} {
        max-width: 30rem;
    }
`;

export default StyledToast;