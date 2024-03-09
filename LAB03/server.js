// connect module
const connect = require('connect'); 

// url module
const url = require('url');

const calculate = (url) => {
    // parsing the url
    const params = new URLSearchParams(url.search);
    const method = params.get('method');
    const x = Number(params.get('x'));
    const y = Number(params.get('y'));

    //Run operation based on the method 
    switch (method) {
        case 'add':
            return `${x} + ${y} = ${x + y}`;
        case 'subtract':
            return `${x} - ${y} = ${x - y}`;
        case 'multiply':
            return `${x} * ${y} = ${x * y}`;
        case 'divide':
            return `${x} / ${y} = ${x / y}`;
        default:
            return 'Invalid parameter.';
    }
};

//connect to server
const app = connect ();

//defining middleware function
app.use ((req, res, next) => {

    if (req.url === '/lab03') {
    //this will calculate the result based on URL params
    const result = calculate(url.parse (req.url, true));

    //displaying the result 
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.write(result);
    res.end();
    } else {
        next ();
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});