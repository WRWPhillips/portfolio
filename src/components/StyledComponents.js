import styled from 'styled-components';
import { Link } from 'react-router-dom';

// NavBar components

const Button = styled.button`
    display:inline-block;
    padding:0.35em 1.2em;
    padding-left: 0.2em;
    border:0.2em solid ${props => props.theme.borderColor};
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    width: 20%;
    height: 40px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: ${props => props.theme.textColor};
    font-size: 1em;
    background-color: ${props => props.theme.backgroundColor};
    text-align:center;
    transition: all 0.2s;
    margin-bottom: 3%;
    @media (max-width:700px) {
        width: 100%;
        height: 30px;
    }
    &: hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const A = styled.a`
    display:inline-block;
    padding:0.35em 1.2em;
    padding-left: 0.2em;
    border:0.2em solid ${props => props.theme.borderColor};
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    width: 20%;
    height: 40px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: ${props => props.theme.textColor};
    font-size: 1em;
    background-color: ${props => props.theme.backgroundColor};
    text-align:center;
    transition: all 0.2s;
    margin-bottom: 3%;
    @media (max-width:700px) {
        width: 100%;
        height: 30px;
    }
    &: hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const StyledLink = styled(Link)`
    display:inline-block;
    padding:0.35em 1.2em;
    padding-left: 0.2em;
    border:0.2em solid ${props => props.theme.borderColor};
    margin:0 0.3em 0.3em 0;
    border-radius:0.15em;
    width: 20%;
    height: 40px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;
    color: ${props => props.theme.textColor};
    font-size: 1em;
    background-color: ${props => props.theme.backgroundColor};
    text-align:center;
    transition: all 0.2s;
    margin-bottom: 3%;
    @media (max-width:700px) {
        width: 100%;
        height: 30px;
    }
    &: hover {
        color: ${props => props.theme.backgroundColor};
        background-color: ${props => props.theme.textColor};
    }
`;

const H1 = styled.h1`
    font-size: 3.5em;
    font-style: italic;
    margin-bottom: 0;
`;

const H2 = styled.h2`
    font-size: 2em;
    margin-top: 5%;
`;

const Header = styled.div`
    border: .5em solid ${props => props.theme.borderColor};
    display: flex;
    flex-flow: column wrap;
    width: 80%;
    align-content: center;
    margin: 5% auto;
    text-align: center;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-around;
    @media(max-width:600px) {
        flex-flow: column nowrap;
        height: 20vh;
        padding: 5%;
        padding-bottom: 3%;
    }
`;

// RepoCard components

const Card = styled.div`
    width: 325px;
    margin: 5%;
    border: 0.5rem solid ${props => props.theme.borderColor};
    padding: 2%;
    border-radius: 1rem;
`;
const CardTitle = styled.h2`
    font-size: 2rem; 
`;
const CardDescription = styled.p`

`;
const GithubLink = styled.a`
    display:inline-block;
    padding:0.35em 1.2em;
    background-color: ${props => props.theme.textColor};
    border-radius: 15px 0 15px;
    color: ${props => props.theme.backgroundColor};
    margin:0 0.3em 0.3em 0;
    height: 30px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300; 
`;
const Tags = styled.div`
    display: flex;
    flex-flow: row wrap; 
    align-content: space-between;
`;
const Tag = styled.div`
    display:inline-block;
    padding:0.35em 1.2em;
    background-color: ${props => props.theme.textColor};
    border-radius: 15px;
    color: ${props => props.theme.backgroundColor};
    margin:0 0.3em 0.3em 0;
    height: 30px;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Roboto',sans-serif;
    font-weight:300;  
`;
const Language = styled.div`
    display: flex;
    flex-direction: row; 
`;
const LanguageImg = styled.img`
    height: 50px;
    width: 50px;
`;
const LanguageName = styled.p`
    font-family: "Roboto", sans-serif;
    margin-left: 5%

`;
// RepoCards components

const CardSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0 5%;
`;

// Resume components 

const Iframe = styled.iframe`
  width: 400%;
  margin: 0 32%;
  display: flex;
  content-align: center;
  height: 120vh;
  border: .5rem solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  @media (max-width: 1700px) {
    width: 50%;
    margin 0 25%;
  }
  @media (max-width: 1416px) {
    width: 60%;
    margin 0 20%;
  }
  @media (max-width: 1210px) {
    width: 70%;
    margin: 0 15%;
  }
  @media (max-width: 1060px) {
      width: 80%;
      margin: 0 10%;
  }

`;

const Div = styled.div`
  display: flex;
  align-content: center;
`;

//BioCard Components

const BioCardDiv = styled.div`
  width: 76%;
  border: .5rem solid ${props => props.theme.borderColor};
  align-content: center;
  margin: 5% auto;
  border-radius: 1rem;
  padding: 2%;
  font-size: 1.15em;
  min-height: 30 px;
`;

export {
    Button,
    A, 
    StyledLink,
    H1, 
    H2,
    Header, 
    Nav, 
    Card,
    CardTitle, 
    CardDescription,
    GithubLink,
    Tags,
    Tag,
    Language, 
    LanguageImg,
    LanguageName,
    CardSection,
    Iframe,
    Div,
    BioCardDiv
}