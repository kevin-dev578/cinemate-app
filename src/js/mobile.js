function hamburgerButton() {
  const hamburgerBtn = document.getElementById("hamburger-btn");

  hamburgerBtn.addEventListener("click", () => {
    const navigation = document.querySelector(".navigation-bar");

    navigation.classList.toggle("open");
  });
}

hamburgerButton();
