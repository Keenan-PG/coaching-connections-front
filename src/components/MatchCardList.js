import React from 'react';
import Row from 'react-bootstrap/Row';
import MatchCard from './MatchCard';

const MatchCardList = ({ users }) => {
    return (
        <div>
            <Row className="py-4">
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
            </Row>
        </div>
    );
}

export default MatchCardList;