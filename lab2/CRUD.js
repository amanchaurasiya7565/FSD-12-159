import  Readline  from "readline/promises";
import { stdin,stdout } from "process";

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
                console.log('show product');
                break;
            case 2:
                console.log('Product Added');
                break;
            case 3:
                console.log('Remove product');
                break;
            case 4:
                console.log('Update Product Quantity');
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