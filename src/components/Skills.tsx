import { useState } from 'react';
import { InnerContainer, SkillsContainer } from '../styled/Styles';

const Skills = () => {
   const [data, setData] = useState([
      {
         title: 'Frontend',
         isOpened: true,
         icons: [
            { imgSrc: './skills/html5-color.svg', sub: 'HTML5' },
            { imgSrc: './skills/css3-color.svg', sub: 'CSS3' },
            { imgSrc: './skills/sass-color.svg', sub: 'Sass' },
            { imgSrc: './skills/styledcomponents-color.svg', sub: 'styled-components' },
            { imgSrc: './skills/jquery-color.svg', sub: 'jQuery' },
            { imgSrc: './skills/javascript-color.svg', sub: 'Javascript' },
            { imgSrc: './skills/typescript-color.svg', sub: 'Typescript' },
            { imgSrc: './skills/react-color.svg', sub: 'React' },
            { imgSrc: './skills/redux-color.svg', sub: 'Redux' },
            { imgSrc: './skills/axios-color.svg', sub: 'Axios' },
         ],
      },
      {
         title: 'Backend',
         isOpened: true,
         icons: [
            { imgSrc: './skills/nodedotjs-color.svg', sub: 'Node.js' },
            { imgSrc: './skills/express-color.svg', sub: 'Express' },
            { imgSrc: './skills/python-color.svg', sub: 'Python' },
            { imgSrc: './skills/flask-color.svg', sub: 'Flask' },
            { imgSrc: './skills/mysql-color.svg', sub: 'MySQL' },
            { imgSrc: './skills/mongodb-color.svg', sub: 'MongoDB' },
         ],
      },
      {
         title: 'Version Control',
         isOpened: true,
         icons: [
            { imgSrc: './skills/git-color.svg', sub: 'Git' },
            { imgSrc: './skills/github-color.svg', sub: 'GitGub' },
         ],
      },
      {
         title: 'Communication',
         isOpened: true,
         icons: [
            { imgSrc: './skills/figma-color.svg', sub: 'Figma' },
            { imgSrc: './skills/discord-color.svg', sub: 'Discord' },
            { imgSrc: './skills/slack-color.svg', sub: 'Slack' },
         ],
      },
      {
         title: 'Certificate',
         isOpened: true,
         icons: [
            { imgSrc: './skills/qnet.png', sub: '정보처리기사' },
            { imgSrc: './skills/kdata.jpg', sub: 'SQLD' },
            { imgSrc: './skills/qnet.png', sub: '정보처리산업기사' },
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
