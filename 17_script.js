function highlightCells() {
    const keyword = document.getElementById("searchInput").value.trim();
    const cells = document.querySelectorAll("td");

    cells.forEach(cell => cell.classList.remove("highlight"));

    if (keyword === "") return;

    cells.forEach(cell => {
        if (cell.innerText.includes(keyword)) {
            cell.classList.add("highlight");
        }
    });
}