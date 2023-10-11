import styled from 'styled-components';

export const InnerContainer = styled.div`
   width: 1200px;
   margin: auto;
   padding: 64px 32px;
   h2.title {
      font-size: 48px;
      font-family: 'Black Han Sans', sans-serif;
      text-align: center;
      margin-bottom: 50px;
   }
`;
export const HeaderContainer = styled.header`
   background-color: transparent;
   font-weight: 700;
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   box-sizing: border-box;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 100;

   nav {
      padding: 20px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1200px;
      margin: auto;

      h1 {
         a {
            font-size: 24px;
            color: #fff;
            transition: 0.3s;
            &:hover {
               color: #000;
            }
         }
      }
      ul {
         display: flex;
         li {
            padding: 15px;

            a {
               color: #fff;
               transition: 0.3s;
               &:hover {
                  color: #000;
               }
            }
         }
      }
   }
   &.scrolled {
      background-color: tomato;
   }
`;
export const VisualContainer = styled.section`
   padding: 136px 32px 64px 32px;
   background-image: url('./public/visual/visual_bg.jpg');
   background-repeat: no-repeat;
   background-position: center;
   background-size: cover;
   h2 {
      text-align: center;
      font-size: 64px;
      margin-bottom: 52px;
      font-family: 'Black Han Sans', sans-serif;
      color: #fff;
   }
   p {
      text-align: center;
      font-size: 20px;
      margin-bottom: 32px;
      color: #fff;
   }
   button {
      display: block;
      background-color: tomato;
      margin: auto;
      width: 200px;
      height: 50px;
      border-radius: 50px;
      font-size: 18px;
      color: #fff;
   }
`;
export const AboutMeContainer = styled.section`
   ul {
      display: flex;
      flex-wrap: wrap;
      li {
         display: flex;
         justify-content: center;
         align-items: center;
         width: 33.33333%;
         height: 85px;
         margin-bottom: 20px;
         i {
            font-size: 40px;
            display: block;
            width: 100px;
            text-align: center;
         }
         p {
            width: calc(100% - 100px);
            strong {
               font-size: 20px;
               font-weight: 700;
               display: block;
               margin-bottom: 5px;
            }
            em {
               color: rgb(33, 37, 41);
            }
         }
      }
   }
`;

export const SkillsContainer = styled.section`
   p {
      text-align: right;
      margin-bottom: 5px;
      span {
         display: inline-block;
         margin-left: 20px;
         cursor: pointer;
         position: relative;
         &:first-child::after {
            content: '';
            width: 1px;
            height: 15px;
            background-color: #dcdcdc;
            position: absolute;
            right: -11px;
            top: 13px;
            transform: translateY(-50%);
         }
      }
   }
   div {
      .title-box {
         background: tomato;
         height: 40px;
         font-size: 20px;
         font-weight: 700;
         display: flex;
         align-items: center;
         padding-left: 15px;
         border-radius: 30px;
         position: relative;
         cursor: pointer;
         transition: 0.3s;
         .arrow-btn {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 25px;
            transition: 0.3s;
         }
         &.active {
            color: #fff;
            .arrow-btn {
               transform: translateY(-50%) rotate(180deg);
            }
         }
      }
      ul {
         display: flex;
         flex-wrap: wrap;
         margin-bottom: 20px;
         li {
            width: 16.666%;
            padding: 20px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
               width: 120px;
               height: 120px;
               object-fit: contain;
            }
            p {
               padding: 5px 0;
            }
         }
      }
   }
`;

export const ArchivingContainer = styled.section`
   .card {
      margin: auto;
      width: 420px;
      height: 300px;
      background-color: tomato;
      border-radius: 20px;
      cursor: pointer;
      padding: 30px;
      box-sizing: border-box;
      border: solid tomato 5px;
      transition: 0.3s;
      strong {
         display: block;
         margin-bottom: 20px;
         img {
            width: 40px;
         }
         span {
            font-size: 35px;
            font-weight: 700;
         }
      }
      a {
         display: block;
      }
      em {
         display: block;
         margin-bottom: 20px;
      }
      ul {
         li {
            margin-left: 15px;
            margin-bottom: 10px;
            position: relative;
            &::after {
               content: '';
               width: 8px;
               height: 8px;
               background-color: #000;
               border-radius: 50%;
               position: absolute;
               left: -15px;
               top: 50%;
               transform: translateY(-50%);
            }
         }
      }
      &:hover {
         background-color: transparent;
      }
   }
`;
export const ProjectsContainer = styled.section`
   .project-item {
      margin-bottom: 100px;
      .project-title {
         font-size: 40px;
         font-family: 'Black Han Sans', sans-serif;
         text-align: center;
      }
      .project-subtitle {
         color: #dcdcdc;
         text-align: center;
         margin-bottom: 40px;
      }
      .content-box {
         width: 100%;
         display: flex;
         .media-box {
            width: 50%;
            iframe {
               margin-bottom: 20px;
            }
            .swiper-slide {
               width: 100%;
               img {
                  width: 100%;
               }
            }
            .swiper-pagination-bullet-active {
               background-color: tomato;
            }
         }
         .description-box {
            width: 50%;
            padding-left: 20px;
            box-sizing: border-box;
            p {
               margin-bottom: 15px;
               b {
                  font-weight: 700;
               }
               em {
                  color: tomato;
               }
            }
            button {
               width: 200px;
               height: 50px;
               background-color: tomato;
               border-radius: 10px;
               margin-bottom: 20px;
               border: 5px solid tomato;
               box-sizing: border-box;
               transition: 0.3s;
               color: #fff;
               &:hover {
                  background-color: #fff;
                  color: #000;
               }
            }
            ul {
               border-top: 1px solid #dcdcdc;
               padding-top: 20px;
               li {
                  span {
                     display: inline-block;
                     font-weight: 900;
                     width: 100px;
                  }
                  p {
                     display: inline-block;
                  }
               }
            }
         }
      }
   }
`;

export const CareerContainer = styled.section`
   p {
      font-size: 18px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 40px;
      em {
         font-size: 20px;
         color: tomato;
         font-weight: 900;
      }
   }
   button {
      width: 200px;
      height: 50px;
      border-radius: 50px;
      background-color: tomato;
      color: #fff;
      display: block;
      margin: auto;
   }
`;

export const FooterContainer = styled.footer`
   background-color: tomato;
   .img-box {
      margin-bottom: 10px;
      display: flex;
      justify-content: center;
      a {
         img {
            width: 50px;
            height: 50px;
            transition: 0.3s;
            &:hover {
               opacity: 0.7;
            }
         }
      }
   }

   p {
      text-align: center;
   }
`;

export const GoUpButtonContainer = styled.div`
   position: fixed;
   right: -100px;
   bottom: 20px;
   width: 40px;
   height: 40px;
   border: 5px solid tomato;
   box-sizing: border-box;
   border-radius: 50%;
   background-color: tomato;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   transition: 0.3s;
   color: #fff;
   &.visible {
      right: 20px;
   }
   &:hover {
      background-color: #fff;
      color: tomato;
   }
   i {
      font-size: 24px;
   }
`;
