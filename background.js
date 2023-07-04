// https://www.wallpaperbetter.com/ko/hd-wallpaper-zqxbj

const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

// Math객체를 사용하여 images를 랜덤하게 추출합니다.
const chosenImage = images[Math.floor(Math.random() * images.length)];

// createElement 속성을 사용하여 img 태그를 생성합니다.
const bgImage = document.createElement("img");
// 생성한 img 태그에 src(경로)를 지정해줍니다.
bgImage.src = `image/${chosenImage}`;

// appendChild() 속성을 통해 body에 img태그를 적용시켜줍니다.
document.body.appendChild(bgImage);