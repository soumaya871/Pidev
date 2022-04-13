import { Aisles } from "./Aisles";
import { Image } from "./image";

export class Product {
    id: number;
    product_name:String ;
    product_price:number;
    product_type:String;
    product_bar_code:String;
    category:String ;
    dateProd:number;
    dateExp:number;
    quantity:number;
    description:string;
    image:Image;
   
}