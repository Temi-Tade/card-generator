const yearElement = document.querySelector(".year");
const fieldsElement = document.querySelector(".fields");
const closeBtn = document.querySelectorAll("[data-close]");
const openBtn = document.querySelectorAll("[data-open]");
const user_details = document.querySelector("#user_details")
const valMsgElement = document.querySelector("#validitionMsg")

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
		type: "text",
	},
	{
		id: "email",
		label: "Email",
		type: "email",
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
	fieldsElement.innerHTML += `<div class="floating_input">
    <input class="input" type="${field.type}" id="${field.id}" placeholder="${field.label}">
    <label for="${field.id}" class="label">${field.label}</label>
    </div>`;
});

let handleClose = function () {
	let target = document.querySelector(this.dataset.target);
	target.classList.remove("open");
};
let handleOpen = function () {
	let target = document.querySelector(this.dataset.target);
	target.classList.add("open");
};

closeBtn.forEach((btn) => btn.addEventListener("click", handleClose));
openBtn.forEach((btn) => btn.addEventListener("click", handleOpen));

