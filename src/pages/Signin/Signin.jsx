import * as S from './Signin.styles';
import IntroBox from '@components/@common/introBox/IntroBox';
import { useNavigate } from 'react-router-dom';
import LoginForm from '@components/Signin/LoginForm/LoginForm';

const Signin = () => {
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/register');
    };
    const handleClickTitle = () => {
        navigate('/');
    };

    return (
        <S.SignInContainer>
            <IntroBox />
            <S.SignInContent>
                <S.LoginTitle onClick={handleClickTitle}>Artsy</S.LoginTitle>
                <S.FormContainer>
                    <LoginForm />
                    <S.RegisterButton size={'large'} onClick={handleRegister} style="line">
                        회원가입
                    </S.RegisterButton>
                    <S.SearchPasswordButton to="/user/search">비밀번호 찾기</S.SearchPasswordButton>
                </S.FormContainer>
            </S.SignInContent>
        </S.SignInContainer>
    );
};
export default Signin;
