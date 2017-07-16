import { Author } from './author';
import { Book } from './book';

export class DetailBook extends Book {

  
    constructor(title : string, price :string, author: Author, public detail : string, id : string, public isStocked :boolean, public quantityToCommand : string, public imgName : string) {
      super(title,price,author,id);
    }

}
