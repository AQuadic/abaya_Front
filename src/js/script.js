document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
        })
        .catch(error => console.log('Error loading the navbar:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
        .catch(error => console.log('Error loading the header:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('ShopbyDep.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ShopbyDep').innerHTML = data;

        })
        .catch(error => console.log('Error loading the ShopbyDep:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('shopbyStore.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('shopbyStore').innerHTML = data;
        })
        .catch(error => console.log('Error loading the shopbyStore:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('bestseller.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bestseller').innerHTML = data;
        })
        .catch(error => console.log('Error loading the bestseller:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('AbayaMallSelections.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('AbayaMallSelections').innerHTML = data;
        })
        .catch(error => console.log('Error loading the AbayaMallSelections:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('mayLike.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('mayLike').innerHTML = data;
        })
        .catch(error => console.log('Error loading the mayLike:', error));
});
document.addEventListener("DOMContentLoaded", function() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.log('Error loading the footer:', error));
});

