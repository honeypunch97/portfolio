import { useEffect, useState } from 'react';
import { GoUpButtonContainer } from '../styled/Styles';

const GoUpButton = () => {
   const [isVisible, setIsVisible] = useState(false);

   const handleScroll = () => {
      if (window.scrollY > 100) {
         setIsVisible(true);
      } else {
         setIsVisible(false);
      }
   };

   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <GoUpButtonContainer className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
         <i className="xi-arrow-top"></i>
      </GoUpButtonContainer>
   );
};

export default GoUpButton;
