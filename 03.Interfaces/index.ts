//Interfaces

interface IAnimal{
    name: string;
    color:string;
}

const dog:IAnimal ={
    name: "Snoopy",
    color: "White"
};

interface OnInit{
    ngOnInit(): void;
}

class MyComponet implements OnInit {
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}