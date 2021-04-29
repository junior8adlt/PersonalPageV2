import React , {useState, useEffect, Suspense} from 'react';
import Loading from '../components/Loading/Loading'
import { openSource } from "../data/data";
import {get} from 'axios';
import GithubProfileCard from '../components/GithubProfileCard/GithubProfileCard';

const Footer = () => {
    const [prof, setProf] = useState({})
    async function  getProfileData()  {
        await get(`https://api.github.com/users/${openSource.githubUserName}`)
            .then(res => setProf(res.data))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getProfileData()
    });
    return ( 
        <Suspense fallback={<Loading />}>
           <GithubProfileCard prof={prof}/>
        </Suspense>
     );
}
 
export default Footer;