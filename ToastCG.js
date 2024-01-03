/**
 * @class Toast
 * @description Create a new Toast
 *
 * @param {any} config Add your configuration
 *
 * parent -> class or id of your target element, when null its document.body
 *
 * icon -> add your icon
 *
 * text -> add your message text
 *
 * style -> primary, accent, information, success, warning, error
 *
 * position -> left-top, left-bottom, right-top, right-bottom
 *
 * time -> time until unvisible
 *
 * @example
 * const myToast = new Toast({
 *  icon: "YOUR ICON",
 *  text: "Test Toast",
 *  style: "primary",
 *  position: "top-right",
 *  time: 5000,
 * });
 */
class Toast {
	constructor(config) {
		// Create Toast
		const newToast = document.createElement("div");
		newToast.classList.add("toast");

		// Add Icon
		if (config.icon != null) {
			// Create Icon
			const newIcon = document.createElement("span");
			newIcon.classList.add("toast-icon");
			newIcon.innerHTML = config.icon;

			// Append icon
			newToast.appendChild(newIcon);
		}

		// Add Message
		if (config.text != null) {
			// Create Message
			const newMessage = document.createElement("p");
			newMessage.classList.add("toast-text", "text-l");
			newMessage.innerText = config.text;

			// Append Message
			newToast.appendChild(newMessage);
		} else {
			console.error("Error! Please ad a Message to your Toast!");
		}

		// Setup Style
		if (config.style != null) {
			newToast.classList.add("toast-" + config.style);
		}

		// Setup Position
		if (config.position != null) {
			newToast.classList.add("toast-" + config.position);
		}

		// Append to parent element
		if (config.parent != null) {
			document.querySelector(config.parent).appendChild(newToast);
		} else {
			document.body.appendChild(newToast);
		}

		// Setup Timer
		if (config.time != null) {
			setTimeout(destroy, config.time);
		}

		async function destroy() {
			document.body.removeChild(newToast);
		}
	}
}

export default Toast;
