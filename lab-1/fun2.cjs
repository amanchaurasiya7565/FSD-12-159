const f1 = () => {
  console.log("F1");
};
const f2 = () => {
  console.log("F2");
};
const f3 = () => {
  console.log("F3");
};
function main() {
  console.log("main");
  setTimeout(f1, 0); //not wait of this function for running it pass it.
  // setInterval(f1, 1000);//it take some time t0 execuite
  setImmediate(f2);

    process.nextTick(f3);
    
  console.log("end");
}
main();
