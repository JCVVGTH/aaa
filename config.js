import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyAfcC7paHtlzt-lHzrniO9MpbM4_qdrXV8",
authDomain: "asdd-cbe99.firebaseapp.com",
projectId: "asdd-cbe99",
storageBucket: "asdd-cbe99.appspot.com",
messagingSenderId: "857903555760",
appId: "1:857903555760:web:c71a6ff914838f308fc775"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();