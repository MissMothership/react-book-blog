import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { useEntryApi } from '../hooks/useEntryApi'
import { Book, Entry } from '../types/Entry'

// get all review entrys and the coming Soon entries

export default function Home(): ReactElement {

    const entries = useEntryApi<Entry[]>('/entries')
    const books = useEntryApi<Book[]>('/nextBooks')

    if (!entries || !books) {
        return <h1>Aloha Loading</h1>
    }

    // get the latest two review entries
    const lastTwo = entries.slice(-2);
    // TODO find a smarter way to do this.
    // declaring two constants from the coming soon entries
    const bookOne = books[0]
    const bookTwo = books[1]

    return (
        <>
            <div className="ui segment basic center aligned container">
                <h1>Latest Reviews</h1>
            </div>
            {lastTwo.map((entry) =>
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
            <div className="ui vertical stripe quote segment">
                <div className="ui segment basic center aligned container">
                    <h1>Whats Coming next</h1>
                </div>
                <div className="ui equal width stackable internally celled grid">
                    <div className="center aligned row">
                        <div className="column">
                            <h3 >{bookOne.title}</h3>
                            <h5>{bookOne.bookTitle} - {bookOne.subtitle}</h5>
                            <p>
                                <img
                                    className="ui image"
                                    src={bookOne.img}
                                />
                                {bookOne.entry}
                            </p>
                        </div>
                        <div className="column">
                            <h3 >{bookTwo.title}</h3>
                            <h5>{bookTwo.bookTitle} - {bookTwo.subtitle}</h5>
                            <p>
                                <img
                                    className="ui image"
                                    src={bookTwo.img}
                                />
                                {bookTwo.entry}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="ui vertical stripe segment">
                <div className="ui text container">
                    <h3 className="ui header">Aloha DummyText</h3>
                    <p>
                        Pie gingerbread tiramisu marzipan gingerbread soufflé muffin.
                        Carrot cake oat cake dragée wafer bear claw lemon drops danish carrot cake.
                        Brownie danish lollipop chocolate cake toffee wafer biscuit.
                        Liquorice lemon drops chocolate bar macaroon cotton candy ice cream sweet roll.
                    </p>
                    <a className="ui large button">Read More</a>
                    <h4 className="ui horizontal header divider">
                        <a href="#root"> Lorem Ipsum</a>
                    </h4>
                    <h3 className="ui header">Did We Tell You About Our Aliens?</h3>
                    <p>
                        Fruitcake tiramisu marshmallow topping dragée jujubes cupcake donut.
                        Gingerbread cake brownie brownie pie. Wafer sesame snaps topping jujubes dragée bear claw gummies.
                    </p>
                    <a className="ui large button">Im Still Quite Interested</a>
                </div>
            </div>
        </>
    )
}
