import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'


import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBNQY4oGZX6Jdu4VQX_fb9nRsnpT6sJAXs",
  authDomain: "ceramicas-store.firebaseapp.com",
  projectId: "ceramicas-store",
  storageBucket: "ceramicas-store.appspot.com",
  messagingSenderId: "948028739202",
  appId: "1:948028739202:web:f89f8a2fe4cbcbbe8f2e9b",
  measurementId: "G-V8YVQBVMZ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
  
)
