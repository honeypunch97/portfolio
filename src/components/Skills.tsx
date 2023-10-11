import { useState } from 'react';
import { InnerContainer, SkillsContainer } from '../styled/Styles';

const Skills = () => {
   const [data, setData] = useState([
      {
         title: 'Frontend',
         isOpened: true,
         icons: [
            { imgSrc: './public/skills/html5-color.svg', sub: 'HTML5' },
            { imgSrc: './public/skills/css3-color.svg', sub: 'CSS3' },
            { imgSrc: './public/skills/sass-color.svg', sub: 'Sass' },
            { imgSrc: './public/skills/styledcomponents-color.svg', sub: 'styled-components' },
            { imgSrc: './public/skills/jquery-color.svg', sub: 'jQuery' },
            { imgSrc: './public/skills/javascript-color.svg', sub: 'Javascript' },
            { imgSrc: './public/skills/typescript-color.svg', sub: 'Typescript' },
            { imgSrc: './public/skills/react-color.svg', sub: 'React' },
            { imgSrc: './public/skills/redux-color.svg', sub: 'Redux' },
            { imgSrc: './public/skills/axios-color.svg', sub: 'Axios' },
         ],
      },
      {
         title: 'Backend',
         isOpened: true,
         icons: [
            { imgSrc: './public/skills/nodedotjs-color.svg', sub: 'Node.js' },
            { imgSrc: './public/skills/express-color.svg', sub: 'Express' },
            { imgSrc: './public/skills/python-color.svg', sub: 'Python' },
            { imgSrc: './public/skills/flask-color.svg', sub: 'Flask' },
            { imgSrc: './public/skills/mysql-color.svg', sub: 'MySQL' },
            { imgSrc: './public/skills/mongodb-color.svg', sub: 'MongoDB' },
         ],
      },
      {
         title: 'Version Control',
         isOpened: true,
         icons: [
            { imgSrc: './public/skills/git-color.svg', sub: 'Git' },
            { imgSrc: './public/skills/github-color.svg', sub: 'GitGub' },
         ],
      },
      {
         title: 'Communication',
         isOpened: true,
         icons: [
            { imgSrc: './public/skills/figma-color.svg', sub: 'Figma' },
            { imgSrc: './public/skills/discord-color.svg', sub: 'Discord' },
            { imgSrc: './public/skills/slack-color.svg', sub: 'Slack' },
         ],
      },
      {
         title: 'Certificate',
         isOpened: true,
         icons: [
            { imgSrc: './public/skills/qnet.png', sub: '정보처리기사' },
            { imgSrc: './public/skills/kdata.jpg', sub: 'SQLD' },
            { imgSrc: './public/skills/qnet.png', sub: '정보처리산업기사' },
         ],
      },
   ]);

   const toggleIsOpened = (titleName: string) => {
      setData(data.map(item => (item.title === titleName ? { ...item, isOpened: !item.isOpened } : item)));
   };
   const AllOpen = () => {
      setData(data.map(item => (item.isOpened ? item : { ...item, isOpened: true })));
   };
   const AllClose = () => {
      setData(data.map(item => (item.isOpened ? { ...item, isOpened: false } : item)));
   };
   return (
      <SkillsContainer id="Skills">
         <InnerContainer>
            <h2 className="title">SKILLS</h2>
            <p>
               <span onClick={AllOpen}>모두 열기</span>
               <span onClick={AllClose}>모두 닫기</span>
            </p>
            <div>
               {data.map(item => (
                  <div key={item.title}>
                     <div
                        className={`title-box ${item.isOpened && 'active'}`}
                        onClick={() => toggleIsOpened(item.title)}>
                        {item.title}
                        <div className="arrow-btn">
                           <i className="xi-angle-down"></i>
                        </div>
                     </div>
                     <ul>
                        {item.isOpened &&
                           item.icons.map(item => (
                              <li key={item.sub}>
                                 <img src={item.imgSrc} alt={item.sub} />
                                 <p>{item.sub}</p>
                              </li>
                           ))}
                     </ul>
                  </div>
               ))}
            </div>
         </InnerContainer>
      </SkillsContainer>
   );
};

export default Skills;
