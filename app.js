//Задача 1
for (let a = 0; a < 11; a++) {
    if (a == 0) {
        console.log("This is", 0);
    } else if (a % 2 == 0) {
        console.log("This number is even", a);
    } else if (a % 2 != 0) {
        console.log("This number is not even", a);
    }
}
//Задача 2
const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, //вывести это число
            },
        },
        {
            userId: 5, //вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};
console.log(post.author);
console.log(post.comments[1].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Задача 3
const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(NewPrice => {
    NewPrice.price = NewPrice.price - NewPrice.price * 0.15;
})

console.log(products);
//Задача 4
const product = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];
const result = product.filter(product => product.photos && product.photos.length>0);
console.log(result)

const res = product.sort(function (a, b) {
    if (a.price > b.price) {
      return 1;
    }
    if (a.price < b.price) {
      return -1;
    }
    return 0;
  });
console.log(res);
//Задание 5
for (let x = 'x'; x.length<=20; x +="x") {
    console.log(x);
}