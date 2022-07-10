let quote = document.querySelector("quote");
let upper = document.querySelector("upper");
let text = document.getElementById("text");
let btn = document.getElementById("btn");



btn.addEventListener('click', (e) => {
    getQuote();
  });



const getQuote = async () => {
    const url = `https://api.quotable.io/random`;
    const response = await fetch(url);
    const data = await response.json();
    //  console.log(data);
     change(data);

}
const change = (data)=>{
  text.innerHTML = 
  ` <p>${data.content}</p>
    <p>Author - ${data.author}</p>
  `
}