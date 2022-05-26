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
