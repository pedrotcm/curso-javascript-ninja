/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var myArray = [1, 'Pedro', false, { prop1: 'valor1'}, [1, 2, 3] ];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function getArray(array){
	return array;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(getArray(myArray)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function getArrayByIndice(array,index){
	return array[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myArray2 = [28, 'Pedro', true, { prop1: 'valor1'}, [1, 2, 3, 5] ];


/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
getArrayByIndice(myArray2, 4); // [1, 2, 3, 5]

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
	var livros = {
		livro1: {
			quantidadePaginas: 120,
			autor: 'Autor 1',
			editora: 'Editora 1'
		},
		livro2: {
			quantidadePaginas: 230,
			autor: 'Autor 2',
			editora: 'Editora 2'
		},
		livro3: {
			quantidadePaginas: 320,
			autor: 'Autor 3',
			editora: 'Editora 3'
		}
	};
	if (nomeLivro === undefined){
		return livros;
	}
	return livros[nomeLivro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); //{livro1: {quantidadePaginas: 120, autor: "Autor 1", editora: "Editora 1"}, livro2: {quantidadePaginas: 230, autor: "Autor 2", editora: "Editora 2"}, livro3: {quantidadePaginas: 320, autor: "Autor 3", editora: "Editora 3"}}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log ('O livro livro2 tem ' + book('livro2').quantidadePaginas + ' páginas!');  // O livro livro2 tem 230 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log ('O autor do livro livro1 é ' + book('livro1').autor); // O autor do livro livro1 é Autor 1

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log ('O livro livro3 foi publicado pela editora ' + book('livro1').editora); // O livro livro3 foi publicado pela editora Editora 1
