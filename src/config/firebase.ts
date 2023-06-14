import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyAyKBTqO9HX9du58IWhGFOc9ARdQ3ENcZA',
	authDomain: 'f500-amigo-secreto.firebaseapp.com',
	projectId: 'f500-amigo-secreto',
	storageBucket: 'f500-amigo-secreto.appspot.com',
	messagingSenderId: '110494598971',
	appId: '1:110494598971:web:faad93747a58be5712d91e',
	measurementId: 'G-257569L3QP',
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {};
