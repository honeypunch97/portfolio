import { InnerContainer, ProjectsContainer } from '../styled/Styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Projects = () => {
   const openLinkInNewTab = (url: string) => {
      window.open(url, '_blank');
   };
   return (
      <ProjectsContainer id="Projects">
         <InnerContainer>
            <h2 className="title">PROJECTS</h2>
            <div className="project-item">
               <h3 className="project-title">포트폴리오 사이트</h3>
               <p className="project-subtitle">2023.10 (1人 개인 프로젝트)</p>
               <div className="content-box">
                  <div className="media-box">
                     <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                           <img src="./projects/portfolio/1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/portfolio/2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/portfolio/3.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/portfolio/4.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/portfolio/5.png" alt="" />
                        </SwiperSlide>
                     </Swiper>
                  </div>
                  <div className="description-box">
                     <p>
                        <b>포트폴리오 용도로 제작한 웹사이트</b>입니다. 지금 보고 있는 바로 이 웹사이트에 해당합니다.
                     </p>
                     <p>
                        <em>Typescript</em>를 학습을 위해 여러 토이 프로젝트를 만들어 본 후 최대한 빠르게
                        제작해봤습니다. 그 과정에서 번거로움도 느꼈지만, 왜 다른 개발자들이 Typescript를 선호하고
                        권유하는지 느낄 수 있었습니다. 또한 <em>styled-components</em>를 사용해 디자인부분도 동시에
                        작업했습니다.
                     </p>
                     <button onClick={() => openLinkInNewTab('https://github.com/honeypunch97/portfolio')}>
                        자세히 보기 <i className="xi-play"></i>README
                     </button>
                     <ul>
                        <li>
                           <span>
                              <i className="xi-check"></i>주요 기능
                           </span>
                           <p>간단한 자기소개, 인적 사항, 기술 스택, GitHub 링크, 프로젝트 경험</p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>GitHub
                           </span>
                           <p>
                              <a href="https://github.com/honeypunch97/portfolio" target="_blank">
                                 https://github.com/honeypunch97/portfolio
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>URL
                           </span>
                           <p>
                              <a href="https://honeypunch97.github.io/portfolio/dist/" target="_blank">
                                 https://honeypunch97.github.io/portfolio/dist/
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>Frontend
                           </span>
                           <p>React, TypeScript, Styled-components</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="project-item">
               <h3 className="project-title">Gamily</h3>
               <p className="project-subtitle">2023.08 (2人 팀 프로젝트)</p>
               <div className="content-box">
                  <div className="media-box">
                     <iframe
                        width="600"
                        height="338"
                        src="https://www.youtube.com/embed/k0OeS49hoh0?si=cFU5cnJVcjEFTMD3"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                  </div>
                  <div className="description-box">
                     <p>
                        공공데이터 포털(DATA.GO.KR) 오픈 API(농림축산식품부 농림축산검역본부_동물보호관리시스템 유기동물
                        정보 조회 서비스)를 이용한 <b>유기견 조회 및 입양신청 사이트</b>입니다. 팀원이 평소에
                        애견인이고, 저 또한 사회시스템에 관심이 있기 때문에 유기견 관련 주제를 선정했습니다.
                     </p>
                     <p>
                        표현하고 싶은 내용이 많았기 때문에 <em>React</em>를 이용해 단기간 내에 많은 양의 작업을 하려고
                        노력했습니다. <em>애자일 방법</em>
                        으로 전반적인 개발을 진행했고 팀원과의 계속적인 소통과 수정을 반복했습니다. 이 과정에서
                        <em>Redux</em>를 통한 상태관리의 장점을 느꼈고, 개발기획과 정보공유의 중요성 또한 느꼈습니다.
                     </p>
                     <p>
                        진행의 마무리 단계에서 백엔드에도 욕심이 나서 기간 내에 무리인건 알지만
                        <em>Node.JS(with Express)</em>를 사용해 MVC패턴으로 웹서버 작업을 했습니다. 데이터베이스와
                        AWS연동을 하지 못해 아쉬움이 남지만, 한정된 기간내에 많은 양을 작업한 열정적인 프로젝트였습니다.
                     </p>
                     <button onClick={() => openLinkInNewTab('https://github.com/ChuGyeong/Gamily')}>
                        자세히 보기 <i className="xi-play"></i>README
                     </button>
                     <ul>
                        <li>
                           <span>
                              <i className="xi-check"></i>주요 기능
                           </span>
                           <p>
                              회원가입 및 로그인, 유기견 조회 및 입양신청, 반려견 관련 정보전달 및 퀴즈, 관련 상품
                              쇼핑몰 등
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>GitHub
                           </span>
                           <p>
                              <a href="https://github.com/ChuGyeong/Gamily" target="_blank">
                                 https://github.com/ChuGyeong/Gamily
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>URL
                           </span>
                           <p>URL이 없습니다</p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>Frontend
                           </span>
                           <p>React, Redux, Styled-components, Node.JS, Express</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="project-item">
               <h3 className="project-title">탐라는 전기차</h3>
               <p className="project-subtitle">2023.06 (2人 팀 프로젝트)</p>
               <div className="content-box">
                  <div className="media-box">
                     <iframe
                        width="600"
                        height="338"
                        src="https://www.youtube.com/embed/2AA7mHFkg_g?si=6njJToPzG9uBfPHD"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                  </div>
                  <div className="description-box">
                     <p>
                        <b>기존 탐라는 전기차(https://www.tamraev.com/) 페이지를 재구성한 웹사이트</b> 입니다.{' '}
                        <em>React</em>와<em>Styled-components</em>를 사용하여 기존 프로젝트에서 새로운 컨텐츠들을 추가해
                        재구성 했습니다.
                     </p>
                     <p>
                        처음으로 <em>React</em>를 사용한 프로젝트를 진행해서 수정되거나 기획이 엎어지는 케이스가
                        많았지만 <em>Figma</em>를 통해 팀원과의 의견조율을 진행했고 이미지가 많기 때문에 더보기 버튼이나
                        lazy loading을 이용해 랜더링 시간을 줄였습니다. 또한 로딩페이지를 만들어 로딩중에는 표시하도록
                        하여 사용자에게 현재 상태를 안내하도록 구현했습니다.
                     </p>
                     <p>
                        짧은 기간동안 빠르게 결정할 일이 많아 팀원과의 의견차이도 많았습니다. 서로 간단한 예시나
                        시안같은것으로 더 좋은 선택안을 고를 수 있도록 노력했습니다. 특히 <em>Figma</em>를 통한
                        디자인적인 의사소통이 좋았습니다.
                     </p>
                     <button onClick={() => openLinkInNewTab('https://github.com/ChuGyeong/Tamraev')}>
                        자세히 보기 <i className="xi-play"></i>README
                     </button>
                     <ul>
                        <li>
                           <span>
                              <i className="xi-check"></i>주요 기능
                           </span>
                           <p>전기차 이용법, 꿀팁, 사이트 소개, 전기차 소개, 관련 소식</p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>GitHub
                           </span>
                           <p>
                              <a href="https://github.com/ChuGyeong/Tamraev" target="_blank">
                                 https://github.com/ChuGyeong/Tamraev
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>URL
                           </span>
                           <p>
                              <a href="https://chugyeong.github.io/Tamraev/dist/" target="_blank">
                                 https://chugyeong.github.io/Tamraev/dist/
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>Frontend
                           </span>
                           <p>React, Styled-components, Axios</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div className="project-item">
               <h3 className="project-title">이화여대</h3>
               <p className="project-subtitle">2023.05 (4人 팀 프로젝트)</p>
               <div className="content-box">
                  <div className="media-box">
                     <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                        <SwiperSlide>
                           <img src="./projects/ewha/1.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/2.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/3.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/4.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/5.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/6.png" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                           <img src="./projects/ewha/7.png" alt="" />
                        </SwiperSlide>
                     </Swiper>
                  </div>
                  <div className="description-box">
                     <p>
                        <b>기존 이화여대(https://www.ewha.ac.kr/ewha/) 페이지를 재구성한 웹사이트</b> 입니다. 순수
                        바닐라<em>Javascript</em>를 사용하여 기존 프로젝트에서 새로운 컨텐츠들을 추가해 재구성 했으며
                        pc버전과 mobile버전을 따로 작업했습니다.
                     </p>
                     <p>
                        처음으로 진행한 프로젝트로 바닐라JS를 사용하여 사이트의 외적인 퍼블리싱을 재구성했습니다. 기존
                        컨텐츠에 새로운 컨텐츠들을 추가하여 페이지를 리뉴얼하였습니다. Mobile버전은 vw로 작업하여 기기
                        화면에 상관없이 비율을 유지할 수 있도록 개발했습니다.
                     </p>
                     <p>
                        웹의 모든 애니메이션을 라이브러리없이 직접만들어 보는 좋은 경험이었습니다. 같은 내용을
                        모바일작업에서는 유사한 라이브러리로 대체해보며 자주 사용하는 라이브러리에 대한 경험도
                        향상시켰습니다. 저는 메인페이지와 대학, 대학원페이지를 제작했으며 팀장역할을 맡아 팀원들의
                        어려움을 같이 해결했습니다.
                     </p>
                     <button onClick={() => openLinkInNewTab('https://github.com/ChuGyeong/Ewha')}>
                        자세히 보기 <i className="xi-play"></i>README
                     </button>
                     <ul>
                        <li>
                           <span>
                              <i className="xi-check"></i>주요 기능
                           </span>
                           <p>학교소개, 입학/교육, 대학/대학원, 연구/산학, 대학소식, 대학생활 등</p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>GitHub
                           </span>
                           <p>
                              <a href="https://github.com/ChuGyeong/Ewha" target="_blank">
                                 https://github.com/ChuGyeong/Ewha
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>URL
                           </span>
                           <p>
                              <a href="https://chugyeong.github.io/Ewha/pc/" target="_blank">
                                 https://chugyeong.github.io/Ewha/pc/
                              </a>
                           </p>
                        </li>
                        <li>
                           <span>
                              <i className="xi-check"></i>Frontend
                           </span>
                           <p>HTML, CSS, JavaScript</p>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </InnerContainer>
      </ProjectsContainer>
   );
};

export default Projects;
