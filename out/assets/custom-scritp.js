if (typeof window === "object") {
  document.addEventListener("scroll", () => {
    const header = document.querySelector(".sticky");
    const scrollY = window.scrollY;

    if (scrollY > 0) {
      header.classList.add("whb-sticked");
    } else {
      header.classList.remove("whb-sticked");
    }
  });
}
