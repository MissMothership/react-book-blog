import React, { ReactElement } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import AuthorCreate from './Author/AuthorCreate'
import AuthorDetails from './Author/AuthorDetails'
import AuthorEdit from './Author/AuthorEdit'
import AuthorList from './Author/AuthorList'
import ComingSoon from './ComingSoon'
import EntryCreate from './EntryCreate'
import EntryEdit from './EntryEdit'
import EntryForm from './EntryForm'
import Home from './Home'
import Review from './Review'
import ReviewList from './ReviewList'

// Declaring routes
export default function Routes(): ReactElement {
    return (
        <>
            <Switch>
                <Route path="/reviews/coming-soon">
                    <ComingSoon />
                </Route>
                <Route path="/reviews/new">
                    <EntryCreate />
                </Route>
                <Route path="/reviews/:review/edit">
                    <EntryEdit />
                </Route>
                <Route path="/reviews/:review">
                    <Review />
                </Route>
                <Route path="/reviews">
                    <ReviewList />
                </Route>
                <Route path="/authors/new">
                    <AuthorCreate />
                </Route>
                <Route path="/authors/:authorId/edit">
                    <AuthorEdit />
                </Route>
                <Route path="/authors/:authorId">
                    <AuthorDetails />
                </Route>
                <Route path="/authors">
                    <AuthorList />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
            </Switch>

        </>
    )
}