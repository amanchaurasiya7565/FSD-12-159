import { EventEmitter } from "node:events";

// DOM-> Document object Model.
const button = new EventEmitter();
button.on("click", () => {
    console.log("Button clicked ");
});
button.emit("click");
