import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Coaches.css';

const defaultImage = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

const CoachProfile = () => {
    const { id } = useParams();

    const coachData = {
        1: { name: 'Coach 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu vel leo auctor congue. Quisque at porta dolor. Integer ut felis odio. Suspendisse in felis eros. Sed tincidunt eleifend nisi, a cursus nisl molestie vitae. Morbi est diam, feugiat in lobortis at, pretium vitae dolor. Praesent nisl nisi, aliquam vel interdum vitae, tristique ac purus.', image: '' },
        2: { name: 'Coach 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu vel leo auctor congue. Quisque at porta dolor. Integer ut felis odio. Suspendisse in felis eros. Sed tincidunt eleifend nisi, a cursus nisl molestie vitae. Morbi est diam, feugiat in lobortis at, pretium vitae dolor. Praesent nisl nisi, aliquam vel interdum vitae, tristique ac purus.', image: '' },
        3: { name: 'Coach 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu vel leo auctor congue. Quisque at porta dolor. Integer ut felis odio. Suspendisse in felis eros. Sed tincidunt eleifend nisi, a cursus nisl molestie vitae. Morbi est diam, feugiat in lobortis at, pretium vitae dolor. Praesent nisl nisi, aliquam vel interdum vitae, tristique ac purus.', image: '' },
        4: { name: 'Coach 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu vel leo auctor congue. Quisque at porta dolor. Integer ut felis odio. Suspendisse in felis eros. Sed tincidunt eleifend nisi, a cursus nisl molestie vitae. Morbi est diam, feugiat in lobortis at, pretium vitae dolor. Praesent nisl nisi, aliquam vel interdum vitae, tristique ac purus.', image: '' },
        5: { name: 'Coach 5', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec arcu vel leo auctor congue. Quisque at porta dolor. Integer ut felis odio. Suspendisse in felis eros. Sed tincidunt eleifend nisi, a cursus nisl molestie vitae. Morbi est diam, feugiat in lobortis at, pretium vitae dolor. Praesent nisl nisi, aliquam vel interdum vitae, tristique ac purus.', image: '' },
    };

    const coach = coachData[id];

    if (!coach) {
        return <div>Coach not found</div>;
    }

    return (
        <div className="coach-profile">
            <Link to="/coaches" className="back-button">Go back</Link>
            <div className="profile-container">
                <div className="left-container">
                    <div className="profile-image" style={{ backgroundImage: `url(${coach.image || defaultImage})` }}>
                    </div>
                </div>
                <div className="profile-info">
                    <h1>{coach.name}</h1>
                    <p>{coach.description}</p>
                    <p className="inquire-text">Inquire and book onsite.</p>
                </div>
            </div>
        </div>
    );
};

export default CoachProfile;
