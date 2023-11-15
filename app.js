const url = 'https://script.google.com/macros/s/AKfycbz0wxtQxOmntod0lSnFmepIr6XQUWg4fa-xqR8xygg-ar020bV8u0E2CyImP-Ei9h7w/exec';

const output = document.querySelector('.output')
loadData();
function loadData() {
    fetch(url).then(res => res.json())
        .then((data) => {
            let html = "";
            data.data.forEach(element => {
                output.innerHTML += `${element[0]} ${element[1]} ${element[2]} </br>`
                console.log(element);
            });

        })
}



