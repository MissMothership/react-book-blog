import React, { ReactElement } from 'react'
import { useParams } from 'react-router-dom'
import { useEntryApi } from '../../hooks/useEntryApi'
import { Author } from '../../types/Entry'
import AuthorForm from './AuthorForm'

// TODO only if Admin (add Login)

/**
 * Get Author with the Author id from params
 * Returning the Author Form to edit the selected Author
 * passing props
 */
export default function AuthorEdit(): ReactElement {
    const { authorId } = useParams<{ authorId: string }>()
    const author = useEntryApi<Author>(`/authors/${authorId}`)

    if (!author) { return <h1>LOADING</h1> }
    return (
        <AuthorForm
            id={author.id}
            img={author.img}
            authorName={author.authorName}
            isEdit={true}
        />
    )
}
