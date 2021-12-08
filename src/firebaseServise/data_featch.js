import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from 'firebase/database';
import { db, dbRef } from './Init';

//getId
// export async function getIdUser(userId, store, id) {
//   return await get(child(dbRef, 'users/' + userId + '/' + store + '/' + id))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         return snapshot.val();
//       } else {
//         return null;
//       }
//     })
//     .catch(error => {
//       console.error(error);
//     });
// }

// get
export async function getUser() {
  let value = await get(child(dbRef, 'message/'))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        return null;
      }
    })
    .catch();
  let arr = [];
  console.log(arr);
  for (let key in value) {
    arr.push(value[key]);
  }
  return arr;
}
const test = getUser();
test.then(data => console.log(data));
// Post
export async function postUserData(userId, idMess, markupMess) {
  if (userId === null) {
    return;
  }
  return await set(ref(db, 'message/' + userId + idMess), markupMess);
}

// //delete
// export async function deleteData(userId, store, idFilm) {
//   return await remove(ref(db, 'users/' + userId + '/' + store + '/' + idFilm));
// }

// function signInErrorTextRender(errorMessage) {
//   let errorText = '0';

//   if (errorMessage === 'Firebase: Error (auth/user-not-found).') {
//     errorText = 'User not found';
//   } else if (errorMessage === 'Firebase: Error (auth/wrong-password).') {
//     errorText = 'Wrong password';
//   } else if (
//     errorMessage ===
//     'Firebase: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later. (auth/too-many-requests).'
//   ) {
//     errorText = 'Too many attempts';
//   } else {
//     errorText = 'Unknow Error';
//   }
//   renderError(refs.modalSinInError, errorText);
// }

// function signUpErrorRender(errorMessage) {
//   let errorText = '0';

//   if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
//     errorText = 'User is already registered';
//   } else {
//     errorText = 'Unknow Error';
//   }
//   renderError(refs.modalSinUpError, errorText);
// }

// function renderError(ref, errorText) {
//   ref.classList.remove('modal__error--hidden');
//   ref.innerHTML = `<p class="modal__error-text">${errorText}</p>`;
// }
