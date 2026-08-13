import { mkdir,rm } from "fs/promises";
//create recursive directory.
// await mkdir('uploads/resume', { recursive: true });
// //create sinle directory. 
// await mkdir("uploads/images");

//remove directory
await rm("uploads", { recursive: true });