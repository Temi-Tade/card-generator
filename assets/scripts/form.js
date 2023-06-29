user_details.addEventListener("submit", (e) => {
    e.preventDefault();
    let arr = []
    for (let i of [...fieldsElement.querySelectorAll("input")]){
        if (i.value.trim() === "") {
            arr.push(i.placeholder)
            valMsgElement.innerHTML = `This is how your card will look like when it is downloaded. The following fields are empty, please fill them if necessary: <strong><em>${arr.join(", ")}</em></strong>`
        }
    }

    createCard(document.querySelector("#passport"))
}) 