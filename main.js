class User {
    #eSalary ;
    constructor (id, userName, eSalary) {
        this.id = id ;
        this.userName = userName ;
        this.#eSalary = eSalary ;
    } ;

    getSalary() {
        return parseInt(this.#eSalary) * 0.3 ;
    }
} ;

let userOne = new User(101, 'Abdalrhmn Roston', '5000 Geneh') ;

// console.log(userOne) ;

class SubUser extends User {
    constructor(id, userName, eSalary, acss) {
        super(id, userName, eSalary) ;
        this.acss = acss ;
    } ;

} ;

let subuserOne = new SubUser(102, 'Abdalrhmn Test', '6545 Genh', 50000) ;

console.log(subuserOne) ;
console.log(subuserOne.getSalary()) ;