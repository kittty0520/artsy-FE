import { useEffect, useRef } from 'react';
import * as L from './LoginForm.styles';
import Input from '@components/@common/Input/Input';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useToastContext from '@hooks/useToastContext';
import useInput from '@hooks/useInput';
import useLoginQuery from '@hooks/@queries/useLoginQuery';
import checkValidation from '@utils/checkValidation';
import { ERROR_TYPE } from '@constants/serverErrorType';
import { ERROR_MESSAGE } from '@constants/message';

const LoginForm = () => {
    const {
        input: loginInfo,
        onChange: handleChange,
        reset,
    } = useInput({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const { mutate, isSuccess, isError, error } = useLoginQuery();
    const emailInputRef = useRef();
    const theme = useTheme();
    const toast = useToastContext();
    const { email, password } = loginInfo;

    useEffect(() => {
        if (isSuccess) navigate('/home');
    }, [isSuccess]);
    useEffect(() => {
        if (!isError) {
            return;
        }

        const errorType = error.response?.data?.error?.type;
        if (errorType === ERROR_TYPE.INCORRECT_PASSWORD || ERROR_TYPE.NOT_FOUND_EMAIL || ERROR_TYPE.INVALID_PARAM) {
            toast.show(ERROR_MESSAGE.incorrectEmailOrPassword);
        }
    }, [isError]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isCorrectFormat = checkValidation({ email });
        if (!isCorrectFormat) {
            toast.show(ERROR_MESSAGE.incorrectEmailFormat);
            emailInputRef.current.focus();
            return;
        }
        mutate(loginInfo);
        reset();
        emailInputRef.current.focus();
    };
    return (
        <L.LoginForm onSubmit={handleSubmit}>
            <Input
                inputType="email"
                placeholder="이메일 주소를 입력하세요."
                id="email"
                name="email"
                ref={emailInputRef}
                onChange={handleChange}
                value={email}
                rounded
                isRequired
                isValid={true}
                inputWidth="100%"
            />
            <Input
                inputType="password"
                placeholder="비밀번호를 입력하세요."
                id="password"
                name="password"
                onChange={handleChange}
                value={password}
                rounded
                isRequired
                isValid={true}
                inputWidth="100%"
            />
            <L.SignInButton color={theme.colors.point1} size={'large'}>
                로그인
            </L.SignInButton>
        </L.LoginForm>
    );
};

export default LoginForm;
