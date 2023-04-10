
function getTricks() {
    return fetch('http://localhost:3001/api/v1/tricks')
    .then(response => response.json())
}

function postTrick(trick) {
    console.log(trick)
    return fetch('http://localhost:3001/api/v1/tricks', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(trick)
    })

}

function removeTrick(trick) {
    return fetch(`http://localhost:3001/api/v1/tricks/${trick.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    })
}


export {getTricks, postTrick, removeTrick}