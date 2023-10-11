import { FooterContainer, InnerContainer } from '../styled/Styles';

const Footer = () => {
   return (
      <FooterContainer>
         <InnerContainer>
            <div className="img-box">
               <a href="#">
                  <img src="./public/skills/github-color.svg" alt="github" />
               </a>
            </div>
            <p>© 2023. Jeong Jong Woo. All rights reserved.</p>
         </InnerContainer>
      </FooterContainer>
   );
};

export default Footer;
