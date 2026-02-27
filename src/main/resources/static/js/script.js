document.addEventListener("DOMContentLoaded", () => {
    console.log("JS chargé correctement");
    initMessageScan();
    initLinkScan();
});
/* INITIALISATION MESSAGE */
function initMessageScan() {
    const form = document.getElementById("messageForm");
    if (!form) return; // Sécurité : ne fait rien si absent
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.getElementById("messageInput");
        const resultDiv = document.getElementById("messageResult");
        if (!input || !resultDiv) return;
        const message = input.value.trim();
        if (!message) return;
        showLoading(resultDiv);
        try {
            const response = await fetch("/scan/message", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: message })
            });
            if (!response.ok) {
                throw new Error("Erreur serveur");
            }
            const result = await response.json();
            showResult(resultDiv, result);
        } catch (error) {
            showError(resultDiv, "Impossible d’analyser le message.");
            console.error(error);
        }
    });
}
/* INITIALISATION LIEN */
function initLinkScan() {
    const form = document.getElementById("linkForm");
    if (!form) return; // Sécurité : ne fait rien si absent
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const input = document.getElementById("linkInput");
        const resultDiv = document.getElementById("linkResult");
        if (!input || !resultDiv) return;
        const link = input.value.trim();
        if (!link) return;
        showLoading(resultDiv);
        try {
            const response = await fetch("/scan/link", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: link })
            });
            if (!response.ok) {
                throw new Error("Erreur serveur");
            }
            const result = await response.json();
            showResult(resultDiv, result);
        } catch (error) {
            showError(resultDiv, "Impossible d’analyser le lien.");
            console.error(error);
        }
    });
}
/* AFFICHAGE RESULTATS */
function showLoading(div) {
    div.className = "result warning";
    div.style.display = "block";
    div.innerText = "Analyse en cours...";
}
function showResult(div, result) {
    if (!result || !result.level || !result.message) {
        showError(div, "Réponse invalide du serveur.");
        return;
    }
    div.className = "result " + result.level.toLowerCase();
    div.style.display = "block";
    div.innerText = result.message;
}
function showError(div, message) {
    div.className = "result danger";
    div.style.display = "block";
    div.innerText = message;
}
/*document.getElementById("messageForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const messageForm = document.getElementById("messageInput").value;

    showLoading("messageResult");

    const response = await fetch("/scan/message", {
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

    const linkForm = document.getElementById("linkInput").value;

    showLoading("linkResult");

    const response = await fetch("/scan/link", {
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