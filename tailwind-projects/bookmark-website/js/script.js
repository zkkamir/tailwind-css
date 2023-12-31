const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs Menu Event Listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger Button Event Listener
menuBtn.addEventListener("click", navToggle);

function onTabClick(e) {
	tabs.forEach((tab) => {
		tab.children[0].classList.remove(
			"border-softRed",
			"border-b-4",
			"md:border-b-0"
		);
	});

	// Hide all panels
	panels.forEach((panel) => panel.classList.add("hidden"));
	// Activate a new tab and panel based on the target
	e.target.classList.add("border-softRed", "border-b-4");
	const classString = e.target.getAttribute("data-target");
	document
		.getElementById("panels")
		.getElementsByClassName(classString)[0]
		.classList.remove("hidden");
}

linkForm.addEventListener("submit", formSubmit);

// Toggle Mobile Menu
function navToggle() {
	menuBtn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");

	if (menu.classList.contains("flex")) {
		logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
	} else {
		logo.setAttribute("src", "./images/logo-bookmark.svg");
	}
}
