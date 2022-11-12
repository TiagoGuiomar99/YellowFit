localStorage.clear()
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)   
}else{
    ready()
}
var Produtos = []
function ready() {

        var removeCartItemButtons = document.getElementsByClassName('remove-item-cart')
        for (var i = 0; i < removeCartItemButtons.length; i++) {
        var buttonRemove = removeCartItemButtons[i]
        buttonRemove.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('prod-quantity')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addtoCartButtons = document.getElementsByClassName('addCart')
    for (var i = 0; i < addtoCartButtons.length; i++) {
        var button = addtoCartButtons[i]
        button.addEventListener('click', addToCartClicked)    
    }
    document.getElementsByClassName('SubmitBuy')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Obrigado pela compra')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
    updateCartTotal()
    
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1        
    }   
    updateCartTotal()

}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('prod-name')[0].innerText
    var price = shopItem.getElementsByClassName('prod-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('prod-img img')
    var src = imageSrc.getAttribute

    //var image = $(imageSrc).prop('src')
    
    Produtos.push(title + ',' + price + ',' + src)
    localStorage.setItem('Produtos', JSON.stringify(Produtos))
    
    addItemToCart(title, price, src)//falta a img
    updateCartTotal()
}

function cartAddProdutos() {
    var ProdutosCarrinho = JSON.parse(localStorage.getItem('Produtos'))
    if (ProdutosCarrinho != null) {
        for (var n = 0; n < ProdutosCarrinho.length; n++) {
            var NomePreco = ProdutosCarrinho[n].split(',')
            console.log(NomePreco);
    
            $('.cart-items').append(`
            <div class="cart-product-info">
                <div class="cart-product-info-left">
                    <img src="${NomePreco[2]}" alt="Produto">
                    <p class="prod-name">${NomePreco[0]}</p>
                </div>
                <div class="cart-product-info-right">
                    <p class="prod-price">${NomePreco[1]}</p>
                    <input type="number" name="prod-quantity" class="prod-quantity" value="1">
                    <p class="prod-subTotal">0,00€</p>
                    <button class="remove-item-cart">
                        <span class="iconify" data-icon="fa-solid:trash" data-inline="false" style="color: #707070;" data-height="16"></span>
                    </button>
                </div></div>`)
        }
    }
    
    
    
}
function cartProdutos() {
    var ProdutosCarrinho = JSON.parse(localStorage.getItem('Produtos'))
    if (ProdutosCarrinho != null) {
        for (var n = 0; n < ProdutosCarrinho.length; n++) {
            var NomePreco = ProdutosCarrinho[n].split(',')
            console.log(NomePreco);
    
            $('.payment-cart-info').append(`
            <div class="payment-cart-info-product">
                            <div class="payment-cart-info-product-img">
                                <img src="${NomePreco[2]}" alt="produto">
                            </div>
                            <div class="payment-cart-products">
                                <p class="prod-name">${NomePreco[0]}</p>
                                <p class="payment-cart-quantity">Quantidade : 
                                    <span class="prod-quantity">1</span> 
                                     <span class="prod-price">${NomePreco[1]}</span>
                                </p>
                            </div>
                        </div>

            `)
        }
    }
    
    
    
}

function addItemToCart(title, price) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-product-info')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('prod-name')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Este produto já foi adicionado ao carrinho anteriormente')
            return            
        }        
    }
    var cartRowContents = `
        <div class="cart-product-info-left">
            <img src="" alt="Produto">
            <p class="prod-name">${title}</p>
        </div>
        <div class="cart-product-info-right">
            <p class="prod-price">${price}</p>
            <input type="number" name="prod-quantity" class="prod-quantity" value="1">
            <p class="prod-subTotal">0,00€</p>
            <button class="remove-item-cart">
                <span class="iconify" data-icon="fa-solid:trash" data-inline="false" style="color: #707070;" data-height="16"></span>
            </button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('remove-item-cart')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('prod-quantity')[0].addEventListener('change', quantityChanged)
    localStorage.setItem()
    localStorage.setItem()
}

//localStorage.setItem();
/*<div class="cart-product-info">
    <div class="cart-product-info-left">
        <img src="${imageSrc}" alt="Produto">
        <p class="prod-name">${title}</p>
    </div>
    <div class="cart-product-info-right">
        <p class="prod-price">${price}</p>
        <input type="number" name="prod-quantity" class="prod-quantity" value="1">
        <p class="prod-subTotal">0,00€</p>
        <button class="remove-item-cart">
            <span class="iconify" data-icon="fa-solid:trash" data-inline="false" style="color: #707070;" data-height="16"></span>
        </button>
    </div>
</div>*/

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-product-info')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('prod-price')[0]
        var quantityElement = cartRow.getElementsByClassName('prod-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('€', ''))
        var quantity = quantityElement.value
        subTotalProd = (price * quantity)
        total = total + (price * quantity)
        subTotalProd = Math.round(subTotalProd * 100) / 100
        document.getElementsByClassName('prod-subTotal')[i].innerText = subTotalProd + '€'
        
        //subTotalProdArray.push(subTotalProd)
        
    }
    total = Math.round(total * 100) / 100
    subTotalFinal = total
    document.getElementsByClassName('priceSubTotal')[0].innerText = subTotalFinal + '€'
    document.getElementsByClassName('priceTotal')[0].innerText = total + '€'

    //localStorage.setItem('subTotalProdArray', subTotalProdArray);
    localStorage.setItem('subTotalFinal', subTotalFinal);
    localStorage.setItem('Total', total);

    

    
}



function loadStorage() {

    var total = localStorage.getItem('Total', total);
        document.getElementsByClassName('priceTotal')[0].innerText = total + '€'

    //var subTotalProdArray = localStorage.getItem('subTotalProdArray', subTotalProdArray);
    
    for (var n = 0; n < subTotalProdArray.length; n++) {
        localStorage.setItem('subTotalProdArray', subTotalProdArray[n]);
        var subTotalPayment = localStorage.getItem('subTotalProdArray');
        
        document.getElementsByClassName('prod-price')[n].innerText = subTotalPayment + '€'
        
    }


    var subTotalFinal = localStorage.getItem('subTotalFinal', subTotalFinal);
    document.getElementsByClassName('priceSubTotal')[0].innerText = subTotalFinal + '€'
}




// function salvarPessoa(){
//     var nome = document.getElementById("nome").value;
//     var cpf = document.getElementById("cpf").value;

//     // Pega a lista já cadastrada, se não houver vira um array vazio
//     var lista_pessoas = JSON.parse(localStorage.getItem('subTotalProd') || '[]');
//     // Adiciona pessoa ao cadastro
//     subTotalProdNew.push({
//         nome: nome,
//         cpf: cpf
//     });

//     // Salva a lista alterada
//     localStorage.setItem("subTotalProd", JSON.stringify(subTotalProdNew));

//     console.log('Salva com sucesso.');
// }


// for (var j = 0; j < priceElement.length; j++) {
//     var priceUnity = parseFloat(priceElement[j].innerText.replace('€', ''))
    
// }



