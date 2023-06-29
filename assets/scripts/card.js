let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d") 

let createCard = (pass) => {
	previewWrap.classList.add("open")
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let imgFile = pass.files
    let loadedFile = imgFile[0]
    let f = new FileReader()
    f.onload = (ev) => {
        let img = new Image(100, 100)
        img.src = ev.target.result
        ctx.beginPath()
        ctx.drawImage(img, 140, 10, 100, 100)
        ctx.imageSmoothingEnabled = true
        ctx.closePath()
    }
    f.readAsDataURL(loadedFile)

    for (let i of [...fieldsElement.querySelectorAll("input")]) {
        ctx.beginPath()
        switch (i.id) {
            case "firstname":
                ctx.font = "24px Arial"
                ctx.fillText(`${i.id.toUpperCase()}: ${i.value.toUpperCase()}`, 50, 150)
                break;
                
            case "lastname":
                ctx.font = "24px Arial"
                ctx.fillText(`${i.id.toUpperCase()}: ${i.value.toUpperCase()}`, 50, 200)
                break;

            case "email":
                ctx.font = "16px Arial"
                ctx.fillText(`${i.id.toUpperCase()}: ${i.value}`, 50, 250)
                break;

            case "skills":
                ctx.font = "16px Arial"
                ctx.fillText(`${i.id.toUpperCase()}: ${i.value}`, 50, 300)
                break;

            case "phonenumber":
                ctx.font = "16px Arial"
                ctx.fillText(`${i.id.toUpperCase()}: ${i.value}`, 50, 350)
                break;

            default:
                break;
        }
    }
}