function combinarObjetos(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
function executar43() {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { b: 20, c: 3 };
    console.log(combinarObjetos(obj1, obj2));
}
executar43();
