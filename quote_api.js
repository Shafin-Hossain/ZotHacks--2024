export default async function fetchQuote() {
    const url = "https://api.api-ninjas.com/v1/quotes?category=happiness"
    const response = await fetch(url, {method: 'GET', 
    headers: {
        "Content-Type": "application/json",
        'X-Api-Key': 'INP0PJzUD6ERMf5/PDw6OA==IcJ4mfgjulk8coWa'
    }
})
    console.log(response)
    const data = await response.json()
    console.log(data)

    return data;
}