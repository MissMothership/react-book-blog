import React, { ReactElement } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEntryApi } from '../hooks/useEntryApi'
import { entryApi } from '../shared/EntryApi'
import { Author, Entry } from '../types/Entry'

// TODO extra Folder for Reviews

// get Review with the entry id from params
export default function Review(): ReactElement {

    const history = useHistory()
    const { review } = useParams<{ review: string }>()
    const entry = useEntryApi<Entry>(`/entries/${review}`)

    // TODO get the authors associated to the book and replace it with the dummy data
    //const author = useEntryApi<Author>(`/authors/${entry.bookAuthors}`)

    const dummyImg = "https://upload.wikimedia.org/wikipedia/commons/c/c5/Jennifer_Armentrout_at_BookCon_%2816059%29.jpg"
    const dummyLink = "/reviews/author/jennifer-l-armentrout"


    if (!entry) { return <h1>Aloha LOADING</h1> }

    // TODO add query if you really wanna delete the entry
    // Deleting an Entry and redirect to the review list
    const onDelete = () => {
        entryApi('delete', `/entries/${entry.id}`, onGoToReviews)
    }

    const onGoToReviews = () => {
        console.log("Deleted")
        history.push('/reviews')
    }


    return (
        <>
            <div className='ui basic segment center aligned'>
                <h1>{entry.title}</h1>
            </div>
            <div className="ui grid center aligned">
                <div className='ui twelve wide column'>
                    <div className='ui segment teal center aligned'>
                        <h3>Worum gehts?</h3>
                        <p>{entry.contentEntryShort}</p>
                    </div>
                </div>
                <div className='ui twelve wide column'>
                    <div className='ui segment blue center aligned'>
                        <h3>Inhaltliches</h3>
                        <p>{entry.contentEntry}{entry.contentEntry}</p>
                    </div>
                </div>
                <div className='ui twelve wide column'>
                    <div className='ui segment violet center aligned'>
                        <h3>Fazit</h3>
                        <p>{entry.conclusionEntry}{entry.conclusionEntry}</p>
                    </div>
                </div>
                <div className='ui twelve wide column'>
                    <div className='ui segment olive center aligned'>
                        {entry.bookAuthors.map((author) =>
                            <h3 key={author}>{author}</h3>
                        )}
                        <img
                            className="ui avatar small image spaced"
                            src={dummyImg} alt="" />

                        <Link to={`${dummyLink}`} >
                            <p>Check out other reviews of other books by jennifer l Armentrout</p>
                        </Link>
                    </div>
                </div>
                <div className='ui twelve wide column'>
                    <div className='ui segment orange center aligned'>
                        <Link to={`${entry.id}/edit`} className="ui large olive button" style={{ width: "100px" }}>
                            Edit
                        </Link>
                        <button onClick={onDelete} className="ui large red button" style={{ width: "100px" }} >
                            Delete
                        </button>
                    </div>
                </div>
            </div>

        </>

    )
}

