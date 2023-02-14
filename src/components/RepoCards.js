import React, { useState, useEffect } from 'react';
import axios from 'axios';

import RepoCard from './RepoCard';

import { CardSection } from './StyledComponents'

const RepoCards = () => {
    const [repos, setRepos] = useState([])
    const getProjects = () => {
      axios.get('https://portfolio-service.fly.dev/projects'
        ).then( resp => {
          setRepos(resp.data.projects);
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
