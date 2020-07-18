import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';
import Pdf from '../../LewisJacksonCV.pdf';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
    const location = useLocation();

    return (
        <HeaderContainer isHome={location.pathname === '/'}>
            <Header>
                <Image src={user.basics.picture} />
                <div>
                    <h2>{user.basics.name}</h2>
                    <h4>
                        <a
                            href={`https://gitconnected.com/${user.basics.username}`}
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            @{user.basics.username}
                        </a>
                    </h4>
                    
                    <p>{user.basics.label}</p>
                    <p>{user.basics.email}</p>
                    <p>{user.basics.phone}</p>
                    <p>{user.basics.region}</p>
                </div>
            </Header>
            <div>
                <ViewResumeLink
                    href={Pdf}
                    target="_blank"
                >
                    <span>View Résumé</span>
                    <ArrowRight16 />
                </ViewResumeLink>
            </div>
        </HeaderContainer>
    );
};

export default UserHeader;