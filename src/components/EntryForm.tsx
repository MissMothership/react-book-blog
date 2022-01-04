import React, { ReactElement, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { entryApi } from '../shared/EntryApi'

// declaring interface types for Props
interface Props {
    id?: number
    img: string;
    title: string;
    contentEntry: string;
    contentEntryShort: string;
    conclusionEntry: string;
    bookTitle: string;
    subtitle: string;
    bookAuthors: string[];
    publisher: string;
    isEdit: boolean
}

// passing Props, declaring constants for each prop
export default function EntryForm(props: Props): ReactElement {

    const history = useHistory()

    const [id, setId] = useState(props.id)
    const [img, setImg] = useState(props.img)
    const [title, setTitle] = useState(props.title)
    const [contentEntry, setContentEntry] = useState(props.contentEntry)
    const [contentEntryShort, setContentEntryShort] = useState(props.contentEntryShort)
    const [conclusionEntry, setConclusionEntry] = useState(props.conclusionEntry)
    const [bookTitle, setBookTitle] = useState(props.bookTitle)
    const [subtitle, setSubtitle] = useState(props.subtitle)
    const [bookAuthor, setBookAuthors] = useState<string[]>(props.bookAuthors)
    const [publisher, setPublisher] = useState(props.publisher)

    /* 
     * Calling Api and check if edit or create an Entry
     */
    const formEntry = (): any => {
        return { id, img, title, contentEntry, contentEntryShort, conclusionEntry, bookTitle, subtitle, bookAuthor, publisher }
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit", e, formEntry());
        entryApi(
            props.isEdit ? 'put' : 'post',
            props.isEdit ? `/entries/${props.id}` : '/entries',
            () => {
                history.push(props.isEdit ? `/reviews/${props.id}` : '/reviews')
            }, formEntry())
    }

    // onClick Add or Remove new Author field 
    const onChangeAuthors = (index: number, key: string, newValue: string) => {
        setBookAuthors(currentAuthor => {
            const copyAuthor = [...currentAuthor]
            copyAuthor[index] = newValue
            return copyAuthor
        })
    }

    const onAddAuthor = () => {
        setBookAuthors(currentAuthor => [...currentAuthor, ''])
    }

    const onRemoveAuthor = () => {
        setBookAuthors(currentAuthor => {
            const copyAuthor = [...currentAuthor]
            if (copyAuthor.length > 1) {
                copyAuthor.pop()
            }
            return copyAuthor
        })
    }

    return (
        <>
            <div className="ui segment basic">
                <div className="ui segment pink center aligned">
                    <form className="ui form" onSubmit={onSubmit}>
                        <div className="ui segment purple">
                            <h4 className="ui dividing header">Book Information</h4>
                            <div className="field">
                                <div className="two fields">
                                    <div className="field">
                                        <input onChange={(e) => setBookTitle(e.target.value)} type="text" name="title" placeholder="Booktitle" value={bookTitle} />
                                    </div>
                                    <div className="field">
                                        <input onChange={(e) => setSubtitle(e.target.value)} type="text" name="subtitle" placeholder="Subtitle" value={subtitle} />
                                    </div>
                                </div>
                            </div>
                            <div className="ui field ">
                                <div onClick={onAddAuthor} className="ui button small purple basic" style={{ width: "150px" }}>Add Author</div>
                                <div onClick={onRemoveAuthor} className="ui button small purple basic" style={{ width: "150px" }}>Remove Author</div>
                            </div>
                            {/* TODO Dropdown auswahl für die angelegten Authoren */}
                            <div className="field">
                                <div className="two fields">
                                    {bookAuthor.map((author, index) =>
                                        <div key={index} className="field">
                                            <input onChange={(e) => onChangeAuthors(index, 'author', e.target.value)} type="text" name="author" placeholder="Author" value={author} />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="field">
                                <div className="two fields">
                                    <div className="field">
                                        <input onChange={(e) => setImg(e.target.value)} type="text" name="image" placeholder="Image-URL" value={img} />
                                    </div>
                                    <div className="field">
                                        <input onChange={(e) => setPublisher(e.target.value)} type="text" name="publisher" placeholder="Publisher" value={publisher} />
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <img className="ui small image" src={img} alt="" />
                            </div>
                        </div>
                        <div className="ui segment purple">
                            <h4 className="ui dividing header">
                                Eintragsüberschrift
                            </h4>
                            <div className="field">
                                <input onChange={(e) => setTitle(e.target.value)} type="text" name="entry_title" placeholder="Entry Title" value={title} />
                            </div>
                            <h4 className="ui dividing header">
                                Kurz Inhalt
                            </h4>
                            <div className="field">
                                <textarea onChange={(e) => setContentEntryShort(e.target.value)} rows={5}>{contentEntryShort}</textarea>
                            </div>
                            <h4 className="ui dividing header">
                                Inhalt
                            </h4>
                            <div className="field">
                                <textarea onChange={(e) => setContentEntry(e.target.value)} rows={5}>{contentEntry}</textarea>
                            </div>
                            <h4 className="ui dividing header">
                                Fazit
                            </h4>
                            <div className="field">
                                <textarea onChange={(e) => setConclusionEntry(e.target.value)} rows={5} >{conclusionEntry}</textarea>
                            </div>
                        </div>
                        <button className="ui button olive large basic" style={{ width: "100px" }}>Save</button>
                        <div className="ui button orange large basic" style={{ width: "100px" }}>Cancel</div>
                    </form>
                </div>
            </div>
        </>
    )
}
