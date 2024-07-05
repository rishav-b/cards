const images = document.querySelectorAll(".image");

const expandImage = () => {
	images.forEach((image) => {
		image.addEventListener("click", () => {
			const active = document.querySelector(".active");
			active.classList.remove("active");

			image.classList.add("active");
		});
	});
};

expandImage();
