// Clases

class Pizza {
    public tomate: boolean = false;
    public queso: string = "";
    public bacon: boolean = false;
    public otrosIngredientes: Array<string> = [""];
    
    setTomate(): Pizza{
        this.tomate = true;
        return this;
    }

    setQueso(queso: string): Pizza{
        this.queso = queso;
        return this;
    }

    setBacon(): Pizza{
        this.bacon = true;
        return this;
    }

    setOtrosIngredientes(ingredientes: string[]): Pizza{
        this.otrosIngredientes = ingredientes
        return this;
    }

    build (){
        return this;
    }
}

const pepperoni: Pizza = new Pizza();

pepperoni
    .setBacon()
    .setQueso("mozarella")
    .setOtrosIngredientes(["pimienta", "albahaca"])
    .build();

    console.log(pepperoni);
    
