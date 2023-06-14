import React, { useContext, useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import Brand from '../../../layout/Brand/Brand';
import Navigation, { NavigationLine } from '../../../layout/Navigation/Navigation';
import User from '../../../layout/User/User';
import { componentsMenu, dashboardMenu, demoPages, layoutMenu } from '../../../menu';
import ThemeContext from '../../../contexts/themeContext';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import Hand from '../../../assets/img/hand.png';
import HandWebp from '../../../assets/img/hand.webp';
import Icon from '../../../components/icon/Icon';
import Button from '../../../components/bootstrap/Button';
import useDarkMode from '../../../hooks/useDarkMode';
import Aside, { AsideBody, AsideFoot, AsideHead } from '../../../layout/Aside/Aside';

const DefaultAside = () => {
	const { asideStatus, setAsideStatus } = useContext(ThemeContext);

	const [doc, setDoc] = useState(false);

	const { t } = useTranslation(['translation', 'menu']);

	const { darkModeStatus } = useDarkMode();

	return (
		<Aside>
			<AsideHead>
				<Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
			</AsideHead>
			<AsideBody>
				<Navigation menu={dashboardMenu} id='aside-dashboard' />
				{!doc && (
					<>
						{/* <NavigationLine /> */}
						{/* <Navigation menu={demoPages} id='aside-demo-pages' /> */}
						{/* <NavigationLine /> */}
						{/* <Navigation menu={layoutMenu} id='aside-menu' /> */}
					</>
				)}

				{doc && (
					<>
						<NavigationLine />
						<Navigation menu={componentsMenu} id='aside-menu-two' />
						<NavigationLine />
					</>
				)}

				{asideStatus && doc && (
					<Card className='m-3 '>
						<CardBody className='pt-0'>
							<img srcSet={HandWebp} src={Hand} alt='Hand' width={130} height={130} />
							<p
								className={classNames('h4', {
									'text-dark': !darkModeStatus,
									'text-light': darkModeStatus,
								})}>
								{t('Everything is ready!')}
							</p>
							<Button
								color='info'
								isLight
								className='w-100'
								onClick={() => setDoc(false)}>
								{t('Demo Pages')}
							</Button>
						</CardBody>
					</Card>
				)}
			</AsideBody>
			<AsideFoot>
				<nav aria-label='aside-bottom-menu'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDoc(!doc);
							}}
							data-tour='documentation'>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={doc ? 'ToggleOn' : 'ToggleOff'}
										color={doc ? 'success' : undefined}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{t('menu:Documentation')}
									</span>
								</span>
								<span className='navigation-link-extra'>
									<Icon
										icon='Circle'
										className={classNames(
											'navigation-notification',
											'text-success',
											'animate__animated animate__heartBeat animate__infinite animate__slower',
										)}
									/>
								</span>
							</span>
						</div>
					</div>
				</nav>
				<User />
			</AsideFoot>
		</Aside>
	);
};

export default DefaultAside;
