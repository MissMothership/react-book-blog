import React, { ReactElement } from 'react'
import { useEntryApi } from '../hooks/useEntryApi'
import { Book } from '../types/Entry'

// TODO if Login add the reserve function

// get the coming soon reviews
export default function ComingSoon(): ReactElement {

    const books = useEntryApi<Book[]>('/nextBooks')

    if (!books) {
        return <h1>Aloha Loading</h1>
    }

    const dummyRelease = " 24 December 2021"
    return (
        <div className="ui segment basic">
            <div className="ui cards olive">
                {books.map((book =>
                    <div key={book.id} className="card">
                        <div className="image">
                            <img src={book.img} />
                        </div>
                        <div className="content">
                            <div className="header">{book.title}</div>
                            <div className="meta">
                                <h4>{book.bookTitle}</h4>
                            </div>
                            <div className="description">
                                {book.entry}
                            </div>
                        </div>
                        <div className="extra content">
                            <span className="right floated">
                                {dummyRelease}
                            </span>
                            <span>
                                <i className="star icon"></i>
                                Vormerken
                            </span>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
