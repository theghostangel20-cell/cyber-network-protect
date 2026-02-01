document.getElementById("messageForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const message = document.getElementById("messageInput").value;

    showLoading("messageResult");

    const response = await fetch("http://localhost:8080/scan/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: message })
    });

    const result = await response.json();
    showResult("messageResult", result);
});

document.getElementById("linkForm").addEventListener("submit", async function (e) {
    
    e.preventDefault();

    const link = document.getElementById("linkInput").value;

    showLoading("linkResult");

    const response = await fetch("http://localhost:8080/scan/link", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: link })
    });

    const result = await response.json();
    showResult("linkResult", result);
});

function showLoading(elementId) {
    const div = document.getElementById(elementId);
    div.className = "result warning";
    div.innerText = "Analyse en cours...";
    div.style.display = "block";
}

function showResult(elementId, result) {
    const div = document.getElementById(elementId);
    div.className = "result " + result.level.toLowerCase();
    div.innerText = result.message;
    div.style.display = "block";
}

/*document.addEventListener("DOMContentLoaded", () => {
    const linkForm = document.getElementById("linkForm");
    const messageForm = document.getElementById("messageForm");

    if (linkForm) {
        linkForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const link = document.getElementById("linkInput").value;
            showResult("linkResult", analyze(link));
        });
    }
    
    if (messageForm) {
        messageForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const message = document.getElementById("messageInput").value;
            showResult("messageResult", analyze(message));
        });
    }
});

function analyze(text) {
    text = text.toLowerCase();

    if (text.includes("gratuit") || text.includes("urgent") || text.includes(".xyz")) {
        return { level: "danger", message: "Arnaque probable detectée n'y entré pas vos informations personnelle"};
    }

    if (text.includes("cliquer") || text.includes("vérifiez")) {
        return { level: "warning", message: "message suspect"};
    }

    return { level: "safe", message: "semble fiable...reflechissez bien avant de vous lancer"};
}

function showResult(elementId, result) {
    const div = document.getElementById(elementId);
    div.className = "result " + result.level;
    div.innerText = result.message;
    div.style.display = "block";
}

function scan(url, elementId) {
    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: document.getElementById(elementId + "Input").value
    })
    .then(res => res.json())
    .then(data => {
        const div = document.getElementById(elementId + "Result");
        div.className = "result " + data.level;
        div.innerText = data.message;
        div.style.display = "block";
    });
}*/