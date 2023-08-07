const { nanoid } = require("nanoid");

const books = [];
// Tambahkan dua buku baru
const book1 = {
  id: nanoid(16),
  name: "Dicoding 1",
  year: 2023,
  author: "Penulis 1",
  summary: "Ringkasan Buku Pertama",
  publisher: "Penerbit 1",
  pageCount: 200,
  readPage: 100,
  finished: 100 === 200,
  reading: true,
  insertedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const book2 = {
  id: nanoid(16),
  name: "dicoding jobs",
  year: 2023,
  author: "Penulis 2",
  summary: "Ringkasan Buku Kedua",
  publisher: "Penerbit 2",
  pageCount: 150,
  readPage: 150,
  finished: true,
  reading: false,
  insertedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
const book3 = {
  id: nanoid(16),
  name: "",
  year: 2023,
  author: "Penulis 3",
  summary: "Ringkasan Buku Ketiga",
  publisher: "Penerbit 3",
  pageCount: 180,
  readPage: 90,
  finished: 90 === 180,
  reading: true,
  insertedAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

books.push(book1, book2, book3);

module.exports = books;
