import React, {
	createContext,
	FC,
	ReactNode,
	useEffect,
	useMemo,
	useState,
	useContext,
} from 'react';
import PropTypes, { any, number, string } from 'prop-types';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth';
import { auth } from '../config/firebase';
// import { getUserDataWithUsername, IUserProps } from '../common/data/userDummyData';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';

export interface IAuthContextProps {
	signup: any;
	login: any;
	logingWithGoogle: any;
	addTask: any;
}
interface Sub {
	providerData: [];
}
const AuthContext = createContext<IAuthContextProps>({} as IAuthContextProps);

interface IAuthContextProviderProps {
	children: ReactNode;
}
export const useAuth = () => {
	const boxContext = useContext(AuthContext);
	return boxContext;
};

export const AuthContextProvider: FC<IAuthContextProviderProps> = ({ children }) => {
	const addTask = () => {
		console.log('añadir tarea');
	};
	const [user, setUser] = useState<Array<Sub>>([]);
	const signup = (email: any, password: any, name: any, lastName: any) => {
		createUserWithEmailAndPassword(auth, email, password);
	};
	const login = (email: any, password: any, name: any, lastName: any) => {
		const userCredentials = signInWithEmailAndPassword(auth, email, password);
		console.log(userCredentials);
		setUser(user);
	};
	const logingWithGoogle = () => {
		const googleProvider = new GoogleAuthProvider();
		return signInWithPopup(auth, googleProvider);
	};
	// const login google
	// const [user, setUser] = useState<string>(localStorage.getItem('facit_authUsername') || '');
	// const [userData, setUserData] = useState<Partial<IUserProps>>({});
	// useEffect(() => {
	// 	localStorage.setItem('facit_authUsername', user);
	// }, [user]);

	// useEffect(() => {
	// 	if (user !== '') {
	// 		setUserData(getUserDataWithUsername(user));
	// 	} else {
	// 		setUserData({});
	// 	}
	// }, [user]);

	// const value = useMemo(
	// 	() => ({
	// 		user,
	// 		setUser,
	// 		userData,
	// 	}),
	// 	[user, userData],
	// );
	return (
		<AuthContext.Provider
			value={{
				signup,
				login,
				logingWithGoogle,
				addTask,
			}}>
			{children}
		</AuthContext.Provider>
	);
};
AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContext;
