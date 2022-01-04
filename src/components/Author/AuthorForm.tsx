import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { entryApi } from '../../shared/EntryApi'


// declaring interface types for Props
interface Props {
    id?: number
    img: string;
    authorName: string
    isEdit: boolean
}

// passing Props, declaring constants for each prop
export default function AuthorForm(props: Props) {

    const history = useHistory()

    const [id, setId] = useState(props.id)
    const [img, setImg] = useState(props.img)
    const [authorName, setAuthorName] = useState(props.authorName)
    const [isEdit, setIsEdit] = useState(props.isEdit)


    /* 
     * Calling Api and check if edit or create an Author
     */
    const formAuthor = (): any => {
        return { id, img, authorName }
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("submit", e, formAuthor());
        entryApi(
            isEdit ? 'put' : 'post',
            isEdit ? `/authors/${id}` : '/authors',
            () => {
                history.push(isEdit ? `/authors/${id}` : '/authors')
            }, formAuthor())
    }

    // Form to Create or Edit an Author
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
                                        <input onChange={(e) => setAuthorName(e.target.value)} type="text" name="author-name" placeholder="Author Name" value={authorName} />
                                    </div>
                                    <div className="field">
                                        <input onChange={(e) => setImg(e.target.value)} type="text" name="image" placeholder="Image-URL" value={img} />
                                    </div>
                                </div>
                            </div>
                            <div className="field">
                                <div className="two fields">
                                    <div className="field">
                                        <img className="ui small image" src={img} alt="" />
                                    </div>
                                </div>
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
