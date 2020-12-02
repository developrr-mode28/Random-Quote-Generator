let quotes = [
   {
       name: 'Barack Obama',
       quote: '" Abraham Lincoln and Millard Fillmore had the same title. They were both presidents of the United States, but their tenure in office and their legacy could not be more different. "'
   },
   {
       name: 'Ronald Reagan',
       quote: '" Abortion is advocated only by persons who have themselves been born. "'
   },
   {
       name: 'Kahli Gibran',
       quote: '" The deeper sorrow carves into your being the more joy you can contain. "'

   },
   {
       name: 'Malcom X',
       quote: '" Be peaceful, be courteous, obey the law, respect everyone; but if someone puts his hand on you, send him to the cemetery. "'
   },
   {
       name: 'David Peterson',
       quote: '" If you don\'t know what to do, call the media and at least give the appearance of doing something. "'
   }
];

const btn = document.querySelector('.btn');
const quote = document.querySelector('#quote');
const name = document.querySelector('.name');
// console.log(quoteGenerator);

btn.addEventListener('click', displayQuote);
    function displayQuote() {
        let number = Math.floor(Math.random()*quotes.length);
            quote.innerHTML = quotes[number].quote;
            name.innerHTML = quotes[number].name;
        // console.log(number);
    }
