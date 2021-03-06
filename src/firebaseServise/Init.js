import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB2GhFkUipTzzgiF4QxbwvvRTipNdBzZQk',
  authDomain: 'chat-react-firebase-nande.firebaseapp.com',
  databaseURL:
    'https://chat-react-firebase-nande-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'chat-react-firebase-nande',
  storageBucket: 'chat-react-firebase-nande.appspot.com',
  messagingSenderId: '733483402422',
  appId: '1:733483402422:web:b46958be6ebde37b181217',
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase();
export const dbRef = ref(getDatabase());
export const auth = getAuth();
export const user = auth.currentUser;
export let userId = sessionStorage.getItem('userId');
