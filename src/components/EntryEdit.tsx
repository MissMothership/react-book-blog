import React, { ReactElement } from 'react'
import { useParams } from 'react-router'
import { useEntryApi } from '../hooks/useEntryApi'
import { Entry } from '../types/Entry'
import EntryForm from './EntryForm'

// TODO extra Folder for Entrys
// TODO only if Admin (add Login)

/**
 * Get review with the Entry id from params
 * Returning the Entry Form to edit the selected review
 * passing props
 */
export default function EntryEdit(): ReactElement {

    const { review } = useParams<{ review: string }>()
    const entry = useEntryApi<Entry>(`/entries/${review}`)

    if (!entry) { return <h1>LOADING</h1> }
    return (
        <EntryForm
            id={entry.id}
            img={entry.img}
            title={entry.title}
            contentEntry={entry.contentEntry}
            contentEntryShort={entry.contentEntryShort}
            conclusionEntry={entry.conclusionEntry}
            bookTitle={entry.bookTitle}
            subtitle={entry.subtitle}
            bookAuthors={entry.bookAuthors}
            publisher={entry.publisher}
            isEdit={true}
        />
    )
}
