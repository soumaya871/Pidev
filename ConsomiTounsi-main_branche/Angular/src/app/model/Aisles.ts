import { CatType } from "../CatType"
import { Type } from "../Type"

import { Product } from "./Product"


export class Aisles{
    products: Product
    id : number
    typeaisle : Type
    categoryaisle : CatType
    capacity: number
}