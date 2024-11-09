document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        document.querySelectorAll(".box").forEach(b => b.classList.remove("expanded"));
        box.classList.toggle("expanded");
    });
});
