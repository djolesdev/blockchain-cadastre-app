import { Block } from "../block/Block";
import { Utill } from "../util/Util";
import {
  addToBlockchain,
  getLastBlockData,
  getPool,
  removeTransactionFromPool,
} from "../../api";

export class Miner {

  static mine = async () => {
    
    const pool = await getPool();

    if (pool.length < 2) return

    pool.forEach((temp) => {
      removeTransactionFromPool(temp.hash);
    });

    const [hash, id] = await getLastBlockData();

    const block: Block = new Block(
      parseInt(id) + 1,
      pool,
      hash,
      new Date()
    );

    console.log("BLOCK JE: ", block)

    while (!this.isGoldenHash(block)) {
      console.log("POKUSAJ:", block.hash)
      console.log("NONCE MU JE: ", block.nonce)
      block.incrementNonce();
      block.generateHash()
    }

    console.log("Izmajnovan block sa hashom: ", block.hash);


    console.log(block)
    console.log(id)

    addToBlockchain(block)
};

  static isGoldenHash(block: Block): boolean {
    const leadingZeros = Utill.GENESIS_HASH.substring(0, Utill.DIFFICULTY);
    return block.hash.substring(0, Utill.DIFFICULTY) === leadingZeros;
  }

}
