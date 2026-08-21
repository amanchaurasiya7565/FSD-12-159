import  Readline  from "readline/promises";
import { stdin, stdout } from "process";
import { readFile,writeFile } from "fs/promises";

const FILE = 'product.json'

const getCart = async () => {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
};

const saveCart = async (myCart) => {
    await writeFile(FILE, JSON.stringify(myCart, null, 2));
    
};
const addTOCart = async (product) => {
    const myCart = await getCart();
    const isFound = myCart.find((item) => item.id === product.id);
    if (isFound) {
        isFound.qty += product.qty;
    } else {
        myCart.push(product);

    }
    await saveCart(myCart);
    console.log(`product added/ updated with id ${product.id} into cart`);
};
const showCart = async () => {
    const data = await getCart();
    console.table(data);
    // let total = 0;
    //  data.forEach(item => {
    //   total += item.qty * item.price;
    // });
    // console.log("total price:", total);

    const total = data.reduce((sum, item) => sum + item.qty * item.price, 0);
    console.log("total price:", total);

};
const removefromkart = async (pid) => {
    
    const data = await getCart();
    const count = data.length;
    const newData = data.filter((item) => item.id != pid);
    const newCount = newData.length;
    if (count == newCount) {
        console.log(`Product with id ${pid} not find`);
    }
    else {
        await saveCart(newData);
        console.log(`product with id ${pid} deleted successfully`);
        
    }
    
};


const updateCart = async (pid, value) => {
    const data = await getCart();
    const isFound = data.find((item) => item.id === pid);
    if (isFound) {
        isFound.qty += value;
        await saveCart(data);
        console.log("Product quantity updated successfully");

    }
    else {
        console.log("Product id not found");
    }
};
const main = async() => {
    let choice;
    const cin = Readline.createInterface({ input: stdin, output: stdout });
    do {
    console.log("Welcome to flipkart 🕸️");
    console.log('1.........Show Cart');
    console.log('2.........Add Product');
    console.log('3.........Remove Product');
    console.log('4.........Update quantity');
    console.log('5.........Exit');
        choice = await cin.question("Enter your choice :");
        switch (Number(choice)) {
            case 1:
                await showCart();
                break;
            case 2:
                let data = await cin.question("Enter id, name, price ,qty :");
                const [id, name, price, qty] = data.split(',').map((item) => item.trim());
                const product = {
                    id: Number(id),
                    name,
                    price: Number(price),
                    qty: Number(qty),
                };
                await addTOCart(product);
                break;
            
            case 3:
                let pid =await cin.question("Enter product id:");
                
                await removefromkart(Number(pid));
                break;
            case 4:
                let pid2 = await cin.question("Enter product id to update");
                let value = await cin.question(" +1 increase ,-1 decrease ");
                
               await updateCart(Number(pid),Number(value));
                break;
            case 5:
                console.log('See you later');
                break;
            default:
                console.log("Invalid choice try again 😒");
        }
    }
    while(choice!=5){
        cin.close();
    }
    
    
    
};
main();