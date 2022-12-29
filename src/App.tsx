import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import PageLayout from './components/PageLayout';
import {ThemeProvider} from '@mui/material/styles';
import Homepage from './pages/Homepage'
import { Authenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import theme from './theme';
import'./App.css';

Amplify.configure(awsExports);

function App() {

  return (
    <div className="App">
      <Authenticator>
        {({signOut, user}) => (
            <ThemeProvider theme={theme}>
              <BrowserRouter>
                  <PageLayout user={user} signOut={signOut!}>
                    <Routes>
                      <Route path="/" element={<Homepage />} />
                    </Routes>
                  </PageLayout>
                </BrowserRouter>
            </ThemeProvider>
          )}
       </Authenticator>
    </div>
  )
}

export default App
