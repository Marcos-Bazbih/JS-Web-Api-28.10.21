//! const asyncTodos = async () => {
//!     try {
//!         return await fetch('https://jsonplaceholder.typicode.com/todos')
//!             .then(response => response.json())
//!             .then(res => console.log(res));
//!     }
//!     catch (err) {
//!         console.log(err);
//!     }
//! }
//! asyncTodos();



// *********************************__1__***************************************
//!    1.	צרו פונקציה אסיכרונית שמדפיסה ללוג את כל הפוסטים מה API.

// const asyncPosts = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(Response => Response.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncPosts();
// *********************************__1__***************************************



// *********************************__2__***************************************
//!    2.	צרו פונקציה אסיכרונית שמדפיסה ללוג את כל התגובות מה API.

// const asyncComments = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/comments')
//             .then(Response => Response.json())
//             .then(res => console.log(res))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// asyncComments();
// *********************************__2__***************************************



// *********************************__3__***************************************
//!    3.	צרו פונקציה אסיכרונית שמדפיסה ללוג את הפוסט החמישי מה API.

// const asyncPostFive = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/posts/5')
//             .then(Response => Response.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncPostFive()
// *********************************__3__***************************************



// *********************************__4__***************************************
//!    4.	צרו פונקציה אסיכרונית שמדפיסה ללוג את התגובה התשיעית מה API.

// const asyncCommentNine = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/comments/9')
//             .then(response => response.json())
//             .then(res => console.log(res));
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncCommentNine();
// *********************************__4__***************************************



// *********************************__5__***************************************
//!    5.	צרו פונקציה אסיכרונית שמדפיסה ללוג את כל האלבומים מה API.

// const asyncAlbums = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums')
//             .then(response => response.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAlbums();
// *********************************__5__***************************************



// *********************************__6__***************************************
//!    6.	צרו פונקציה אסיכרונית שמדפיסה למסך את האלבום השני מה API.

// const asyncAlbumTwo = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums/2')
//             .then(response => response.json())
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAlbumTwo()
//     .then((res) => {
//         for (let key in res) {
//             apiSection.innerHTML += `<p>${key} - ${res[key]}</p>`
//         }
//     })
// *********************************__6__***************************************



// *********************************__7__***************************************
//!    7.	צרו פונקציה אסיכרונית שמדפיסה למסך את כל המשתמשים מה API.

// const asyncUsers = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/users')
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncUsers()
//     .then(response => response.json())
//     .then((res) => {
//         for (let user of res) {
//             for (let key in user) {
//                 apiSection.innerHTML += `<p>${key} - ${user[key]}</p>`
//             }
//         }
//     })
// *********************************__7__***************************************



// *********************************__8__***************************************
//!    8.	צרו פונקציה אסיכרונית שמדפיסה למסך את המשתמש ה22 מה API.
//!    9.	הוסיפו תנאי לסעיף 8 כדי שיחשיב אובייקט ריק כשגיאה.

// const promiseUser22 = (api, userId) => {
//     return new Promise((resolve, reject) => {
//         fetch(`${api}/${userId}`)
//             .then(res => res.json())
//             .then(res => res.id ? resolve(res) : reject({ massage: "no user found" }))
//     })
// }
// const asyncUser22 = async () => {
//     try {
//         return await promiseUser22('https://jsonplaceholder.typicode.com/users', 10)
//             .then(res => console.log(res))
//     }
//     catch (err) {
//         console.log(err);
//     }
// }
// asyncUser22()
// *********************************__8__***************************************



// *********************************__10__***************************************
//!    10.	צרו פונקציה אסיכרונית ששולחת בקשת POST ל API של todos.

// const options = {
//     method: "POST"
// };

// const asyncAddTodo = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/todos', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddTodo();
// *********************************__10__***************************************



// *********************************__11__***************************************
//!    11.	צרו פונקציה אסיכרונית ששולחת בקשת POST ל API של posts.
// const options = {
//     method: "POST"
// };
// const asyncAddPost = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/posts', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddPost();
// *********************************__11__***************************************



// *********************************__12__***************************************
//!    12.	צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של albums.

// const options = {
//     method: "POST",
//     body: {
//         firstName: "Marcos",
//         lastName: "Bazbih"
//     }
// };

// const asyncAddAlbum = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/albums', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddAlbum();
// *********************************__12__***************************************



// *********************************__13__***************************************
//!    13.	צרו פונקציה אסיכרונית ששולחת בקשת POST עם אובייקט ל API של users.

// const options = {
//     method: "POST",
//     body: { name: "marcos", age: 23 }
// };

// const asyncAddUser = async () => {
//     try {
//         return await fetch('https://jsonplaceholder.typicode.com/users', options)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddUser();
// *********************************__13__***************************************



// *********************************__14__***************************************
//!    14.	צרו פונקציה אסיכרונית גנרית ששולחת בקשת POST עם אובייקט ל API.

// const options = {
//     method: "POST",
//     body: { name: "marcos", age: 23 }
// };

// const asyncAddObj = async (api, resObj) => {
//     try {
//         return await fetch(api, resObj)
//             .then(res => res.json())
//             .then(res => console.log(res))
//     } catch (err) {
//         console.log(err);
//     }
// }
// asyncAddObj('https://jsonplaceholder.typicode.com/todos', options);
// *********************************__14__***************************************



// *********************************__15__***************************************
//!    15.	צרו טופס שמקבל מהמשתמש נתונים לאובייקט לבחירתכן/ם ושלחו אותו לשרת.
//!    16.	הוסיפו אפשרות למשתמש להחליט לאן לשלוח את האובייקט.

class User {
    firstName;
    lastName;
    age;
    constructor(_firstName, _lastName, _age) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.age = _age;
    }
};

const asyncFormSendApi = async (api, resObj) => {
    try {
        return await fetch(`https://jsonplaceholder.typicode.com/${api}`, resObj)
            .then(res => res.json())
            .then(res => console.log(res))
    } catch (err) {
        console.log(err);
    }
}


form.onsubmit = (event) => {
    event.preventDefault();

    const user = new User(fNameInput.value, lNameInput.value, fNameInput.value);
    const options = {
        method: "POST",
        body: user
    };

    switch (select.value) {
        case "posts":
            asyncFormSendApi("posts", options)
            break;
        case "comments":
            asyncFormSendApi("comments", options)
            break;
        case "users":
            asyncFormSendApi("users", options)
            break;
        case "photos":
            asyncFormSendApi("photos", options)
            break;
        case "todos":
            asyncFormSendApi("todos", options)
            break;
        case "albums":
            asyncFormSendApi("albums", options)
            break;
        default:
            break;
    }
};

// *********************************__15__***************************************