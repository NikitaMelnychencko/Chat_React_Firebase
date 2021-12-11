import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth, user } from './Init';
import App from 'App.js';

// const email = 'eosipopo@gmail.com';
// const password = '12345679';

// Reg User
export function regUser(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      //   swetchClass();
      //   addClass();
      return userCredential.user.uid;
    })
    .catch(error => {
      const errorMessage = error.message;
      //   signUpErrorRender(errorMessage);
    });
}

// Aut User
export function signInUser(email, password) {
  console.log(email);
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // App.onlineCheck();
      //   swetchClass();
      //   addClass();

      // if (localStorage.getItem('idFilm') !== null) {
      //   // updateButton(localStorage.getItem('idFilm'));
      // }
      return userCredential.user;
    })
    .catch(error => {
      const errorMessage = error.message;
      //   signInErrorTextRender(errorMessage);
    });
}

export function updateInUser(name) {
  // console.log(auth.currentUser);
  return updateProfile(auth.currentUser, {
    displayName: `${name}`,
  });
}

export async function signOutUser() {
  return await signOut(auth).then(() => {
    // Sign-out successful.
    const userId = null;
    sessionStorage.removeItem('userId');
    // App.onlineCheck();
    // swetchClass();
  });
}
// const test = new App();
// console.dir(App);
// console.log(App.onlineCheck);

// State User
export async function AuthState(user) {
  return await onAuthStateChanged(auth, user => {
    if (user) {
      const userId = user.uid;
      return sessionStorage.setItem('userId', `${userId}`);
    } else {
      return;
    }
  });
}

window.onload = function () {
  //   setTimeout(preloaderIsHided, 1500);
  //   setTimeout(preloaderDisable, 2000);
  AuthState(user);
};
