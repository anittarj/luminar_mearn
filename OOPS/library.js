findBook(book_name){
    if (book_name in this.books) {
        let book = this.books[book_name]
        if (book.avl_copies > 0) {
            console.log(book);
        }
        else {
            console.log("book is not available");
        }
    }
    else {
        console.log("book does not exist");
    }
}

getsold(){
    let copies_sold_history = []
    for (let sold in this.books) {
        copies_sold_history.push(this.books[sold].copies_sold)
    }
    return copies_sold_history

filterBook(){
    let soldhis = this.getsold()
    soldhis((book1, book2) => book1 - book2)
    console.log(soldhis);
}
}