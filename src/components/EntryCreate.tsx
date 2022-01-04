import React, { ReactElement } from 'react'
import EntryForm from './EntryForm'

// TODO extra Folder for Entrys
// TODO only if Admin (add Login)

// Returning the Entry Form 
export default function EntryCreate(): ReactElement {

    return (
        <EntryForm
            img=""
            title=""
            contentEntry=""
            contentEntryShort=""
            conclusionEntry=""
            bookTitle=""
            subtitle=""
            bookAuthors={['']}
            publisher=""
            isEdit={false}

        />
    )
}
