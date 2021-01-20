import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen';
import { Container } from 'react-bootstrap';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
