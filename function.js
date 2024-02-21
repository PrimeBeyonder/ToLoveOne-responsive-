function yes() {
    console.log("success YES!");
    window.location.href = "acpt.html";
}

function moveBtn() {
    let x = Math.random() * (390 - document.getElementById("noBtn").offsetWidth);
    let y = Math.random() * (500 - document.getElementById("noBtn").offsetHeight);
    document.getElementById("noBtn").style.position = "absolute";
    document.getElementById("noBtn").style.left = `${x}px`;
    document.getElementById("noBtn").style.top = `${y}px`;
    console.log("success NO!");
}