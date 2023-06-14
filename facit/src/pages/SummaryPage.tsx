import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';
import { useMeasure } from 'react-use';
import { Navigate, useNavigate } from 'react-router-dom';
// @ts-ignore
import { isWebpSupported } from 'react-image-webp/dist/utils';
import PageWrapper from '../layout/PageWrapper/PageWrapper';
import Richie from '../assets/img/richie.png';
import RichieWebp from '../assets/img/richie.webp';
import BootstrapLogo from '../assets/img/bootstrap.svg';
import StorybookLogo from '../assets/img/storybbok.png';
import StorybookLogoWebp from '../assets/img/storybbok.webp';
import FormikLogo from '../assets/img/formik.jpeg';
import FormikLogoWebp from '../assets/img/formik.webp';
import ApexLogo from '../assets/img/apexcharts.png';
import ApexLogoWebp from '../assets/img/apexcharts.webp';
import SubHeader, {
	SubHeaderLeft,
	SubHeaderRight,
	SubheaderSeparator,
} from '../layout/SubHeader/SubHeader';
import Page from '../layout/Page/Page';
import Button from '../components/bootstrap/Button';
import Badge from '../components/bootstrap/Badge';
import Card, { CardBody } from '../components/bootstrap/Card';
import Input from '../components/bootstrap/forms/Input';
import FormGroup from '../components/bootstrap/forms/FormGroup';

import Item1 from '../assets/img/animation-items/item.png';
import Item1Webp from '../assets/img/animation-items/item.webp';
import Item2 from '../assets/img/animation-items/item2.png';
import Item2Webp from '../assets/img/animation-items/item2.webp';
import Item3 from '../assets/img/animation-items/item3.png';
import Item3Webp from '../assets/img/animation-items/item3.webp';
import Item4 from '../assets/img/animation-items/item4.png';
import Item4Webp from '../assets/img/animation-items/item4.webp';
import Item5 from '../assets/img/animation-items/item5.png';
import Item5Webp from '../assets/img/animation-items/item5.webp';
import Item6 from '../assets/img/animation-items/item6.png';
import Item6Webp from '../assets/img/animation-items/item6.webp';
import Item7 from '../assets/img/animation-items/item7.png';
import Item7Webp from '../assets/img/animation-items/item7.webp';
import Item8 from '../assets/img/animation-items/item8.png';
import Item8Webp from '../assets/img/animation-items/item8.webp';
import Item9 from '../assets/img/animation-items/item9.png';
import Item9Webp from '../assets/img/animation-items/item9.webp';
import Item10 from '../assets/img/animation-items/item10.png';
import Item10Webp from '../assets/img/animation-items/item10.webp';
import Item11 from '../assets/img/animation-items/item11.png';
import Item11Webp from '../assets/img/animation-items/item11.webp';
import Item12 from '../assets/img/animation-items/item12.png';
import Item12Webp from '../assets/img/animation-items/item12.webp';
import Item13 from '../assets/img/animation-items/item13.png';
import Item13Webp from '../assets/img/animation-items/item13.webp';
import Item14 from '../assets/img/animation-items/item14.png';
import Item14Webp from '../assets/img/animation-items/item14.webp';

const useStyles = createUseStyles({
	// stylelint-disable
	intro: {
		zIndex: 200,
		overflow: 'hidden',
	},

	introImageWrapper: {
		zIndex: 1,
	},

	introImage: {
		backgroundImage: `url(${isWebpSupported() ? RichieWebp : Richie})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		height: '100%',

		'@media (min-width: 992px)': {
			backgroundPosition: 'center right',
			transform: 'translateX(10vw)',
		},
	},

	introContentWrapper: {
		zIndex: 2,
	},

	animation: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		display: 'flex',
		overflow: 'hidden',
		width: '100%',
		height: '100vh',
		alignItems: 'flex-start',
		justifyContent: 'center',
	},

	item: {
		position: 'relative',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
		transformStyle: 'preserve-3d',
		willChange: 'transform',
	},

	item1: {
		top: '10%',
		width: 20,
		height: 20,
		backgroundImage: `url(${isWebpSupported() ? Item1Webp : Item1})`,
	},

	item2: {
		top: '15%',
		width: 55,
		height: 55,
		backgroundImage: `url(${isWebpSupported() ? Item2Webp : Item2})`,
	},

	item3: {
		top: '37%',
		left: '-30%',
		width: 45,
		height: 45,
		backgroundImage: `url(${isWebpSupported() ? Item3Webp : Item3})`,
	},

	item4: {
		width: 15,
		height: 15,
		margin: 'auto 10px',
		backgroundImage: `url(${isWebpSupported() ? Item4Webp : Item4})`,
	},

	item5: {
		top: '78%',
		right: '24%',
		bottom: 'auto',
		left: 'auto',
		width: 12,
		height: 12,
		backgroundImage: `url(${isWebpSupported() ? Item5Webp : Item5})`,
	},

	item6: {
		top: '53%',
		right: '20%',
		bottom: 'auto',
		left: 'auto',
		width: 10,
		height: 10,
		backgroundImage: `url(${isWebpSupported() ? Item6Webp : Item6})`,
	},

	item7: {
		top: '60%',
		right: '0%',
		bottom: 'auto',
		left: '0%',
		width: 25,
		height: 25,
		backgroundImage: `url(${isWebpSupported() ? Item7Webp : Item7})`,
	},

	item8: {
		position: 'absolute',
		top: 'auto',
		right: '8%',
		bottom: '14%',
		width: 44,
		height: 44,
		backgroundImage: `url(${isWebpSupported() ? Item8Webp : Item8})`,
	},

	item9: {
		top: '32%',
		bottom: 'auto',
		left: '16%',
		width: 10,
		height: 10,
		backgroundImage: `url(${isWebpSupported() ? Item9Webp : Item9})`,
	},

	item10: {
		top: '32%',
		right: '-35%',
		width: 32,
		height: 32,
		backgroundImage: `url(${isWebpSupported() ? Item10Webp : Item10})`,
	},

	item11: {
		top: '71%',
		right: 'auto',
		bottom: 'auto',
		left: '38%',
		width: 20,
		height: 20,
		backgroundImage: `url(${isWebpSupported() ? Item11Webp : Item11})`,
	},

	item12: {
		top: '73%',
		right: 'auto',
		bottom: 'auto',
		left: '-44%',
		width: 18,
		height: 18,
		backgroundImage: `url(${isWebpSupported() ? Item12Webp : Item12})`,
	},

	item13: {
		top: '56%',
		right: 'auto',
		bottom: 'auto',
		left: '30%',
		width: 12,
		height: 12,
		backgroundImage: `url(${isWebpSupported() ? Item13Webp : Item13})`,
	},

	item14: {
		top: '93%',
		right: '-22%',
		bottom: 'auto',
		left: '0%',
		width: 18,
		height: 18,
		backgroundImage: `url(${isWebpSupported() ? Item14Webp : Item14})`,
	},

	logoWrapper: {
		height: 300,

		'@media (minwidth: 992px)': {
			height: 450,
		},
	},

	bootstrapLogo: {
		height: '100%',
		backgroundImage: `url(${BootstrapLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	storybookLogo: {
		height: '100%',
		backgroundImage: `url(${isWebpSupported() ? StorybookLogoWebp : StorybookLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	formikLogo: {
		height: '100%',
		backgroundImage: `url(${isWebpSupported() ? FormikLogoWebp : FormikLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},

	apexLogo: {
		height: '100%',
		backgroundImage: `url(${isWebpSupported() ? ApexLogoWebp : ApexLogo})`,
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'contain',
	},
	// stylelint-enable
});

const SummaryPage = () => {
	const navigate = useNavigate();
	const classes = useStyles();
	const [ref, { height }] = useMeasure<HTMLDivElement>();
	const [state, setState] = useState<string>('');
	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('llego al submit');
	};
	const handleClick = () => {
		navigate('/sales/product/2');
	};
	return (
		<PageWrapper ref={ref} title='React Admin Dashboard Template'>
			<SubHeader>
				<SubHeaderLeft>
					<span className='fw-bold'>Administrador</span>
					<SubheaderSeparator />
				</SubHeaderLeft>
				{/* <SubHeaderRight>
					<Button color='success' isLight icon='ShoppingCart' tag='a' href='/'>
						Buy on Envato
					</Button>
					<Button
						color='info'
						isLight
						tag='a'
						href='mailto:info@omtanke.studio'
						icon='MarkunreadMailbox'>
						Create Group
					</Button>
				</SubHeaderRight> */}
			</SubHeader>
			<Page>
				<div id='intro' className='scroll-margin'>
					<div className={classNames('row', 'h-fluid-min-100', classes.intro)}>
						<div
							className={classNames('col-lg-6', 'col-12', classes.introImageWrapper)}>
							<div className={classes.introImage} />
						</div>
						<div
							className={classNames(
								'col-lg-6',
								'col-12',
								'd-flex',
								'align-items-center',
								'justify-content-center',
								classes.introContentWrapper,
							)}>
							<div>
								<h1 className='display-1 mb-4'>Crea tu grupo</h1>
								<div className='row'>
									<div className='col-12'>
										<form onSubmit={handleSubmit}>
											<div className='row justify-content-center'>
												<div className='col-12 mb-5'>
													<FormGroup
														id='nombre'
														isFloating
														label='Nombre de grupo'>
														<Input
															type='text'
															name='state'
															value={state}
															onChange={(e: React.ChangeEvent<HTMLInputElement>
															) => {
																setState(e.target.value);
															}}
														/>
													</FormGroup>
												</div>
												<div className='col-4'>
													<Button
														color='primary'
														size='lg'
														shadow='lg'
														isOutline
														icon='Class'
														to='#bootstrap'
														type='submit'
														onClick={handleClick}>
														Crear
													</Button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className={classes.animation}>
						<motion.div
							animate={{
								x: [height * -0.3, height * -0.35, height * -0.3],
								y: [height * 0.2, height * 0.25, height * 0.2],
							}}
							transition={{
								duration: 15,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item1)}
						/>
						<motion.div
							animate={{
								x: [0, -4, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 25,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item2)}
						/>
						<motion.div
							animate={{
								x: [-48, 0, -48],
								y: [-170, 0, -170],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 32,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item3)}
						/>
						<motion.div
							animate={{
								y: [0, 150, 0],
							}}
							transition={{
								duration: 18,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item4)}
						/>
						<motion.div
							animate={{
								x: [0, 200, 0],
								y: [0, 200, 0],
							}}
							transition={{
								duration: 46,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item5)}
						/>
						<motion.div
							animate={{
								x: [0, -150, 0],
							}}
							transition={{
								duration: 22,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item6)}
						/>
						<motion.div
							animate={{
								x: [0, -300, 0],
								y: [0, -100, 0],
							}}
							transition={{
								duration: 22,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item7)}
						/>
						<motion.div
							animate={{
								x: [0, -200, 0],
								y: [0, -200, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 38,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item8)}
						/>
						<motion.div
							animate={{
								x: [0, 120, 0],
								y: [0, 120, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 54,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item9)}
						/>
						<motion.div
							animate={{
								x: [50, 50, 50],
								y: [0, 140, 0],
								rotate: [0, 180, 360],
							}}
							transition={{
								duration: 15,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item10)}
						/>
						<motion.div
							animate={{
								x: [0, -120, 0],
								y: [0, -120, 0],
							}}
							transition={{
								duration: 36,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item11)}
						/>
						<motion.div
							animate={{
								x: [0, 100, 0],
								y: [0, -100, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item12)}
						/>
						<motion.div
							animate={{
								x: [0, -200, 0],
								y: [0, -50, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item13)}
						/>
						<motion.div
							animate={{
								x: [0, 200, 0],
								y: [0, -200, 0],
							}}
							transition={{
								duration: 34,
								ease: 'linear',
								times: [0, 0.5, 1],
								repeat: Infinity,
								repeatType: 'loop',
							}}
							className={classNames(classes.item, classes.item14)}
						/>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};

export default SummaryPage;
