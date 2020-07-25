btn = document.getElementsByClassName('deleteBtn');
console.log(btn);

for (i = 0; i < btn.length; i++) {
    btn[i].onclick = function() {
        btnAttr = this.attributes['data-soldValue'].textContent;
        if (btnAttr === "sold") {
            alert('Sorry, item is out of stock. Choose another item');
        }
    }
}
