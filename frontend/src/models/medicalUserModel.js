export default class medicalUserModel {
    email;
    gender;
    id;
    medicalID;
    userFullName;
    role;

    constructor(data) {
        this.email = data[0].email;
        this.gender = data[0].gender;
        this.id = data[0].id;
        this.medicalID = data[0].medicalID;
        this.userFullName = data[0].userFullName;
        this.role = data[0].role;
    }   
}