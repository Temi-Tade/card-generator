user_details.addEventListener("submit", () => {
    let arr = []
    for (let i of [...fieldsElement.querySelectorAll("input")]){
        if (i.value.trim() === "") {
            arr.push(i.placeholder)
            valMsgElement.innerHTML = `Please fill out the following fields: ${arr.join(", ")}`
        }
    }
})
