import React , {Suspense} from 'react';
import Loading from '../components/Loading'
import GithubProfileCard from 'components/GithubProfileCard';

const GithubProfile = () => {
    return ( 
        <Suspense fallback={<Loading />}>
           <GithubProfileCard />
        </Suspense>
     );
}
 
export default GithubProfile;