const library = {
    books: [{title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937}],
    addBook(book) {
        if(!book.title || !book.author || !book.year) {
            console.log("Book information is incomplete. Please provide title, author, and year.");
            return;
        }
        if(typeof book.year !== 'number' || book.year <= 0) {
            console.log("Invalid year. Please provide a valid publication year.");
            return;
        }
        this.books.push(book);
        console.log(`Book "${book.title}" added successfully.`);
    },
    findBookByTitle(title) {
        return this.books.find(book => book.title.toLowerCase() === title.toLowerCase());
    },
    removeBook(title) {
        const index = this.books.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

        if(index !== -1) {
            const removedBook = this.books.splice(index, 1);
            console.log(`Book "${removedBook[0].title}" removed successfully.`);
        } else {
            console.log("Book not found.");
        }
    }
};

library.addBook({author: "George Orwell", year: 1949});  // Missing title
library.addBook({title: "1984", author: "George Orwell", year: 1949});
console.log(library.findBookByTitle("1984"));
library.removeBook("Nonexistent Book");
library.removeBook("The Hobbit");
console.log(library.books.length);
