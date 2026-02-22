const btn = document.getElementById("revealBtn");
const secret = document.getElementById("secretNote");

btn.addEventListener("click", () => {
    secret.style.display = "block";
    secret.style.animation = "noteAppear 1s ease forwards";
    btn.style.display = "none";
});
