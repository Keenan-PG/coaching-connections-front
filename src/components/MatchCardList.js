import React from 'react';
import MatchCard from './MatchCard';

const MatchCardList = ({ users }) => {
    return (
        <div>
            {
                users.map((user, i) => {
                    // have to make key so react can keep track of props 
                    return (
                        <MatchCard 
                            key={i}
                            user={users[i].user}
                            title={users[i].title} 
                            experience={users[i].experience} 
                            offering={users[i].offering} 
                        />
                    );
                })
            }
        </div>
    );
}

export default MatchCardList;