# Toast Class Documentation

The `Toast` class facilitates the creation of customizable toast messages. These toasts can be easily integrated into web applications for displaying brief notifications. The documentation outlines the class structure, constructor parameters, usage examples, and key features.

## Class: Toast

### Description

Create a new toast with configurable options such as icon, message text, style, position, and visibility time.

### Constructor

```javascript
const myToast = new Toast({
	icon: "YOUR ICON",
	text: "Test Toast",
	style: "primary",
	position: "top-right",
	time: 5000,
});
```

#### Parameters

-   `config` (Object): An object containing the configuration options for the toast.

    -   `parent` (String): (Optional) The class or id of the target element. If `null`, the toast will be appended to `document.body`.

    -   `icon` (String): (Optional) The HTML or text content for the toast icon.

    -   `text` (String): (Required) The message text to be displayed in the toast.

    -   `style` (String): (Optional) The style of the toast, which can be one of the following: "primary", "accent", "information", "success", "warning", or "error".

    -   `position` (String): (Optional) The position of the toast on the screen, which can be one of the following: "left-top", "left-bottom", "right-top", or "right-bottom".

    -   `time` (Number): (Optional) The time (in milliseconds) until the toast becomes invisible. If not provided, the toast will remain visible until manually removed.

### Example

```javascript
const myToast = new Toast({
	icon: "YOUR ICON",
	text: "Test Toast",
	style: "primary",
	position: "top-right",
	time: 5000,
});
```

This example creates a new `Toast` instance with a specified icon, message text, style, position, and visibility time.

### Toast Configuration

-   Icon: If an icon is provided, it will be displayed on the left side of the toast.

-   Message Text: The main content of the toast, displaying the message provided in the configuration.

-   Style: The style of the toast determines its appearance. Options include "primary", "accent", "information", "success", "warning", or "error".

-   Position: The position of the toast on the screen. Options include "left-top", "left-bottom", "right-top", or "right-bottom".

-   Time: The time until the toast becomes invisible. If not provided, the toast will remain visible until manually removed.

### Error Handling

If the `text` parameter is not provided, an error message will be logged to the console, indicating that a message should be added to the toast.

### Usage

To use the `Toast` class, instantiate it with a configuration object, specifying the desired icon, message text, style, position, and visibility time. The toast will then be appended to the specified parent element or `document.body` if no parent is provided. If a visibility time is specified, the toast will automatically be removed after that duration.
