var expect = require('chai').expect;

var feedReducer = require('./../../../src/reducers/feed.reducer').default;
var REQUEST_POSTS = require('./../../../src/actions/feed.actions').REQUEST_POSTS;
var RECEIVE_POSTS = require('./../../../src/actions/feed.actions').RECEIVE_POSTS;
var POST_ADDED = require('./../../../src/actions/post-edit-form.actions').POST_ADDED;

describe('feed.reducer', function () {

    describe('request_posts action', function () {

        var action = {type: REQUEST_POSTS};
        var newState = feedReducer({}, action);

        it('should assign true to isFetching', function () {
            expect(newState.isFetching).to.be.true;
        });
    });

    describe('receive_posts action', function () {

        var posts = [{id: 1, title: 'post 1'}];
        var action = {type: RECEIVE_POSTS, payload: posts};
        var newState = feedReducer({}, action);

        it('should save all received items', function () {
            expect(newState.posts).to.be.equal(posts);
        });

        it('should assign true to isFetching', function () {
            expect(newState.isFetching).to.be.false;
        });
    });

    describe('post_added action', function () {

        var post = {id: 1, title: 'post 1'};
        var action = {type: POST_ADDED, payload: post};
        var newState = feedReducer({}, action);

        it('should add new post to the beginning of array', function () {
            expect(newState.posts[0]).to.be.equal(post);
        });
    });
});