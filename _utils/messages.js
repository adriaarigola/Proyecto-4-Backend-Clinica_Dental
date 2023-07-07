const errorMsg = {
   user: {
      CREATE: "Error creating user",
      UPDATE: "Error updating user",
      DELETE: "Error deleting user",
      GETALL: "Error retreiving all users",
      GETONE: "Error retreiving user",
      NOTFOUND: "User not found",
      PASSWORDLEN: "Password length can not be less than 5",
   },

   pagination: {
      SURPASS: "Nothing here",
   },

   token: {
      NOTFOUND: "No authorization token was found",
      INVALID: "Invalid token",
   },

   authentication: {
      NOAUTH: "Dont have permission",
      BADCREDENTIALS: "These credentials do not match our records",
      REQUIERED: "Email and Password are required",
      LOGINFAILED: "User login failed",
   },

   appointment: {
      CREATE: "Error creating appointment",
      UPDATE: "Error updating appointment",
      DELETE: "Error deleting appointment",
      GETONE: "Error retreiving appointment",
      GETALL: "Error retreiving all appointments",
   },
};

const successMsg = {
   user: {
      CREATE: "User created succsessfully",
      UPDATE: "User updated succsessfully",
      DELETE: "User deleted succsessfully",
   },

   appointment: {
      CREATE: "Appointment created sucessfully",
      UPDATE: "Appointment updated sucessfully",
      DELETE: "Appointment deleted sucessfully",
   },
};

module.exports = {
   successMsg,
   errorMsg,
};