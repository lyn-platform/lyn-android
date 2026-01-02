import fs from "fs";
export default function runNew(name="my-lyn-android-project"){
  console.log("Creating new project:" ,name);
    if (!fs.existsSync(name)) {
      fs.mkdirSync(name);
      console.log("Project:",name," created.");
    } else {
      console.log("Directory",name,"already exists.");
    }
}
