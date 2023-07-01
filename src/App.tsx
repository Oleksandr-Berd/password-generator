import './App.css';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { GlobalStyles } from './styles/GlobalStyle';


const App = ():JSX.Element => {
  return (
    <>
    <GlobalStyles/>
      <SharedLayout>
        <PasswordGenerator/>
     </SharedLayout>
    </>
  );
}

export default App;
