class BookLibrary{
    addToDb(){
        let name=bk_name.value;
        let author=bk_author.value;
        let price=bk_price;
        let copies=bk_copies;
        let newbook={
            name,
            author,
            price,
            copies
        }
        console.log(newbook);
        // localStorage.setItem(name,JSON.stringify(newbook))
        // alert("book has been added")
    }
    findBook(){
        
    }
}

var book=new BookLibrary()