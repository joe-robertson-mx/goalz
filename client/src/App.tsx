import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import PageLayout from './components/PageLayout';
import {ThemeProvider} from '@mui/material/styles';
import theme from './theme';
import'./App.css'
import GoalEdit from "./pages/Goal_Edit";
import Homepage from './pages/Homepage'

function App() {

  return (
    <div className="App">

      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <PageLayout>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/goal/:id" element= {<GoalEdit />} />
              </Routes>
            </PageLayout>
          </BrowserRouter>
      </ThemeProvider>
    </div>
  )
}

export default App
