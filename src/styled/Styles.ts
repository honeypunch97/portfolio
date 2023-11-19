import styled from "styled-components";

export const InnerContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding: 64px 32px;
  box-sizing: border-box;
  h2.title {
    font-size: 48px;
    font-family: "Black Han Sans", sans-serif;
    text-align: center;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 48px 10px;
  }
  @media screen and (max-width: 480px) {
    padding: 10vw 2.0833vw;
    h2.title {
      font-size: 10vw;
      margin-bottom: 10.4167vw;
    }
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
        padding: 5px 15px;
        a {
          color: #fff;
          transition: 0.3s;
          &:hover {
            color: tomato;
          }
        }
      }
    }
    button {
      display: none;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 20px;
    }
  }
  &.scrolled {
    background-color: tomato;
    ul li a:hover {
      color: black;
    }
  }
  @media screen and (max-width: 768px) {
    background-color: tomato;
    nav {
      ul {
        display: none;
        li {
          border-top: 1px solid #efefef;
          a:hover {
            color: black;
          }
        }
        &.on {
          top: 75px;
          left: 0;
          width: 100%;
          position: absolute;
          display: flex;
          flex-direction: column;
          background-color: tomato;
        }
      }
      button {
        display: block;
      }
    }
  }
  @media screen and (max-width: 480px) {
    nav {
      padding: 4.1667vw 6.6667vw;
      h1 {
        a {
          font-size: 5vw;
        }
      }
      ul {
        li {
          border-top: 0.2083vw solid #efefef;
          padding: 1.0417vw 3.125vw;
          font-size: 3.3333vw;
        }
        &.on {
          top: 15.625vw;
        }
      }
      button {
        font-size: 4.1667vw;
      }
    }
  }
`;
export const VisualContainer = styled.section`
  padding: 136px 32px 64px 32px;
  background-image: url("./visual/visual_bg.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h2 {
    text-align: center;
    font-size: 64px;
    margin-bottom: 52px;
    font-family: "Black Han Sans", sans-serif;
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
  @media screen and (max-width: 768px) {
    padding: 136px 14px 64px 14px;
    h2 {
      font-size: 48px;
    }
    p {
      font-size: 17px;
    }
  }
  @media screen and (max-width: 480px) {
    padding: 28.3333vw 6.6667vw 13.3333vw 6.6667vw;
    h2 {
      font-size: 8.75vw;
      margin-bottom: 10.8333vw;
    }
    p {
      font-size: 3.5417vw;
      margin-bottom: 6.6667vw;
    }
    button {
      width: 41.6667vw;
      height: 10.4167vw;
      border-radius: 10.4167vw;
      font-size: 3.75vw;
    }
  }
`;
export const AboutMeContainer = styled.section`
  ul {
    width: 100%;
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
  @media screen and (max-width: 768px) {
    ul {
      li {
        width: 50%;
        margin-bottom: 15px;
        height: 60px;
        i {
          font-size: 32px;
          width: 90px;
        }
        p {
          line-height: 1;
          width: calc(100% - 90px);
          strong {
            font-size: 16px;
          }
          em {
            font-size: 12px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    ul {
      li {
        width: 50%;
        height: 12.5vw;
        margin-bottom: 3.125vw;
        i {
          font-size: 6.6667vw;
          width: 18.75vw;
        }
        p {
          line-height: 1;
          width: calc(100% - 18.75vw);
          strong {
            font-size: 3.3333vw;
            margin-bottom: 1.0417vw;
          }
          em {
            font-size: 2.5vw;
          }
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
        content: "";
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
  @media screen and (max-width: 768px) {
    div {
      .title-box {
        height: 30px;
        font-size: 16px;
      }
      ul {
        margin-bottom: 10px;
        li {
          width: 25%;
          padding: 5px;
          img {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
          }
          p {
            width: 100%;
            font-size: 14px;
            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    p {
      margin-bottom: 1.0417vw;
      font-size: 2.9167vw;
      span {
        margin-left: 4.1667vw;
        &:first-child::after {
          width: 0.2083vw;
          height: 3.125vw;
          right: -2.2917vw;
          top: 2.7083vw;
        }
      }
    }
    div {
      .title-box {
        height: 6.25vw;
        font-size: 3.3333vw;
        padding-left: 3.125vw;
        border-radius: 6.25vw;
        .arrow-btn {
          right: 4.1667vw;
          font-size: 4.1667vw;
        }
      }
      ul {
        margin-bottom: 2.0833vw;
        li {
          width: 25%;
          padding: 1.0417vw;
          img {
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
          }
          p {
            line-height: 1;
            width: 100%;
            font-size: 2.5vw;
            padding: 1.0417vw 0;
          }
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
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      img {
        width: 40px;
        margin-right: 5px;
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
          content: "";
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
  @media screen and (max-width: 480px) {
    .card {
      width: 87.5vw;
      height: 62.5vw;
      border-radius: 4.1667vw;
      padding: 6.25vw;
      border: solid tomato 1.0417vw;
      strong {
        margin-bottom: 4.1667vw;
        img {
          width: 8.3333vw;
          margin-right: 1.0417vw;
        }
        span {
          font-size: 7.2917vw;
        }
      }
      a {
        font-size: 3.3333vw;
      }
      em {
        font-size: 3.3333vw;
        margin-bottom: 4.1667vw;
      }
      ul {
        li {
          font-size: 3.3333vw;
          margin-left: 3.125vw;
          margin-bottom: 2.0833vw;
          &::after {
            width: 1.6667vw;
            height: 1.6667vw;
            left: -3.125vw;
          }
        }
      }
    }
  }
`;
export const ProjectsContainer = styled.section`
  .project-item {
    margin-bottom: 100px;
    .project-title {
      font-size: 40px;
      font-family: "Black Han Sans", sans-serif;
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
              a {
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .project-item {
      .content-box {
        flex-direction: column;
        .media-box {
          width: 100%;
        }
        .description-box {
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
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
