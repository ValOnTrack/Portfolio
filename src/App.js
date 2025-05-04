import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles/GlobalStyle';
import styled from 'styled-components';
import Header from './components/Header';
import Parcours from './pages/Parcours';


const PageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1.5rem; // pour respirer sur petits écrans
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
          <Route path="/parcours" element={<Parcours />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        </PageContainer>
        
      </Router>
    </ThemeProvider>
  );
}

export default App;
