//===================== //

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '06ed79a014msh0cea3f33ddbe600p187515jsn049b261f6064',
// 		'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com'
// 	}
// };

// fetch('https://email-verifier-completely-free.p.rapidapi.com/email-verification/vfranco123456@gmail.com', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '06ed79a014msh0cea3f33ddbe600p187515jsn049b261f6064',
        'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com'
    }
};
// sdfdgsdfhgh
const form = document.getElementById('email-form');
const emailInput = document.getElementById('email');
const resultEl = document.getElementById('result');

function verifyEmail(email) {
    fetch(`https://email-verifier-completely-free.p.rapidapi.com/email-verification/${email}`, options)
        .then(response => response.json())
        .then(response => {
            if (response.status === 'valid') {
                resultEl.innerHTML = `<p>${email} is a valid email address.</p>`;
            } else {
                resultEl.innerHTML = `<p>${email} is not a valid email address.</p>`;
            }
        })
        .catch(err => console.error(err));
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const email = emailInput.value;
    verifyEmail(email);
});
