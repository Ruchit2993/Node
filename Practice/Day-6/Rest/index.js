const express = require('express')
const fs = require('fs')
const users = require('./MOCK_DATA.json')
const { error } = require('console')
const cors = require('cors')

const app = express()
const port = 8000

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// app.use(cors({
//     methods: ['GET']
// }));
app.use(cors({
    methods: ['POST', 'PATCH', 'DELETE']
}));


app.use((req, res, next) => {
    console.log("Hellow form the Middleware 1");
    req.myUserName= "Ruchit.Pitaliya"
    fs.appendFile('log.txt',`\n ${Date.now()}: ${req.ip}: ${req.method}: ${req.path}`, (error,data)=>{
        next();
    });
    next();
});
app.use((req, res, next) => {
    console.log("Hellow form the Middleware 2 ", req.myUserName);
    console.log(`${req.ip}: ${req.method}: ${req.path}: ${res.statusCode}`);
    next();
});


app.get('/users', (req, res) => {
    const html = `
    <ul>
    ${users.map(users => `<li>${users.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
        return res.status(404).json({ errorf: "User Not Found" });
    }
    return res.json(user);
});

app.get('/api/users', (req, res) => {
    return res.json(users);
})

// app.patch('/api/users/:id', (req, res) => {
//     //TODO: Edit the user with user id
//     return res.json({ Status: "Pending" });
// });

app.patch("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const body = req.body;

    let user = users.find(u => u.id === parseInt(id));
    if (!user) {
        return res.status(404).json({ Status: "User Not Found" });
    }
    Object.assign(user, body);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Success", user });
});

// app.delete('/api/users/:id', (req, res) => {
//     //TODO: delete the user with user id
//     return res.json({ Status: "Pending" });
// });

app.delete("/api/users/:id", (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(404).json({ Status: "User Not Found" });
    }

    const deletedUser = users.splice(userIndex, 1);

    fs.writeFileSync("./MOCK_DATA.json", JSON.stringify(users, null, 2));
    return res.json({ Status: "Deleted", user: deletedUser[0] });
});

app.post('/api/users', (req, res) => {

    const body = req.body;

    if(!body||!body.first_name||!body.last_name||!body.email||!body.gender||!body.job_title){
        return res.status(400).json({Status:"Failed", message:"Please provide all the details"});
    }


    users.push({ ...body, id: users.length + 1 });

    fs.writeFileSync('./MOCK_DATA.json', JSON.stringify(users), (error, data) => {

    });
    // console.log("body", body);
    return res.json({ Status: "Success", id: users.length });
});



// app.route('/api/users/:id')
//     .get((req, res) => {
//         const id = Number(req.params.id);
//         const user = users.find((user) => user.id === id);
//         return res.json(user);
//     })
//     .patch((req, res) => {
//         //TODO: Edit the user with user id
//         return res.json({ Ststus: "Pending" });
//     })
//     .delete((req, res) => {
//         //TODO: delete the user with user id
//         return res.json({ Ststus: "Pending" });
//     })

app.listen(port,'0.0.0.0', () => console.log(`Example app listening on port ${port}!`))