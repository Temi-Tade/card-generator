const yearElement = document.querySelector(".year");
const fieldsElement = document.querySelector(".fields");
const closeBtn = document.querySelectorAll("[data-close]");
const openBtn = document.querySelectorAll("[data-open]");
const user_details = document.querySelector("#user_details")
const valMsgElement = document.querySelector("#validitionMsg")
const previewWrap = document.querySelector(".preview-wrapper")
const card = document.querySelector("#card")

let fields = [
	{
		id: "firstname",
		label: "First Name",
		type: "text",
	},
	{
		id: "lastname", 
		label: "Last Name",
		type: "text",
	},
	{
		id: "phonenumber",
		label: "Phone Number",
		type: "tel",
	},
	{
		id: "email",
		label: "Email",
		type: "email",
	},
	{
		id: "skills",
		label: "Skills",
		type: "text"
	},
	{
		id: "passport",
		label: "Passport Photograph",
		type: "file"
	}
];

let year = new Date().getFullYear();
yearElement.textContent = year;

fields.forEach((field) => {
	if (field.type === "file") {
		fieldsElement.innerHTML += `<div class="floating_input">
    	<input class="input" type="${field.type}" id="${field.id}" placeholder="${field.label}" accept=".jpg,.png">
		<label for="${field.id}" class="label">${field.label}</label>
    	</div>`;
	} else {
		fieldsElement.innerHTML += `<div class="floating_input">
    	<input class="input" type="${field.type}" id="${field.id}" placeholder="${field.label}"></input>
		<label for="${field.id}" class="label">${field.label}</label>
    	</div>`;
	}
});

let handleClose = function () {
	let target = document.querySelector(this.dataset.target);
	document.body.classList.remove("overflow-hidden");
	target.classList.remove("open");
};
let handleOpen = function () {
	let target = document.querySelector(this.dataset.target);
	document.body.classList.add("overflow-hidden");
	target.classList.add("open");
};

closeBtn.forEach((btn) => btn.addEventListener("click", handleClose));
openBtn.forEach((btn) => btn.addEventListener("click", handleOpen));

