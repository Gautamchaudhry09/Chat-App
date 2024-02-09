import './App.css';
import { Messenger } from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AccountProvider } from './components/account/context/AccountProvider';

function App() {
  //goos OAuth
  const clinetId = '40866344901-cpt7t7o12u3ri9rkncfeuu9si612es5n.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clinetId}>
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
