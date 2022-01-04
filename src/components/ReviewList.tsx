import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useEntryApi } from '../hooks/useEntryApi'
import { Entry } from '../types/Entry'

// get all review entries
function ReviewList(): ReactElement {

    const entries = useEntryApi<Entry[]>('/entries')

    if (!entries) { return <h1>Aloha Loading</h1> }

    return (
        <>
            {entries.map((entry) =>
                <div key={entry.id} className="ui vertical stripe segment">
                    <div className="ui middle aligned stackable grid container">
                        <div className="row">
                            <div className="eight wide column">
                                <h3 className="ui header">{entry.bookTitle} - {entry.subtitle}</h3>
                                <p>
                                    {entry.contentEntryShort}
                                </p>
                            </div>
                            <div className="six wide right floated column">
                                <img
                                    className="ui large bordered rounded image"
                                    src={entry.img}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="center aligned column">
                                <Link to={`/reviews/${entry.id}`} className="ui large teal button">Check it Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default ReviewList