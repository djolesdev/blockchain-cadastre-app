export class RealEstate {
  id: number
  municipalityNum: number;
  squareFootage: number;
  addres: string;

  constructor(id: number,municipalityNum: number, squareFootage: number, addres: string) {
   this.id = id
    this.municipalityNum = municipalityNum;
    this.squareFootage = squareFootage;
    this.addres = addres
  }
}
