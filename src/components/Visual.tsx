import { VisualContainer } from '../styled/Styles';

const Visual = () => {
   const scrollToSection = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         const yOffset = section.getBoundingClientRect().top + window.scrollY - 100;
         window.scrollTo({
            top: yOffset,
            behavior: 'smooth',
         });
      }
   };
   return (
      <VisualContainer>
         <h2>
            -정종우-
            <br />
            프론트엔드 포트폴리오
         </h2>
         <p>
            안녕하세요.
            <br />
            새로운 것을 경험하는 것이 취미인 프론트엔드 개발자입니다.
            <br />
            문제 인지능력과, 문제 해결능력이 저의 장점입니다.
         </p>
         <button
            onClick={e => {
               e.preventDefault();
               scrollToSection('AboutMe');
            }}>
            더 알아보기<i className="xi-arrow-down"></i>
         </button>
      </VisualContainer>
   );
};

export default Visual;
