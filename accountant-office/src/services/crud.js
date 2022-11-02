import { database } from '../config/firebase';
import { ref, set, push, get, update, remove } from 'firebase/database';
import { onChildAdded, onChildChanged, onChildRemoved, onValue } from 'firebase/database';
/* Create */
export function createNewData(endpoint, dataObject) {
  const refData = ref(database, endpoint);
  const newRefData = push(refData);
  return set(newRefData, dataObject);
}
/* Read */
export function readData(endpoint, key) {
  if (key) {
    // Példa: endpoint: events/-MzpS80DW3ZJdzAs_Iwg
    const refData = ref(database, `${endpoint}/${key}`);
    return get(refData);
  }
  /*ha nincs key */
  const refData = ref(database, endpoint);
  return get(refData);
}
/*Update*/
export function updateData(endpoint, key, dataObject) {
  const refData = ref(database, `${endpoint}/${key}`);
  return update(refData, dataObject);
}
/*Delete */
export function deleteData(endpoint, key) {
  const refData = ref(database, `${endpoint}/${key}`);
  return remove(refData);
}
