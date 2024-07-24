function openAbuseIPDB() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.abuseipdb.com/check/' + ip, '_blank');
    } else {
        window.open('https://www.abuseipdb.com/', '_blank');
    }
}

function openIPQualityScore() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/lookup/' + ip, '_blank');
    } else {
        window.open('https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/', '_blank');
    }
}

function openVirusTotal() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.virustotal.com/gui/ip-address/' + ip, '_blank');
    } else {
        window.open('https://www.virustotal.com/gui/home/search', '_blank');
    }
}

function openAllMalicious() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.abuseipdb.com/check/' + ip, '_blank');
        window.open('https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/lookup/' + ip, '_blank');
        window.open('https://www.virustotal.com/gui/ip-address/' + ip, '_blank');
    } else {
        window.open('https://www.abuseipdb.com/', '_blank');
        window.open('https://www.ipqualityscore.com/free-ip-lookup-proxy-vpn-test/', '_blank');
        window.open('https://www.virustotal.com/gui/home/search', '_blank');
    }
}

function openWhois() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.whois.com/whois/' + ip, '_blank');
    } else {
        window.open('https://www.whois.com/whois/' + ip, '_blank');
    }
}

function openAllWhois() {
    var ip = document.getElementById('ipInput').value;
    if (ip) {
        window.open('https://www.whois.com/whois/' + ip, '_blank');
        // Add more links as needed for Whois section
    } else {
        window.open('https://www.whois.com/whois/' + ip, '_blank');
    }
    // Additional links for Whois section
}
