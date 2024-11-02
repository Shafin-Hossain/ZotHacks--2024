async function fetchImage() {
    const url = "https://api.unsplash.com/photos/random?client_id=OguwtPs6Ef6EJHtacng6id3YXXZqMDrfGx96s_GJGOQ&query=japan"
    const response = await fetch(url,
        {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json"
        

            }

        })
   const data = await response.json()
   console.log(data)
}
fetchImage()