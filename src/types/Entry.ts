// Interface for the fake Backend

export interface Entry {
    id: number;
    img: string;
    title: string;
    contentEntry: string;
    contentEntryShort: string;
    conclusionEntry: string;
    bookTitle: string;
    subtitle: string;
    bookAuthors: string[];
    publisher: string;
}


export function isEntry(data: Entry): data is Entry {
    return data instanceof Object
        && (['id', 'img', 'title', 'entry', 'bookTitle', 'subTitle'] as Array<keyof Entry>)
            .every(attribute => (data as Entry)[attribute])
}

export interface Book {
    id: number;
    img: string;
    title: string;
    entry: string;
    bookTitle: string;
    subtitle: string;
    bookAuthors: string[];
    publisher: string;
}

export function isBook(data: Book): data is Book {
    return data instanceof Object
        && (['id', 'img', 'title', 'entry', 'bookTitle', 'subTitle'] as Array<keyof Book>)
            .every(attribute => (data as Book)[attribute])
}

export interface Author {
    id: number;
    authorName: string;
    img: string;
}


export function isAuthor(data: Author): data is Author {
    return data instanceof Object
        && (['id', 'authorName', 'img'] as Array<keyof Author>)
            .every(attribute => (data as Author)[attribute])
}