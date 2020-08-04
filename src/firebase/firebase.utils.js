import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBEuZL82Lwm3P0rP5dY7Nbz1O7kiYU2UX0",
  authDomain: "resume-53e81.firebaseapp.com",
  databaseURL: "https://resume-53e81.firebaseio.com",
  projectId: "resume-53e81",
  storageBucket: "resume-53e81.appspot.com",
  messagingSenderId: "821173174023",
  appId: "1:821173174023:web:1ed9c237a09e197b9f8fa2",
  measurementId: "G-5849VKHNPK",
};

export const createClient = async ({ name, email, phone, message }) => {
  const contactRef = firestore.collection(`Client`);
  console.log(contactRef);
  contactRef.add({
    name,
    email,
    phone,
    message,
  });
};
export const convertClientSnapShotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { name, email, phone, message } = doc.data(); //...allprops
    return {
      id: doc.id,
      name,
      email,
      phone,
      message,
      //...allprops
    };
  });
  return transformedCollection;
};

export const deleteClient = (id) => {
  firestore
    .collection("Client")
    .doc(id)
    .delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
};

firebase.initializeApp(config);
export const firestore = firebase.firestore();
export default firebase;
