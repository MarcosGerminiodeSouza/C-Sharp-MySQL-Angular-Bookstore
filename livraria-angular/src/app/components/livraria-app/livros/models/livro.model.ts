import { TitleStrategy } from "@angular/router"

export interface Livro {
  id?: number,
  title: string,
  author: string,
  synopsis: string,
  publisher: string,
  category: string,
  season: string,
  year: string,
  img: string,
  price: number,
  quantity: number
}
