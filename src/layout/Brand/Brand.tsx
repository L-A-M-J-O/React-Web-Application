import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../../components/icon/Icon';
import Logo from '../../components/Logo';

interface IBrandProps {
	asideStatus: boolean;
	setAsideStatus(...args: unknown[]): unknown;
}
const Brand: FC<IBrandProps> = ({ asideStatus, setAsideStatus }) => {
	return (
		<div className='brand p-0 m-0 h-auto'>
			{/* <div className='brand-logo'>
				<h1 className='brand-title '>
					<Link to='/' aria-label='Logo'>
						<Logo height={32} />
					</Link>
				</h1>
			</div> */}
			<button
				type='button'
				className='btn brand-aside-toggle'
				aria-label='Toggle Aside'
				onClick={() => setAsideStatus(true)}>
			</button>
		</div>
	);
};
Brand.propTypes = {
	asideStatus: PropTypes.bool.isRequired,
	setAsideStatus: PropTypes.func.isRequired,
};

export default Brand;
