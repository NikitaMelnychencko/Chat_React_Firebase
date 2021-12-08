import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { auth, user, userId } from './Init';

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
  return signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      //   swetchClass();
      //   addClass();
      if (localStorage.getItem('idFilm') !== null) {
        // updateButton(localStorage.getItem('idFilm'));
      }
      return userCredential.user;
    })
    .catch(error => {
      const errorMessage = error.message;
      //   signInErrorTextRender(errorMessage);
    });
}

export function updateInUser(name) {
  return updateProfile(auth.currentUser, {
    displayName: `${name}`,
  });
}

export async function signOutUser() {
  return await signOut(auth).then(() => {
    // Sign-out successful.
    userId = null;
    sessionStorage.removeItem('userId');
    // swetchClass();
  });
}

// State User
export async function AuthState(user) {
  return await onAuthStateChanged(auth, user => {
    if (user) {
      userId = user.uid;
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
