const address = '0x80BfB857770a802f7eF375921AD5E83c76214a2d';
const etherscanApiKey = 'WEGQIS7RDT26JJKRCVB6ZKNS5V186Q1TYQ';

let firstTxTimestamp = null;

// Hilfsfunktion für zufällige Werte im Bereich
function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Feste, nicht überlappende Bereiche für jede Einheit
const unitStyles = [
    { left: 18, top: 10, size: randomInRange(3.5, 4.2) }, // years (sehr groß)
    { left: 60, top: 12, size: randomInRange(2.2, 2.7) }, // months (groß)
    { left: 10, top: 60, size: randomInRange(1.2, 1.7) }, // days (klein)
    { left: 65, top: 65, size: randomInRange(1.0, 1.3) }, // hours (sehr klein)
    { left: 35, top: 75, size: randomInRange(2.0, 2.5) }, // minutes (mittel)
    { left: 75, top: 40, size: randomInRange(1.0, 1.3) }, // seconds (sehr klein)
];

async function getFirstTransaction() {
    try {
        const response = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${etherscanApiKey}`);
        const data = await response.json();
        
        if (data.status === '1' && data.result.length > 0) {
            const firstTx = data.result[0];
            firstTxTimestamp = parseInt(firstTx.timeStamp) * 1000; // Convert to milliseconds
            const totalTransactions = data.result.length;
            
            updateAgeCloud();
            updateTransactionCount(totalTransactions);
            
            // Start updating jede Sekunde
            setInterval(updateAgeCloud, 1000);
        } else {
            console.error('Keine Transaktionen gefunden');
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Transaktionen:', error);
    }
}

function updateAgeCloud() {
    if (!firstTxTimestamp) return;
    
    const now = new Date();
    const firstTx = new Date(firstTxTimestamp);
    
    const diff = now - firstTx;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const ageCloud = document.getElementById('age-cloud');
    const units = [
        { cls: 'age-years', value: years, label: 'years' },
        { cls: 'age-months', value: months, label: 'months' },
        { cls: 'age-days', value: days, label: 'days' },
        { cls: 'age-hours', value: hours, label: 'hours' },
        { cls: 'age-minutes', value: minutes, label: 'minutes' },
        { cls: 'age-seconds', value: seconds, label: 'seconds' },
    ];
    ageCloud.innerHTML = units.map((u, i) =>
        `<div class="age-unit ${u.cls} age-step age-step-${i}"><span class="age-num">${u.value}</span><span class="age-label">${u.label}</span></div>`
    ).join('');
}

function updateTransactionCount(count) {
    document.getElementById('transactionCount').textContent = count;
}

// Initial call
getFirstTransaction(); 