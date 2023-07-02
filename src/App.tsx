import { StyleSheetManager } from 'styled-components';
import './App.css';
import PasswordGenerator from './components/PasswordGenerator/PasswordGenerator';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { GlobalStyles } from './styles/GlobalStyle';


const App = (): JSX.Element => {
  return (
    <>
      <StyleSheetManager shouldForwardProp={(prop) => prop !== 'position'}>
        <GlobalStyles />
        <SharedLayout>
          <PasswordGenerator />
        </SharedLayout>
      </StyleSheetManager>
    </>
  );
}

export default App;
