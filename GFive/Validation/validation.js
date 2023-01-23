const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

if (emailRegex.test(email)) {
    // email is valid
} else {
    // email is invalid
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/email', (req, res) => {
    let email = req.body.email;
    if (emailRegex.test(email)) {
        // Store email in a database or perform other actions
        res.status(200).json({ message: 'Email stored successfully' });
    } else {
        res.status(400).json({ message: 'Invalid email' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

const options = {
	method: 'PATCH',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '9a2f35e869msh65cd62d7978e300p102b7fjsncf8939428a03',
		'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
	},
	body: '{"type":"stats_notification","email_to":"example@test.com","frequency":"daily"}'
};

fetch('https://rapidprod-sendgrid-v1.p.rapidapi.com/alerts/%7Balert_id%7D', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));