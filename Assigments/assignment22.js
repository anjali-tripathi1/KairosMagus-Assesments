// Assignment22:Use The Nullish Coalescing Operator (??)There are objects in the books array that don't have the onlineContent property at all. Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

let books = [
      {title : 'History', onlineContent : null},
      {title : 'English', onlineContent : undefined},
      {title : 'Math', onlineContent : null},
]


for(let i = 0; i < books.length; i++){
      const book = books[i]
      const content = book.onlineContent ?? 'no data'
      console.log(`${book.title} provides ${content} about its online content.`)
}