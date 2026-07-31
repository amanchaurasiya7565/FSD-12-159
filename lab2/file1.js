import { appendFile } from "fs/promises";
import { writeFile } from "fs/promises";
// await writeFile("fello.txt", "JS is eaay");
// await writeFile("fello.txt", "My name is");
await appendFile("fello.txt", "\n fs is much easy than others");
