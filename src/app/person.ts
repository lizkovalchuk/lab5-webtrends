export class Person {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;

    /*
    getAge(){

        let today: Date = new Date();
        let age = today.getFullYear() - this.dateOfBirth.getFullYear();

        if( this.dateOfBirth.getDate() > today.getDate()
            &&
            this.dateOfBirth.getMonth() > today.getMonth()
        ) {
            age--;
        }
        return age;
    }
    */
}
