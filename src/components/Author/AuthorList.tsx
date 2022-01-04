import React from 'react'
import { Link } from 'react-router-dom'
import { useEntryApi } from '../../hooks/useEntryApi'
import { Author } from '../../types/Entry'

/* 
 * Select and mapping all Authors
*/
export default function AuthorList() {

    const authors = useEntryApi<Author[]>('/authors')

    if (!authors) { return <h1>LOADING AUTHORS</h1> }
    return (
        <>
            <div className="ui segment basic">
                <div className="ui grid center aligned">
                    {authors.map((author) =>
                        <div className="ui five wide column" key={author.id}>
                            <Link to={`authors/${author.id}`}>
                                <div className="ui segment orange">
                                    <h3>{author.authorName}</h3>
                                    <img src={author.img} className="ui image avatar small" style={{ height: "150px" }} alt="" />
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
