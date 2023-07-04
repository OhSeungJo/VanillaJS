// quotes 배열에 명언, 작가 형태로 저장합니다.
const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon",
    },
    {
        quote: "The world is a book and those who do not travel read only one page.",
        author: "Saint Augustine",
    },
    {
        quote: "Today’s special moments are tomorrow’s memories.",
        author: "Aladdin",
    },
    {
        quote: "Anyone can be anything.",
        author: "Zootopia",
    },
    {
        quote: "Do not try to be original, just try to be good.",
        author: "Paul Rand",
    },
];

// 첫 번째 span 태그를 quote에 저장합니다.
const quote = document.querySelector("#quote span:first-child");
// 두 번째 span 태그를 author에 저장합니다.
const author = document.querySelector("#quote span:last-child");
// Math 객체를 이용하여 quotes를 랜덤하게 추출합니다.
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// 첫 번째 태그에 명언을 두 번째 태그에 작가를 저장합니다.
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;