import React from 'react';
import USERS from '../../../common/data/userDummyData';
import { demoPages } from '../../../menu';
import UserContact from '../../../components/UserContact';
import { useNavigate } from 'react-router-dom';

const CommonDashboardUserCard = () => {
	const navigate = useNavigate();

	return (
		<UserContact
			name={`${USERS.SAM.name} ${USERS.SAM.surname}`}
			position='Team Lead'
			mail={`${USERS.SAM.username}@site.com`}
			phone='1234567'
			onChat={() => navigate(`../${demoPages.chat.subMenu.withListChat.path}`)}
			src={USERS.SAM.src}
			srcSet={USERS.SAM.srcSet}
			color={USERS.SAM.color}
		/>
	);
};

export default CommonDashboardUserCard;
