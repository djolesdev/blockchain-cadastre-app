import { FirestoreDataConverter } from "firebase/firestore"
import { transactionConverter } from "./transaction-converter"
import { Block } from "../../blockchain/block/Block"

export const blockConverter: FirestoreDataConverter<Block> = {
    toFirestore: (block: Block) => {

        const transactions = []
        for (const transaction of block.transactions) {
            transaction.status = 'Verified'
            transactions.push(transactionConverter.toFirestore(transaction))
        }

        return {
            hash: block.hash,
            previousHash: block.previousHash,
            timeStamp: block.timeStamp,
            transactions: transactions, 
            nonce: block.nonce,

        }
    },
    
    // Ne koristi se zato sto kada se getuju podaci ne korsiti se 
    // get za custom objekte
    fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options);
        return new Block(data.id, data.transaction, data.previousHash, data.timeStamp.toDate());
    }
}
