import React, { FC, useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes, { any, element } from 'prop-types';
import classNames from 'classnames';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Card, { CardBody } from '../../../components/bootstrap/Card';
import FormGroup from '../../../components/bootstrap/forms/FormGroup';
import Input from '../../../components/bootstrap/forms/Input';
import Button from '../../../components/bootstrap/Button';
import Logo from '../../../components/Logo';
import useDarkMode from '../../../hooks/useDarkMode';
// import { useFormik } from 'formik';
// import USERS, { getUserDataWithUsername } from '../../../common/data/userDummyData';
// import Spinner from '../../../components/bootstrap/Spinner';
// import Alert from '../../../components/bootstrap/Alert';
import { useAuth } from '../../../contexts/authContext';
import User from '../../../layout/User/User';

interface ILoginHeaderProps {
	isNewUser?: boolean;
}
const LoginHeader: FC<ILoginHeaderProps> = ({ isNewUser }) => {
	if (isNewUser) {
		return (
			<>
				<div className='text-center h1 fw-bold mt-5'>Create Account,</div>
				<div className='text-center h4 text-muted mb-5'>Sign up to get started!</div>
			</>
		);
	}
	return (
		<>
			<div className='text-center h1 fw-bold mt-5'>Welcome,</div>
			<div className='text-center h4 text-muted mb-5'>Sign in to continue!</div>
		</>
	);
};

interface ILoginProps {
	isSignUp?: boolean;
}
const Login: FC<ILoginProps> = ({ isSignUp }) => {
	const { darkModeStatus } = useDarkMode();

	const [signInPassword, setSignInPassword] = useState<boolean>(false);
	const [singUpStatus, setSingUpStatus] = useState<boolean>(!!isSignUp);

	const navigate = useNavigate();
	const handleOnClick = useCallback(() => navigate('/'), [navigate]);

	// const usernameCheck = (username: string) => {
	// 	return !!getUserDataWithUsername(username);
	// };

	// const passwordCheck = (username: string, password: string) => {
	// 	return getUserDataWithUsername(username).password === password;
	// };

	// const formik = useFormik({
	// 	enableReinitialize: true,
	// 	initialValues: {
	// 		loginUsername: username,
	// 		loginPassword: password,
	// 	},
	// 	validate: (values) => {
	// 		const errors: { loginUsername?: string; loginPassword?: string } = {};

	// 		if (!values.loginUsername) {
	// 			errors.loginUsername = 'Required';
	// 		}

	// 		if (!values.loginPassword) {
	// 			errors.loginPassword = 'Required';
	// 		}

	// 		return errors;
	// 	},
	// 	validateOnChange: false,
	// 	onSubmit: (values) => {
	// 		if (usernameCheck(values.loginUsername)) {
	// 			if (passwordCheck(values.loginUsername, values.loginPassword)) {
	// 				if (false) {
	// 					console.log('falso');
	// 				}

	// 				handleOnClick();
	// 			} else {
	// 				formik.setFieldError('loginPassword', 'Username and password do not match.');
	// 			}
	// 		}
	// 	},
	// });

	// const [isLoading, setIsLoading] = useState<boolean>(false);
	// const handleContinue = () => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		if (
	// 			!Object.keys(USERS).find(
	// 				(f) => USERS[f].username.toString() === formik.values.loginUsername,
	// 			)
	// 		) {
	// 			formik.setFieldError('loginUsername', 'No such user found in the system.');
	// 		} else {
	// 			setSignInPassword(true);
	// 		}
	// 		setIsLoading(false);
	// 	}, 1000);
	// };

	const { signup, login, logingWithGoogle } = useAuth();
	const [email, setEmail] = useState<string>('');
	const [sigEmail, setSigEmail] = useState<string>('');
	const [sigPassword, setSigPassword] = useState<string>('');
	const [passsword, setPassword] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [apellido, setApellido] = useState<string>('');

	// Authentication of section REGISTER
	const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		try {
			signup(email, passsword);
			const regexEmail =
				/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
			alert(regexEmail.test(email));

			if (email === '' || passsword === '') {
				alert('Campos Vacios');
				navigate('/auth-pages/login');
			} else navigate('/summary');
		} catch (erro) {
			console.log('Error');
		}
	};
	// Authentication of section LOGIN
	const handleLogin = (event: React.ChangeEvent<HTMLFormElement>): void => {
		event.preventDefault();
		try {
			login(sigEmail, sigPassword);
			console.log(User);
			if (sigEmail !== '@gmai' || sigPassword !== 'password') {
				alert('no se encuentra usuario');
				navigate('/auth-pages/login');
			} else navigate('/summary');
		} catch (erro) {
			console.log('Error');
		}
	};
	// Athentication of section LOGIN-GOOGLE
	const handleGoogleSignin = async () => {
		try {
			await logingWithGoogle();
			navigate('/summary');
		} catch (erro) {
			console.log('Error');
		}
	};
	// Athentication of section LOGIN-FACEBOOK
	return (
		<PageWrapper
			isProtected={false}
			title={singUpStatus ? 'Sign Up' : 'Login'}
			className={classNames({ 'bg-warning': !singUpStatus, 'bg-info': singUpStatus })}>
			<Page className='p-0'>
				<div className='row h-100 align-items-center justify-content-center'>
					<div className='col-xl-4 col-lg-6 col-md-8 shadow-3d-container'>
						<Card className='shadow-3d-dark' data-tour='login-page'>
							<CardBody>
								<div className='text-center my-5'>
									<Link
										to='/'
										className={classNames(
											'text-decoration-none  fw-bold display-2',
											{
												'text-dark': !darkModeStatus,
												'text-light': darkModeStatus,
											},
										)}>
										<Logo width={200} />
									</Link>
								</div>
								<div
									className={classNames('rounded-3', {
										'bg-l10-dark': !darkModeStatus,
										'bg-dark': darkModeStatus,
									})}>
									<div className='row row-cols-2 g-3 pb-3 px-3 mt-0'>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Login
											</Button>
										</div>
										<div className='col'>
											<Button
												color={darkModeStatus ? 'light' : 'dark'}
												isLight={!singUpStatus}
												className='rounded-1 w-100'
												size='lg'
												onClick={() => {
													setSignInPassword(false);
													setSingUpStatus(!singUpStatus);
												}}>
												Sign Up
											</Button>
										</div>
									</div>
								</div>

								<LoginHeader isNewUser={singUpStatus} />

								{/* <Alert isLight icon='Lock' isDismissible>
									<div className='row'>
										<div className='col-12'>
											<strong>Username:</strong> {USERS.JOHN.username}
										</div>
										<div className='col-12'>
											<strong>Password:</strong> {USERS.JOHN.password}
										</div>
									</div>
								</Alert> */}
								<form className='row g-4' onSubmit={handleSubmit}>
									{singUpStatus ? (
										<>
											<div className='col-12'>
												<FormGroup
													id='signup-email'
													isFloating
													label='Your email'>
													<Input
														type='email'
														id='signup_email'
														autoComplete='email'
														name='email'
														value={email}
														onChange={(
															event: React.ChangeEvent<HTMLInputElement>,
														) => setEmail(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-name'
													isFloating
													label='Your name'>
													<Input
														autoComplete='given-name'
														name='name'
														value={name}
														onChange={(
															event: React.ChangeEvent<HTMLFormElement>,
														) => setName(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-surname'
													isFloating
													label='Your surname'>
													<Input
														autoComplete='family-name'
														name='apellido'
														value={apellido}
														onChange={(
															event: React.ChangeEvent<HTMLFormElement>,
														) => setApellido(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='signup-password'
													isFloating
													label='Password'>
													<Input
														type='password'
														autoComplete='password'
														value={passsword}
														onChange={(
															event: React.ChangeEvent<HTMLInputElement>,
														) => setPassword(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<Button
													color='info'
													className='w-100 py-3'
													type='submit'>
													Sign Up
												</Button>
											</div>
										</>
									) : (
										<>
											<div className='col-12'>
												<FormGroup
													id='loginUsername'
													isFloating
													label='Your email or username'>
													<Input
														autoComplete='username'
														value={sigEmail}
														onChange={(
															event: React.ChangeEvent<HTMLInputElement>,
														) => setSigEmail(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<FormGroup
													id='loginPassword'
													isFloating
													label='Password'>
													<Input
														type='password'
														autoComplete='current-password'
														value={sigPassword}
														onChange={(
															event: React.ChangeEvent<HTMLInputElement>,
														) => setSigPassword(event.target.value)}
													/>
												</FormGroup>
											</div>
											<div className='col-12'>
												<Button
													color='warning'
													className='w-100 py-3'
													onClick={handleLogin}>
													Login
												</Button>
											</div>
										</>
									)}
									{/* BEGIN :: Social Login */}
									{!signInPassword && (
										<>
											<div className='col-12 mt-3 text-center text-muted'>
												OR
											</div>
											<div className='col-12 mt-3'>
												<Button
													isOutline
													color={darkModeStatus ? 'light' : 'dark'}
													className={classNames('w-100 py-3', {
														'border-light': !darkModeStatus,
														'border-dark': darkModeStatus,
													})}
													icon='CustomFacebook'
													onClick={handleOnClick}>
													Sign in with Facebook
												</Button>
											</div>
											<div className='col-12'>
												<Button
													isOutline
													color={darkModeStatus ? 'light' : 'dark'}
													className={classNames('w-100 py-3', {
														'border-light': !darkModeStatus,
														'border-dark': darkModeStatus,
													})}
													icon='CustomGoogle'
													onClick={handleGoogleSignin}>
													Continue with Google
												</Button>
											</div>
										</>
									)}
									{/* END :: Social Login */}
								</form>
							</CardBody>
						</Card>
						<div className='text-center'>
							<a
								href='/'
								className={classNames('text-decoration-none me-3', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Privacy policy
							</a>
							<a
								href='/'
								className={classNames('link-light text-decoration-none', {
									'link-light': singUpStatus,
									'link-dark': !singUpStatus,
								})}>
								Terms of use
							</a>
						</div>
					</div>
				</div>
			</Page>
		</PageWrapper>
	);
};
Login.propTypes = {
	isSignUp: PropTypes.bool,
};
Login.defaultProps = {
	isSignUp: true,
};

export default Login;
