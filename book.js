console.log("Book names");
let books={
   title:["Happiness near me","Angry inside you","see your soul"],
   Author:["shreya","robert cruise","charles bob"],
   price:[578,674,500]
};
let jsonString=JSON.stringify(books);
console.log(jsonString);
let parsedObj=JSON.parse(jsonString);
console.log("Parsed Object",parsedObj);
fetch("https://jsonplaceholder.typicode.com/posts/1")
   .then(response => response.json())
   .then(data => console.log("Fetched Data:",data))
   .catch(error => console.error("Error:",error));

