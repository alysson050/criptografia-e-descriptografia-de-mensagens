
        var historyArr = [];
    
        function encrypt() {
            var inputText = document.getElementById('inputText').value;
            if (!inputText.trim()) {
                alert('Por favor, insira uma mensagem para criptografar.');
                return;
            }
            var encryptedText = btoa(inputText);
            document.getElementById('outputText').innerText = encryptedText;
            document.getElementById('inputText').value = '';
            document.getElementById('copyButton').style.display = 'inline';
            addToHistory(inputText, encryptedText);
        }
    
        function decrypt() {
            var encryptedText = document.getElementById('outputText').innerText;
            var decryptedText = atob(encryptedText);
            document.getElementById('outputText').innerText = decryptedText;
        }
    
        function copyToClipboard() {
            var outputText = document.getElementById('outputText');
            var range = document.createRange();
            range.selectNode(outputText);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            document.execCommand('copy');
            window.getSelection().removeAllRanges();
            alert('Texto copiado para a área de transferência!');
        }

    function addToHistory(original, encrypted) {
        historyArr.push({ original: original, encrypted: encrypted });
        renderHistory();
    }

    function renderHistory() {
        var historyList = document.getElementById('historyList');
        historyList.innerHTML = '';
        historyArr.forEach(function(item) {
            var li = document.createElement('li');
            li.classList.add('history-item');
            li.textContent = 'Original: ' + item.original + ' - Criptografada: ' + item.encrypted;
            historyList.appendChild(li);
        });
    }

    function toggleHistory() {
        var historyBox = document.querySelector('.history-box');
        if (historyBox.style.display === 'none') {
            historyBox.style.display = 'block';
        } else {
            historyBox.style.display = 'none';
        }
    }
