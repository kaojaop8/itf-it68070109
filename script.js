let accBalance = 0;
let cashBalance = 0;
const history = document.getElementById("history");

function setBalance() {
    accBalance = Number(document.getElementById("acc_balance").value);
    cashBalance = Number(document.getElementById("cash_balance").value);
    addHistory(`Set balances: Account = ${accBalance}, Cash = ${cashBalance}`);
}

function deposit() {
    const amount = Number(document.getElementById("amount").value);
    if (cashBalance >= amount && amount > 0) {
        accBalance += amount;
        cashBalance -= amount;
        addHistory(`Deposited ${amount} THB 
		balances: Account = ${accBalance}, Cash = ${cashBalance}`);
        updateDisplay();
    } else {
        alert("Not enough cash or invalid amount!");
    }
}

function withdraw() {
    const amount = Number(document.getElementById("amount").value);
    if (accBalance >= amount && amount > 0) {
        accBalance -= amount;
        cashBalance += amount;
        addHistory(`Withdrew ${amount} THB 
		balances: Account = ${accBalance}, Cash = ${cashBalance}`);
        updateDisplay();
    } else {
        alert("Not enough balance or invalid amount!");
    }
}

function updateDisplay() {
    document.getElementById("acc_balance").value = accBalance;
    document.getElementById("cash_balance").value = cashBalance;
}

function addHistory(text) {
    const time = new Date().toLocaleTimeString();
    history.value += `[${time}] ${text}\n`;
    history.scrollTop = history.scrollHeight;
}

function convert() {
    const amount = Number(document.getElementById("money_convert").value);
    const type = document.getElementById("currency_type").value;
    let result = 0;

    if (type === "THB") {
        result = amount / 36; // THB → USD
        document.getElementById("result").innerText = `Converted: $${result.toFixed(2)} USD`;
    } else {
        result = amount * 36; // USD → THB
        document.getElementById("result").innerText = `Converted: ฿${result.toFixed(2)} THB`;
    }
}
