export class User {
    id?: number
    name: string
    surname: string
    JMBG: string

    constructor( id: number ,name: string, surname:string, JMBG: string) {
        this.id = id
        this.name = name
        this.surname = surname
        this.JMBG = JMBG
    }

}