import { FirestoreDataConverter } from "firebase/firestore";
import { Transaction } from "../../blockchain/transaction/Transaction";

export const transactionConverter: FirestoreDataConverter<Transaction> =  {
    toFirestore: (transaction: Transaction) => {
        return {
            hash: transaction.hash,
            status: transaction.status,
            date: transaction.timeStamp,
            user: {
                name: transaction.user.name,
                surname: transaction.user.surname,
                JMBG: transaction.user.JMBG
            },
            realEstate: {
                municipalityNum: transaction.realEstate.municipalityNum,
                squareFootage: transaction.realEstate.squareFootage,
                addres: transaction.realEstate.addres
            }
        }
    },

    // Ne koristi se zato sto kada se getuju podaci ne korsiti se 
    // get za custom objekte
    fromFirestore: (snapshot: any, options: any) => {
        const data = snapshot.data(options);
        return new Transaction(data.user, data.realEstate, data.date.toDate(), data.status);
    }
}