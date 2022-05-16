import React, { useState, useEffect } from 'react';
import axios from 'axios';

import styled from 'styled-components';

import RepoCard from './RepoCard';


const CardSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    margin: 0 5%;
`;

const RepoCards = () => {
    const [repos, setRepos] = useState([])
    const getProjects = () => {
      axios.get('https://portfolio-service-flask.herokuapp.com/projects'
        ).then( resp => {
          setRepos(resp.data.projects);
        }).catch( err => {
          console.log(err);
        });
    }
  
    useEffect(() => {
      getProjects();
    }, []);

    return(
        <CardSection>
            {
            repos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
            ))
            }
        </CardSection>
    )
};

export default RepoCards;
