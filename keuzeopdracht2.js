
        function car() {
            let view = document.getElementById('result');
            let select = document.getElementById('selected').value
            console.log(select)
            view.innerHTML = `<img src="img/${select}.jpg" alt="Auto">`;
        }
