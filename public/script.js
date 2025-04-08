// Create a function that tests the post route handler [2 pts

async function newPotion() {
    try {
        const response = await fetch(base + "/create-potion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              
         })

        })}



















async function newPotion() {
    const response = await fetch("/create-potion")
    const d = response.json()
}


// Call the function [1 pt]
newPotion()
// Show us the successful POST fetch [1 pt]

