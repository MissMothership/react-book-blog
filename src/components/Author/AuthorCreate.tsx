import React, { ReactElement } from 'react'
import AuthorForm from './AuthorForm'


// TODO only if Admin (add Login)

// Returning the Author form to create a New Author
export default function AuthorCreate(): ReactElement {
    return (
        <AuthorForm
            img=""
            authorName=""
            isEdit={false}

        />
    )
}
