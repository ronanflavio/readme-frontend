import { BookDetails } from "../models/book-details.model";

export const BOOK_DETAILS: BookDetails = {
  id: 'a78d68sljjkh',
  title: 'O Senhor dos Anéis: As Duas Torres',
  authors: [
    'J.R.R. Tolkien'
  ],
  synopsis: `A Comitiva do Anel se divide. Frodo e Sam continuam a viagem, descendo sozinhos o Grande Rio Anduin ? mas não tão sozinhos assim, pois uma figura misteriosa segue todos os seus passos...
    As Duas Torres é a segunda parte da grande obra de ficção fantástica de J. R. R. Tolkien, O Senhor dos Anéis.
    É impossível transmitir ao novo leitor todas as qualidades e o alcance do livro. Alternadamente cômica, singela, épica, monstruosa e diabólica, a narrativa desenvolve-se em meio a inúmeras mudanças de cenários e de personagens, num mundo imaginário absolutamente convincente em seus detalhes. Nas palavras do romancista Richard Hughes, “quanto à amplitude imaginativa, a obra praticamente não tem paralelos e é quase igualmente notável na sua vividez e na habilidade narrativa, que mantêm o leitor preso página após página”.
    Tolkien criou em O Senhor dos Anéis uma nova mitologia num mundo inventado que demonstrou possuir um poder de atração atemporal.`,
  review: {
    rating: 4.8,
    reviewers: 12348
  },
  interaction: {
    favorite: false,
    own: false,
    read: true,
    reading: false,
    willing: false,
  }
}
