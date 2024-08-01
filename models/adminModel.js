// models/adminModel.js
class Admin {
    constructor(id, email, password, role = "admin") {
        this.id = id;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}

module.exports = Admin;
