// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDfMN3btdZnnkpyEUYF-5pzVGkawsxFKFQ',
  authDomain: 'accountant-office.firebaseapp.com',
  projectId: 'accountant-office',
  storageBucket: 'accountant-office.appspot.com',
  messagingSenderId: '981603251844',
  appId: '1:981603251844:web:a8756a9a8f37e645f174d1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
