async function retryFetch(url, options, maxRetries, retryDelay) {
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                return response;
            }
        } catch (error) {
            console.error(`Error on attempt ${retries + 1}: ${error}`);
        }

        retries++;
        await new Promise(resolve => setTimeout(resolve, retryDelay));
    }

    throw new Error(`Max retries reached (${maxRetries})`);
}

// Example usage
const apiUrl = 'https://api.example.com/data';
const requestOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};
const maxRetries = 3;
const retryDelay = 1000; // milliseconds

retryFetch(apiUrl, requestOptions, maxRetries, retryDelay)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));