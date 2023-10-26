import styled from 'styled-components';
import Button from '@components/@common/Button/Button';

const LoginForm = styled.form`
    display: grid;
    grid-template-rows: 57px 57px 53px;
    grid-gap: 12px;
    width: 100%;
    max-width: 29rem;
    margin-bottom: 16px;
`;

const SignInButton = styled(Button)`
    font-size: 1.4rem;
`;

export { LoginForm, SignInButton };
