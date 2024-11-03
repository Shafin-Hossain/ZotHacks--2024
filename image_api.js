function spaceReplace(word) {return word.split(" ").join("%20")}

export default async function fetchImage(category) {
    const url = `https://api.unsplash.com/photos/random?client_id=OguwtPs6Ef6EJHtacng6id3YXXZqMDrfGx96s_GJGOQ&query=${spaceReplace(category)}`
    const response = await fetch(url,
        {
            method: 'GET', 
            headers: {
                "Content-Type": "application/json"
        

            }

        })
        console.log(response)
   const data = await response.json()
   console.log(data)

   return data;
}