import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
  onChildAdded,
  push,
} from 'firebase/database';
import { db, dbRef } from './Init';

// get
// export async function getUser() {
//   let value = await get(child(dbRef, 'message/'))
//     .then(snapshot => {
//       if (snapshot.exists()) {
//         return snapshot.val();
//       } else {
//         return null;
//       }
//     })
//     .catch();
//   let arr = [];
//   console.log(arr);
//   for (let key in value) {
//     arr.push(value[key]);
//   }
//   return arr;
// }

// Post

export async function postUserData(userId, message) {
  if (userId === null) {
    return;
  }
  const postListRef = ref(db, 'message');
  const newPostRef = push(postListRef);
  console.log(newPostRef.key);
  message.key = newPostRef.key;
  return await set(newPostRef, {
    message,
  });
  //return await set(ref(db, 'message/' + userId + idMess), message);
}

//delete
export async function deleteData(idMessage) {
  return await remove(ref(db, 'message' + '/' + idMessage));
}
