import { rest } from 'msw'
import { Entry, Book, Author } from "../types/Entry";

// Fake Backend 

// Reviews
let entries: Entry[] = [
    {
        "id": 1,
        "img": "https://buecherhummel.de/wp-content/uploads/2018/02/picsart_02-07-10-29-48.png",
        "title": "Die Lux Saga beginnt",
        "contentEntry": "Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.",
        "contentEntryShort": "InformationsText Short",
        "conclusionEntry": "FAZIT Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.",
        "bookTitle": "Obsidian",
        "subtitle": "Schattendunkel",

        "bookAuthors": ["1"],
        "publisher": "Carlsen"
    },
    {
        "id": 2,
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHHqPhxwSVcqC1ZKMzTOsB762_5Zu-amhejQ&usqp=CAU",
        "title": "The Ivy Years erobert im Sturm",
        "contentEntry": "Rezisionstext",
        "contentEntryShort": "InformationsText Short",
        "conclusionEntry": "FAZIT Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.",
        "bookTitle": "The Ivy Years",
        "subtitle": "Bevor wir Fallen",

        "bookAuthors": ["2"],
        "publisher": "LYX"
    },
    {
        "id": 3,
        "img": "https://patchis-books.de/wp-content/uploads/2020/10/MidnightChronicles-1140x641.jpg",
        "title": "Must read!",
        "contentEntry": "Rezisionstext",
        "contentEntryShort": "InformationsText Short",
        "conclusionEntry": "FAZIT Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.",
        "bookTitle": "Midnight Chronicles",
        "subtitle": "Schattenblick",
        "bookAuthors": ["3", "4"],
        "publisher": "LYX"
    },
    {
        "id": 4,
        "img": "https://lucasbuecherwelt.files.wordpress.com/2021/03/174865d9-54e6-4c98-bcec-4bfe5153ef84-1.jpg",
        "title": "Must read 2!",
        "contentEntry": "Rezisionstext",
        "contentEntryShort": "InformationsText Short",
        "conclusionEntry": "FAZIT Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.Cupcake ipsum dolor sit amet. Shortbread chocolate cake candy canes tootsie roll I love cupcake. I love cotton candy halvah toffee carrot cake. Carrot cake carrot cake powder cookie apple pie macaroon cake marshmallow cupcake. Candy chocolate cake toffee candy pie gingerbread tootsie roll.",
        "bookTitle": "Midnight Chronicles",
        "subtitle": "BlutMagie",
        "bookAuthors": ["3", "4"],
        "publisher": "LYX"
    },

]

// Coming Soon

let nextBooks: Book[] = [
    {
        "id": 1,
        "img": "https://ninespo.de/media/Onyx-Schattenschimmer.jpg",
        "title": "Die Lux Saga geht weiter",
        "entry": "Damons und Katys Geschichte geht weiter. Seid gespannt!",
        "bookTitle": "Onyx",
        "subtitle": "Schattenschimmer",
        "bookAuthors": ["1"],
        "publisher": "Carlsen"
    },
    {
        "id": 2,
        "img": "https://ninespo.de/media/Opal-Schattenglanz.jpg",
        "title": "Die Lux Saga geht in die Dritte Runde",
        "entry": "Damons und Katys Geschichte geht weiter. Seid gespannt!",
        "bookTitle": "Opal",
        "subtitle": "Schattenglanz",
        "bookAuthors": ["1"],
        "publisher": "Carlsen"
    },
]

// Authors

let authors: Author[] = [
    {
        "id": 1,
        "authorName": "Jennifer L. Armentrout",
        "img": "https://upload.wikimedia.org/wikipedia/commons/c/c5/Jennifer_Armentrout_at_BookCon_%2816059%29.jpg"
    },
    {
        "id": 2,
        "authorName": "Sarina Bowen",
        "img": "https://www.luebbe.de/site/thumbnails/720/0/1/9/6/965bf2714e_684356449_43bf2d2e47.jpg"
    },
    {
        "id": 3,
        "authorName": "Laura Kneidl",
        "img": "https://s3-eu-west-1.amazonaws.com/author.allsize.lovelybooks.de/Laura-Kneidl_1062704969_1383682699726_xxl.jpg"
    },
    {
        "id": 4,
        "authorName": "Bianca Iosivoni",
        "img": "https://vorablesen.s3.eu-west-1.amazonaws.com/vorablesen/author/2254/avatar/thumb-962b27f47528639f9b3dc5bd02c6c540.jpg"
    },

]


// API

export const handlers = [
    // GET list
    rest.get<undefined, any, Entry[]>('/api/entries', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(entries));
    }),

    // GET single
    rest.get<undefined, any, Entry | undefined>(
        '/api/entries/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            return res(
                ctx.status(200),
                ctx.json(entries.find((entry) => entry.id === id)),
            );
        },
    ),

    // POST new
    rest.post<Omit<Entry, 'id'>, any, Entry>('/api/entries', (req, res, ctx) => {
        const newEntry = {
            ...req.body,
            id: entries.reduce((maxId, entry) => Math.max(entry.id, maxId), -1) + 1,
            completed: false,
        };
        entries = [...entries, newEntry];

        return res(ctx.status(201), ctx.json(newEntry));
    }),

    // PUT entry
    rest.put<Entry, any, Entry | undefined>(
        '/api/entries/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            entries = entries.map((entry) =>
                entry.id === id ? { ...entry, ...req.body } : entry,
            );
            return res(
                ctx.status(200),
                ctx.json(entries.find((entry) => entry.id === id)),
            );
        },
    ),

    // DELETE entry
    rest.delete<undefined, any, string>(
        '/api/entries/:id',
        (req, res, ctx) => {
            const { id } = req.params;
            entries = entries.filter((entry) => entry.id !== id);
            return res(ctx.status(200), ctx.text('OK'));
        },
    ),

    // Coming Soon

    // GET list
    rest.get<undefined, any, Book[]>('/api/nextBooks', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(nextBooks));
    }),

    // GET single
    rest.get<undefined, any, Book | undefined>(
        '/api/nextBooks/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            return res(
                ctx.status(200),
                ctx.json(nextBooks.find((book) => book.id === id)),
            );
        },
    ),

    // POST new
    rest.post<Omit<Book, 'id'>, any, Book>('/api/nextBooks', (req, res, ctx) => {
        const newBook = {
            ...req.body,
            id: nextBooks.reduce((maxId, book) => Math.max(book.id, maxId), -1) + 1,
            completed: false,
        };
        nextBooks = [...nextBooks, newBook];

        return res(ctx.status(201), ctx.json(newBook));
    }),

    // PUT Book
    rest.put<Book, any, Book | undefined>(
        '/api/nextBooks/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            nextBooks = nextBooks.map((book) =>
                book.id === id ? { ...book, ...req.body } : book,
            );
            return res(
                ctx.status(200),
                ctx.json(nextBooks.find((book) => book.id === id)),
            );
        },
    ),

    // DELETE Book
    rest.delete<undefined, any, string>(
        '/api/nextBooks/:id',
        (req, res, ctx) => {
            const { id } = req.params;
            nextBooks = nextBooks.filter((book) => book.id !== id);
            return res(ctx.status(200), ctx.text('OK'));
        },
    ),


    // AUTHOR
    rest.get<undefined, any, Author[]>('/api/authors', (_req, res, ctx) => {
        return res(ctx.status(200), ctx.json(authors));
    }),

    // GET single
    rest.get<undefined, any, Author | undefined>(
        '/api/authors/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            return res(
                ctx.status(200),
                ctx.json(authors.find((author) => author.id === id)),
            );
        },
    ),

    // POST new
    rest.post<Omit<Author, 'id'>, any, Author>('/api/authors', (req, res, ctx) => {
        const newAuthor = {
            ...req.body,
            id: authors.reduce((maxId, author) => Math.max(author.id, maxId), -1) + 1,
            completed: false,
        };
        authors = [...authors, newAuthor];

        return res(ctx.status(201), ctx.json(newAuthor));
    }),

    // PUT Author
    rest.put<Author, any, Author | undefined>(
        '/api/authors/:id',
        (req, res, ctx) => {
            const id = +req.params.id;
            authors = authors.map((author) =>
                author.id === id ? { ...author, ...req.body } : author,
            );
            return res(
                ctx.status(200),
                ctx.json(authors.find((author) => author.id === id)),
            );
        },
    ),

    // DELETE Author
    rest.delete<undefined, any, string>(
        '/api/authors/:id',
        (req, res, ctx) => {
            const { id } = req.params;
            authors = authors.filter((author) => author.id !== id);
            return res(ctx.status(200), ctx.text('OK'));
        },
    ),


    // TODO fixing the Author mapping search
    // TODO add the coming Soon search

    // SEARCH Authors
    rest.get<undefined, { authorId: string }, Entry[] | undefined>(
        '/api/author/search/:authorId',
        (req, res, ctx) => {
            const value = req.params.authorId;
            console.log(value)
            const regExp = new RegExp(value, 'i')
            return res(
                ctx.status(200),
                ctx.json(entries.filter((entry) =>
                    entry.bookAuthors.find((author) =>
                        author.match(regExp))
                ))

            )
        }
    ),

    //SEARCH Entries
    rest.get<undefined, { value: string }, Entry[] | undefined>(
        '/api/reviews/search/:value',
        (req, res, ctx) => {
            const value = req.params.value;
            console.log(value)
            const regExp = new RegExp(value, 'i')
            return res(
                ctx.status(200),
                ctx.json(entries.filter((entry) =>
                    entry.bookTitle.match(regExp) ||
                    entry.subtitle.match(regExp) ||
                    entry.publisher.match(regExp) ||
                    entry.title.match(regExp) ||
                    entry.bookAuthors.find((author) =>
                        author.match(regExp))
                ))

            )
        }
    )

];

