let mercado = ["Tomate", "Arroz", "Cafe", "Azucar", "Frijoles"]
mercado.unshift("Arepas");
mercado.forEach(elemento =>{
    console.log(elemento);
});
mercado.splice(4,1);
console.log(mercado);
console.log(mercado.length);