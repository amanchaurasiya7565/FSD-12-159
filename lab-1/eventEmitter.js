import { EventEmitter } from "node:events";

const login = (name) => {
    console.log(`${name} logged in`);
};
const start = () => {
    console.log("system start ")
};
const working = (name) => {
    console.log(`${name} add items to cart `);
};
const checkout = (name) => {
    console.log(`${name} logged out `);
};

const task = new EventEmitter();
task.once("greeting", start);
task.on("greeting", login);
task.on("greeting", working);
task.on("greeting", checkout);
task.once("exit", () => {
    console.log("shutting down");
});
task.emit("greeting", "Mayank bansal");
task.emit("greeting", "Aman chaurasiya");
task.off("greeting", working);
task.emit("greeting", "MN chaurasiya");
task.emit("exit", "manager");


