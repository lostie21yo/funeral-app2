const fs = require("fs");
let folder = "public/models/";
const obj = {};
fs.readdir(folder, (err, files) => {
  files.forEach((file) => {
    if (!file.includes('.')) {
      const name = folder + file;
      const fileName = file;
      obj[fileName] = [];
      fs.readdir(folder + file, (err, files) => {
        files?.forEach((file) => {
          if (!file.includes('.')) {
            const path = name + "/" + file;
            const files = fs.readdirSync(path);
            const editedFiles = files.filter(
              (file) => file.split(".glb").length === 2
            );

            obj[fileName].push({ path, name: editedFiles[0] });
          }
        });
        fs.unlink("src/assets/models.json", () => {
          fs.writeFile(
            "src/assets/models.json",
            JSON.stringify(obj),
            "utf8",
            () => {
              console.log("SUCCESS");
            }
          );
        });
      });
    }
  });
});
