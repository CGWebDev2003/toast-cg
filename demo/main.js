import Toast from "../ToastCG.js";

const body = document.body;

const myToast = new Toast({
    parent: "body",
	text: "Test Toast",
	style: "primary",
	position: "top-right",
	time: 5000,
});
