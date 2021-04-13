//Types
const framework: string = "Angular";
const isProduction: boolean = true;
const PORT:Number = 3000;
const styles: Array<string> = ["./css/styles.css", ""]
const sayHello: Function = (name: string):string => `Hello ${name}`;

const valor:string = sayHello("Laura!");
console.log(valor);
