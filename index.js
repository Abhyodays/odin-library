let library = [
  {
    name:"Harry Potter",
    author:"J.K. Rowling",
    pages:556,
    readStatus:false
  }
];


function book(name,author,pages,readStatus){
  this.name = name.toString();
  this.author = author.toString();
  this.pages = pages;
  this.readStatus = readStatus;
}
const bookForm = document.querySelector('.book-form');
let bookName = document.getElementById("name");
let bookAuthor = document.getElementById("author");
let bookPages = document.getElementById("pages");
let bookStatus = document.getElementById("read-status");
let btnDelete = document.querySelectorAll(".btn-delete");
bookForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  let newBook = new book(bookName.value,bookAuthor.value,bookPages.value,bookStatus.checked);
  library.push(newBook);
  // console.log(bookName.value,bookAuthor.value,bookPages.value,bookStatus.checked);
  printLibrary();
})


const div = document.createElement('div');
const p = document.createElement('p');
const bookContainer = document.getElementsByClassName("book-container").item(0);
function printLibrary(){
  while(bookContainer.hasChildNodes()){
    bookContainer.removeChild(bookContainer.firstChild)
  }
  library.forEach((book,index) => {
    // console.log(book.name,book.author,book.pages,book.readStatus);
    const div = document.createElement('div');
    let toBeChecked = book.readStatus===true?'checked':'';
    let card = div;
    card.classList.add("card");
    card.innerHTML = `<p>Book: </p>
    <p>${book.name}</p>
    <p>Author: </p>
    <p>${book.author}</p>
    <p>Pages: </p>
    <p>${book.pages}</p>
    <label for="read-status">Read it already?</label>
    <input type="checkbox" name="readStatus" id="read-status" ${toBeChecked}>
    <input type ="button" class="btn-delete" value="Delete" data-key=${index} onClick = deleteCard(${index})> `;
    
    bookContainer.append(card);
  }) 
}
function deleteCard(index){
  delete library[index];
  printLibrary();
}

printLibrary();


