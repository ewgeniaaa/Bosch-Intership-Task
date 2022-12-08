let buttons = document.querySelectorAll('.item button');
            let modals = document.querySelectorAll('.modal');

            function showModal(id) {
                let curr = document.getElementById(id);
                curr.classList.add('visible');
            }

            function hideModals() {
                modals.forEach(curr => {
                    curr.classList.remove('visible');
                });
            }

            buttons.forEach(b => {
                b.addEventListener('click', event => {
                    hideModals();
                    showModal(b.dataset.modal);
                });
            });

            modals.forEach(curr => {
                let x = curr.querySelector('button.close');
                x.addEventListener('click', hideModals);
            });

            modals.forEach(curr => {
                let x = curr.querySelector('button.close-x');
                x.addEventListener('click', hideModals);
            });