const yearElement = document.querySelector(".year");
const fieldsElement = document.querySelector(".fields");
const closeBtn = document.querySelectorAll("[data-close]");
const openBtn = document.querySelectorAll("[data-open]");

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
];

let year = new Date().getFullYear();
yearElement.textContent = year;

fields.forEach((field) => {
	fieldsElement.innerHTML += `<div class="floating_input">
    <input type="text" class="input" type="${field.type}" id="${field.id}" placeholder="a">
    <label for="${field.id}" class="label">${field.label}</label>
    </div>`;
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
