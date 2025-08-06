import fetch from 'node-fetch';

const url = 'https://mantra-microservice.onrender.com/mantra';

async function testMicroservice() {
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (resp.ok) {
        const data = await resp.json();
        console.log("Microservice responsed with: ");
        console.log(data);
    }
}

testMicroservice()