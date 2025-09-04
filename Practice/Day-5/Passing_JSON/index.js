const http = require('http');
const fs = require('fs');
// const { url } = require('inspector');
const url = require('url')


const myserver = http.createServer((req, res) => {
    console.log("New Request Recived: ")
    // console.log(req.headers)
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.url}   New req res \n`
    const myurl = url.parse(req.url, true);
    // console.log(myurl)
    fs.appendFile('log.txt', log, (err, data) => {
        switch (myurl.pathname) {
            case '/': res.end("Home page ");
                break;
            case '/about':
                const username = myurl.query.name;
                // res.end("About page ")
                res.end(`hi, ${username}`)
                break;
            case '/contact': res.end("contact page ")
                break;
            case '/{"hi":""hi"}': res.end("Json Page ")
                break;
            case '/search':
                const search = myurl.query.search_query;
                console.log(search)
                // res.end("here waht you searching: ",  + search)
                res.end(`here what you searching: ${search}`)
                break;
            default:
                res.end("404 Not found")
        }

        // res.end("Hello From the server logs:  ")
    });
    // res.end("Hello From the server:  ")
});

myserver.listen(8000, () => console.log("Started server: "))