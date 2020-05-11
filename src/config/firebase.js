var admin = require("firebase-admin");

var serviceAccount = require("../firebase-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ieee-palette.firebaseio.com"
});

let db = admin.firestore();

module.exports={ db, admin }