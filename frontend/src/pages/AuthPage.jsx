import { useRecoilState } from 'recoil';
import LoginCard from '../components/LoginCard';
import SignupCard from '../components/SignupCard';
import authScreenAtom from '../atoms/authAtom';

const AuthPage = () => {
  const [authScreenState] = useRecoilState(authScreenAtom);
  console.log(authScreenAtom);

  return <>{authScreenState === 'login' ? <LoginCard /> : <SignupCard />}</>;
};

export default AuthPage;
