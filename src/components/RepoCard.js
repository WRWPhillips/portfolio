import styled from 'styled-components';
import React from 'react';

const Card = styled.div`
    width: 325px;
    margin: 5%;
    border: 0.5rem solid ${props => props.theme.borderColor};
    padding: 2%;
    border-radius: 1rem;    
`
const CardTitle = styled.h2`
    font-size: 2rem; 
`
const CardDescription = styled.p`

`
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
`
const Tags = styled.div`
    display: flex;
    flex-flow: row wrap; 
    align-content: space-between;
`
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
`
const Language = styled.div`
    display: flex;
    flex-direction: row; 
`
const LanguageImg = styled.img`
    height: 50px;
    width: 50px;
`
const LanguageName = styled.p`
    font-family: "Roboto", sans-serif;
    margin-left: 5%

`

const RepoCard = props => {
    console.log(props.repo); 
    return(
        <Card>
            <CardTitle>{props.repo.name}</CardTitle>
            <CardDescription>{props.repo.description}</CardDescription>
            <GithubLink target='_blank' href={props.repo.url}>GitHub</GithubLink>
            <Language>
                <LanguageImg src={`${process.env.PUBLIC_URL}/assets/${props.repo.language}.png`}/>
                <LanguageName>Primary language: {props.repo.language}</LanguageName>
            </Language>
            <p>Topics and Technologies:</p>
            <Tags>{
                props.repo.topics.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                ))    
            }</Tags>
        </Card>
    )
}

export default RepoCard;