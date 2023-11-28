const fs = require("fs");
let folder = "public/models/";
const obj = {};
fs.readdir(folder, (err, files) => {
  files.forEach((file) => {
    if (!file.includes('.')) {
      const name = folder + file;
      const fileName = file;
      obj[file] = [];

      fs.readdir(folder + file, (err, files) => {
        files?.forEach((file) => {
          if (file.includes('.glb')) {
            const path = name;
            // const files = fs.readdirSync(path);
            // const editedFiles = files.filter(
            //   (file) => file.split(".glb").length === 2
            // );
            obj[fileName].push({ path, name: file });
          }
        });

        fs.unlink("src/assets/models.json", () => {
          fs.writeFile(
            "src/assets/models.json",
            JSON.stringify(obj),
            "utf8",
            () => { }
          );
        });
      });
      console.log(folder + file)
    }
  });
});
