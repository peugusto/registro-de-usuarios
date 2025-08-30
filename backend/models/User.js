import db from "../util/database.js";

export default class User {
  constructor(firstname, lastname, email, phone) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
  }

  async save() {
    await db.execute('INSERT INTO user (firstname,lastname,phone,email) values(?,?,?,?)',
      [
       this.firstname,
       this.lastname,
       this.phone?.trim() ? this.phone : null, 
       this.email?.trim() ? this.email : null
      ]
    )
    console.log('Usuario salvo no banco de dados!')
  }

  updateUser({ firstname, lastname, email, phone }) {
    if (firstname !== undefined) this.firstname = firstname;
    if (email !== undefined) this.email = email;
    if (phone !== undefined) this.phone = phone;
    if (lastname !== undefined) this.lastname = lastname;
  }

  getUser() {
    return this;
  }
}
