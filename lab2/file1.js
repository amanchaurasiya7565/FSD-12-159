import { appendFile } from "fs/promises";
import { writeFile } from "fs/promises";
import { readFile } from "fs/promises";
// await writeFile("fello.txt", "JS is easy");

// await appendFile("fello.txt", "\n fs is much easy than others");
// await appendFile("fello.txt", "\n Aman Chaurasya");
const content = await readFile("fello.txt", "utf-8");
console.log(content);
await appendFile("fello.txt", "\n😊");
