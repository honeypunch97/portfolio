import { AboutMeContainer, InnerContainer } from '../styled/Styles';

const AboutMe = () => {
   return (
      <AboutMeContainer id="AboutMe">
         <InnerContainer>
            <h2 className="title">ABOUT ME</h2>
            <ul>
               <li>
                  <i className="xi-user"></i>
                  <p>
                     <strong>이름</strong>
                     <em>정종우</em>
                  </p>
               </li>
               <li>
                  <i className="xi-calendar"></i>
                  <p>
                     <strong>생년월일</strong>
                     <em>97.04.29</em>
                  </p>
               </li>
               <li>
                  <i className="xi-maker"></i>
                  <p>
                     <strong>주소지</strong>
                     <em>인천광역시 남동구</em>
                  </p>
               </li>
               <li>
                  <i className="xi-call"></i>
                  <p>
                     <strong>연락처</strong>
                     <em>010-3681-1259</em>
                  </p>
               </li>
               <li>
                  <i className="xi-mail"></i>
                  <p>
                     <strong>이메일</strong>
                     <em>bkws04211@naver.com</em>
                  </p>
               </li>
               <li>
                  <i className="xi-pen"></i>
                  <p>
                     <strong>학력</strong>
                     <em>
                        강남대학교
                        <br />
                        (소프트웨어응용학부)
                     </em>
                  </p>
               </li>
            </ul>
         </InnerContainer>
      </AboutMeContainer>
   );
};

export default AboutMe;
