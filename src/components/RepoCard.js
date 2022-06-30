import React from 'react';
import {
    Card,
    CardTitle, 
    CardDescription,
    GithubLink,
    Tags,
    Tag,
    Language, 
    LanguageImg,
    LanguageName,
} from './StyledComponents';

const RepoCard = props => {
    console.log(process.env.PUBLIC_URL);
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
