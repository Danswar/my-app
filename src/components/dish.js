import React, {Component} from "react";

class Dish extends Component{
    render(){
        return(
            <div>
                <h1>Platillo</h1>
                <Ingredient></Ingredient>
            </div>   
        )
    }
}

export class Flag extends Component{
    render(){
        return(
            <div>
                <h1>Bandera</h1>
            </div>   
        )
    }
}

export class Ingredient extends Component{
    render(){
        return(
            <div>
                <h1>Ingrediente</h1>
            </div>   
        )
    }
}

export default Dish;