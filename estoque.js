document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('product-form').addEventListener('submit', function(event) {
        event.preventDefault();
        var productName = document.getElementById('product-name').value;
        var productQuantity = document.getElementById('product-quantity').value;
        addProductToList(productName, productQuantity);
        document.getElementById('product-form').reset();
    });
});

function addProductToList(name, quantity) {
    var productList = document.getElementById('product-list');
    var listItem = document.createElement('li');
    listItem.textContent = name + ' - Quantidade: ' + quantity;
    productList.appendChild(listItem);
}
