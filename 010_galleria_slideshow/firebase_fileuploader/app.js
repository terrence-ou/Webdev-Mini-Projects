const fs = require("fs");
const path = require("path");
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

const targetFolder = path.join("galleria-slideshow", "assets");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "gs://frontendmentor-hosting.appspot.com",
});

const bucket = admin.storage().bucket();
const taskFiles = [];
const sourceFolder = path.join("..", "starter-code", "assets");

// list all of the files, and store {source, target} pair into the taskFiles
fs.readdirSync(sourceFolder).forEach((folder) => {
  if (folder.charAt(0) === ".") return;
  const folderPath = path.join(sourceFolder, folder);
  fs.readdirSync(folderPath).forEach((file) => {
    const extension = file.split(".").slice(-1)[0];
    if (extension !== "jpg") return;
    const filePath = path.join(folderPath, file);
    const destPath = path.join(targetFolder, folder, file);
    taskFiles.push({ source: filePath, target: destPath });
  });
});

// upload files
taskFiles.forEach(({ source, target }) => {
  try {
    bucket.upload(source, { destination: target });
  } catch (error) {
    console.log(error);
  }
});
