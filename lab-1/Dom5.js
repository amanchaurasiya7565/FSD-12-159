import { EventEmitter } from "node:events";
class DomClass extends EventEmitter{
    addEventlistner(eventName, callback) {
        this.on(eventName, callback);
    }
    removeEventListner(eventName, callback) {
        this.off(eventName, callback);
    }
    dispatchEvent(eventName,eventData={})
    {
        const event = {
            type: eventName,
            timespam: new Date(),
            ...eventData,
        };
        this.emit(eventName, event);
    }
}
const button = new DomClass();
const handleClick = (event) => {
    console.log(`Button clicked type : ${event.type} at  ${event.timespam}`);
};
button.addEventlistner("click", handleClick);
button.dispatchEvent("click", {
    target: "submitBtn",

});
button.removeEventListner("click", handleClick);
button.dispatchEvent("click", {
    target: "resetBtn",
});