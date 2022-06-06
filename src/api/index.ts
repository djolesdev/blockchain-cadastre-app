import firebase, { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  doc,
  setDoc,
  deleteDoc,
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";
import { Transaction } from "../blockchain/transaction/Transaction";
import { transactionConverter } from "./converters/transaction-converter";
import { Block } from "../blockchain/block/Block";
import { blockConverter } from "./converters/block-converter";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  measurementId: process.env.REACT_APP_measurementId,
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const db = getFirestore();

export const addTransactionToPool = async (transaction: Transaction) => {
  const ref = doc(db, "pool", `${transaction.hash}`).withConverter(
    transactionConverter
  );
  await setDoc(ref, transaction);
};

export const addToBlockchain = async (block: Block) => {
  console.log('dodajem block')
  const ref = doc(db, "blocks", `${block.id}`).withConverter(
    blockConverter
  );
  await setDoc(ref, block);
};

export const removeTransactionFromPool = async (hash: string) => {
  await deleteDoc(doc(db, "pool", `${hash}`));
};

export const getPool = async () => {
  const q = query(collection(db, "pool"));
  const querySnapshot = await getDocs(q);

  const arr: Transaction[] = [];

  querySnapshot.forEach((doc) => {
    arr.push(
      new Transaction(
        doc.data().user,
        doc.data().realEstate,
        doc.data().date.toDate(),
        doc.data().hash,
        doc.data().status
      )
    );
  });

  return arr;
};


export const getLastBlockData = async () => {
  const q = query(collection(db, 'blocks'), orderBy("timeStamp", "desc"), limit(1))

  const querySnapshot = await getDocs(q)

  let blockData: any = []

  querySnapshot.forEach((block) => {
    blockData.push(block.data().hash)
    blockData.push(block.id)
    
  })
  return blockData
  
};
