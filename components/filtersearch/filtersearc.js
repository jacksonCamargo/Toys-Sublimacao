  document.getElementById('searchInput').addEventListener('input', function() {
            let filter = this.value.toLowerCase();
            let cards = document.querySelectorAll('.card');
            let noResultMessage = document.getElementById('noResultMessage');
            let anyVisible = false;

            cards.forEach(function(card) {
                let title = card.getAttribute('data-title');
                if (title.toLowerCase().includes(filter)) {
                    card.style.display = '';
                    anyVisible = true;
                } else {
                    card.style.display = 'none';
                }
            });

            if (!anyVisible) {
                noResultMessage.style.display = 'block';
            } else {
                noResultMessage.style.display = 'none';
            }
        });