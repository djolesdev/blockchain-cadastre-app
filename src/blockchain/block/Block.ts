import { Transaction } from "../transaction/Transaction";
import sha256 from "crypto-js/sha256";

export class Block {
  id: number;
  transactions: Transaction[] | any
  hash: string;
  previousHash: string;
  nonce: number;
  timeStamp: Date;

  constructor(
    id: number,
    transations: Transaction[],
    previousHash: string,
    timeStamp: Date,
    hash?: string,
  ) {
    this.id = id;
    this.transactions = transations
    this.previousHash = previousHash;
    this.nonce = 1
    this.timeStamp = timeStamp
    this.hash = hash ? hash : this.generateHash();
  }

  generateHash(): string {
    const dataToHash =
      this.id.toString() +
      JSON.stringify(this.transactions) +
      this.previousHash +
      this.nonce.toString() + this.timeStamp.toLocaleString(); 

      this.hash = sha256(dataToHash).toString()

      return sha256(dataToHash).toString();
  }

  incrementNonce(): void {
      this.nonce++;
  }
  
}
