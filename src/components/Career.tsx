import { CareerContainer, InnerContainer } from '../styled/Styles';

const Career = () => {
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
      <CareerContainer id="Career">
         <InnerContainer>
            <h2 className="title">CAREER</h2>
            <p>
               아직 경력이 없는 신입입니다
               <br />
               저에게 좋은 <em>기회</em>를 주세요!
            </p>
            <button
               onClick={e => {
                  e.preventDefault();
                  scrollToSection('AboutMe');
               }}>
               연락처보기<i className="xi-arrow-up"></i>
            </button>
         </InnerContainer>
      </CareerContainer>
   );
};

export default Career;
