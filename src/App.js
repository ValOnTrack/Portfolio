import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyle';
import styled from 'styled-components';
import Header from './components/Header';
import ProjetPage from './pages/Projet';


const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <PageContainer>
          <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/realisation/:slug" element={<ProjetPage />} /> 
        </Routes>
        </PageContainer>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
