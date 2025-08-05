//as duas primeiras são a mesma coisa, a diferença é que quando colocamos entre {} estamos especificando apenas qual a função queremos usar
const { getFullName, productType } = require("./services/products");
const products = require("./services/products");

const config = require("./services/config");
const database = require("./services/database");

async function main(){
    console.log("carrinho de compras:");

    //as duas primeiras são a mesma coisa, a diferença é que na primeira coloco a função específica direto. Já quando digito products. vai aparecer todas as funções que tem no arquivo products para eu escolher.
    getFullName("1", "teclado");
    products.getFullName("1", "teclado");

    //product.getFullName("408", "mousepad");
    //product.getFullName("508", "mouse");
    //product.getProductLabel("mousepad");

    database.connectToDataBase("my-data");
}

main();