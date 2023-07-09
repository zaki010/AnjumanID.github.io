function generateID() {
    var receiptId = document.getElementById("receiptId").value;
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var amount = document.getElementById("amount").value;

    var generatedId = receiptId + "-" + name.substr(0, 3) + "-" + phone.substr(-4);

    document.getElementById("idOutput").textContent = generatedId;
    document.getElementById("generatedId").classList.remove("hidden");
}

function copyID() {
    var idOutput = document.getElementById("idOutput");
    var range = document.createRange();
    range.selectNode(idOutput);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    alert("ID copied to clipboard!");
}

function nextPage() {
    window.location.href = "https://zaki010.github.io/AnjumanPayment.github.io/"; // Replace with the URL of your next page
}
