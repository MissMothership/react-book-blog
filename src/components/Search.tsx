import React, { ChangeEvent, ReactElement, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { entryApi } from '../shared/EntryApi'
import { Entry } from '../types/Entry'

interface Props {
    className?: string
    headline?: string
}

// Search function that returns matching results if at least 3 letters or numbers have been typed

export default function Search(props: Props): ReactElement {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState<Entry[]>([])
    const history = useHistory()

    const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        console.log("Search")
        setSearchTerm(inputValue)
        if (inputValue.length > 3) {
            entryApi('get', `/reviews/search/${inputValue}`, setSearchResults)
        } else {
            setSearchResults([])
        }

    }

    const onClick = (entry: Entry) => {
        setSearchResults([])
        setSearchTerm('')
        history.push(`/reviews/${entry.id}`)
    }

    // Display the searching results
    return (
        <>
            {props.headline && <h3>{props.headline}</h3>}
            <div className={`ui seach ${props.className}`}>
                <div className="item ui transparent icon input">
                    <input type="text" onChange={onSearch} placeholder='Search' className="prompt" value={searchTerm} />
                    <i className="search link icon"></i>
                </div>
                {searchResults.length > 0 &&
                    <div className='ui results transition visible segment teal'>
                        {searchResults.map(entry =>
                            <span onClick={() => onClick(entry)} key={entry.id} className="result">
                                <div className="ui title 3rem">{entry.bookTitle} - {entry.subtitle}</div>
                                {entry.bookAuthors} <br />
                                {entry.publisher}
                                <div className="ui divider"></div>
                            </span>

                        )}
                    </div>
                }
            </div>
        </>
    )
}
