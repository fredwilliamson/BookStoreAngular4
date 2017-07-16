/**
 * New typescript file
 */
import { Author } from './author';
export class Book{
  
  constructor(private title : string,private price :string,private author: Author,private id : string){
  }

}