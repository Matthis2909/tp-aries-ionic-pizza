export interface PizzaInterface {
    id: number;
    nom: string;
    imgPizza: string;
    prix : number;
    ingredients: Ingredient[];
}

interface Ingredient {
    nom: string;
    picto: string;
}