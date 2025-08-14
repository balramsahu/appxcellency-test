import { BrowserRouter as Router } from 'react-router';
import './App.css';
import LayoutModule from './layout';
import { ThemeProvider } from '@mui/material';
import { userTheme } from './theme';
import { Provider } from 'react-redux';
import store from './stores';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <ThemeProvider theme={userTheme}>
        <Provider store={store}>
          <Router>
            <LayoutModule />
          </Router>
        </Provider>
      </ThemeProvider>
    </>
  )
}

export default App;
