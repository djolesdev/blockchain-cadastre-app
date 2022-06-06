import { User } from "../models/User";
import { RealEstate } from "../models/RealEstate";
import sha256 from 'crypto-js/sha256';

export class Transaction {
  user: User;
  realEstate: RealEstate;
  hash: string;
  status: string
  timeStamp: Date

  constructor(
    user: User,
    realEstate: RealEstate,
    timeStamp: Date,
    hash?: string,
    status?: string,
  ) {
    this.user = user;
    this.realEstate = realEstate;
    
    if (status) {
      this.status = status
    } else {
      this.status = "Pending"
    }

    this.status = 'Pending'
    this.timeStamp = timeStamp;
    // potencijalan problem 
    this.hash = hash ? hash : sha256(JSON.stringify(user) + JSON.stringify(realEstate)).toString()
    // this.status = 'Pending';
  }


}