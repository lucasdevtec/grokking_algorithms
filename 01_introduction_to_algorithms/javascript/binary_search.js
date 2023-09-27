function binarySearch(lista, itemNaLista) {
  let baixo = 0;
  let alto = lista.length - 1;
  let meio = 0;
  let chute = 0;

  while (baixo <= alto) {
    meio = Math.floor((baixo + alto) / 2);
    chute = lista[meio];
    console.log("chute foi:", chute);
    if (chute === itemNaLista) {
      return meio;
    } else if (chute > itemNaLista) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  }
  return null;
}

const myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log("Resultado na posição:", binarySearch(myList, 3));
