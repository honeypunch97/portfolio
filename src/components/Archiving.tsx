import { ArchivingContainer, InnerContainer } from '../styled/Styles';

const Archiving = () => {
   const openLinkInNewTab = (url: string) => {
      window.open(url, '_blank');
   };
   return (
      <ArchivingContainer id="Archiving">
         <InnerContainer>
            <h2 className="title">ARCHIVING</h2>
            <div className="card" onClick={() => openLinkInNewTab('https://github.com/honeypunch97')}>
               <strong>
                  <img src="/skills/github-color.svg" alt="github" />
                  <span>Github</span>
               </strong>
               <a href="https://github.com/honeypunch97">github.com/honeypunch97</a>
               <em>소스 코드 저장소입니다.</em>
               <ul>
                  <li>과거 만들었던 프로젝트 소스 코드</li>
                  <li>혼자서 코딩 연습을 위해 끄적이던 소스 코드</li>
                  <li>매일 작은 코드라도 올릴려고 노력합니다</li>
               </ul>
            </div>
         </InnerContainer>
      </ArchivingContainer>
   );
};

export default Archiving;
