import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyB9rVQMvbPYWBgN_UI43nLcOkzS8sQ38fw",
  authDomain: "portfolio-a5118.firebaseapp.com",
  databaseURL: "https://portfolio-a5118.firebaseio.com",
  projectId: "portfolio-a5118",
  storageBucket: "portfolio-a5118.appspot.com",
  messagingSenderId: "284314441397",
  appId: "1:284314441397:web:095dc8cff888607ff3d0fc",
  measurementId: "G-W8298JL8MK",
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
