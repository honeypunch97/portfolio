import Header from './components/Header';
import GlobalStyle from './styled/GlobalStyle';
import Visual from './components/Visual';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Archiving from './components/Archiving';
import Career from './components/Career';
import Projects from './components/Projects';
import GoUpButton from './components/GoUpButton';

const App = () => {
   return (
      <main>
         <GlobalStyle />
         <Header />
         <Visual />
         <AboutMe />
         <Skills />
         <Archiving />
         <Projects />
         <Career />
         <Footer />
         <GoUpButton />
      </main>
   );
};

export default App;
