const form = document.getElementById('energyForm');
        const resultsDiv = document.getElementById('results');

        form.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            const usage = parseFloat(document.getElementById('usage').value);
            const hours = parseFloat(document.getElementById('hours').value);

            if (usage > 0 && hours > 0) {
                const optimization = (usage / hours).toFixed(2);
                resultsDiv.textContent = `Optimization Suggestion: Try to reduce energy usage to ${optimization} kWh/hour for better efficiency.`;
                resultsDiv.classList.add('show');
            } else {
                resultsDiv.textContent = 'Please enter valid numbers for both fields.';
                resultsDiv.classList.add('show');
            }
        });
