import React, { ReactElement } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEntryApi } from '../../hooks/useEntryApi'
import { entryApi } from '../../shared/EntryApi'
import { Author, Entry } from '../../types/Entry'

export default function AuthorDetails() {

    const history = useHistory()

    // get Author with the Author id from params
    const { authorId } = useParams<{ authorId: string }>()
    const author = useEntryApi<Author>(`/authors/${authorId}`)

    // selecting all Entrys which includes the selected Author 
    const bookEntrys = useEntryApi<Entry[]>(`/author/search/${authorId}`)

    // if author or BookEntrys not found show Loading Spinner
    // TODO Add Loading Spinner
    if (!author || !bookEntrys) { return <h1>LOADING AUTHOR</h1> }

    // Delete this Author and return to the Authors page by pushing to the browserhistroy
    const onDelete = () => {
        entryApi('delete', `/authors/${author.id}`, onGoToAuthors)
    }

    const onGoToAuthors = () => {
        console.log("Deleted")
        history.push('/authors')
    }

    return (
        <>
            <div className="ui segment basic">
                <div className="ui grid center aligned">
                    <div className="twelve wide column">
                        <div className="ui segment orange center aligned">
                            <h3>{author.authorName}</h3>
                            <img src={author.img} className="ui image avatar small" style={{ height: "150px" }} alt="" />
                        </div>
                    </div>
                    {bookEntrys.map((entry) =>

                        <div key={entry.id} className="twelve wide column">
                            <div className="ui segment teal">
                                <h2>{entry.bookTitle} - {entry.subtitle}</h2>
                                <p>
                                    {entry.contentEntryShort}
                                </p>
                                <div className="six wide centered column">
                                    <img
                                        className="ui medium bordered rounded image centered"
                                        src={entry.img}
                                    />
                                </div>
                                <div className="ui segment basic">
                                    <Link to={`/reviews/${entry.id}`} className='ui button teal medium'>Read Now</Link>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='ui twelve wide column'>
                        <div className='ui segment orange center aligned'>
                            <Link to={`/authors/${author.id}/edit`} className="ui button large olive" style={{ width: "100px" }}>Edit</Link>
                            <button onClick={onDelete} className="ui large red button" style={{ width: "100px" }} >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
