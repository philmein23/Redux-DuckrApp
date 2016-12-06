// Users

{
    type: AUTH_USER,
    uid,
}

{
    type: UNAUTH_USER,

}

{
    type: FETCHING_USER,
}

{
    type: FETCHING_USER_FAILURE,
    error: 'Error fetching user'
}

{
    type: FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp
}

// Ducks

{
    type: FETCHING_DUCK
}

{
     type: FETCHING_DUCK_ERROR,
     error: 'Error fetching duck'
}

{
    type: FETCHING_DUCK_SUCCESS,
    duck,
}

{
    type: REMOVE_FETCHING
}

{
    type: ADD_DUCK,
    duck
}


{
    type: ADD_MULTIPLE_DUCKS,
    ducks
}

// Feed

{
    type: SETTING_FEED_LISTENER
}

{
    type: SETTING_FEED_LISTENER_ERROR,
    error: 'Error fetching feeds'
}

{
    type: SETTING_FEED_LISTENER_SUCCESS,
    duckIds,
}

{
    type: ADD_NEW_DUCK_ID_TO_FEED,
    duckId,
}

{
    type: RESET_NEW_DUCKS_AVAILABLE
}

// LISTENERS

{
    ADD_LISTENER,
    listenerId
}

// Modal

{
    type: OPEN_MODAL,
}

{
    type: CLOSE_MODAL
}

{
    type: UPDATE_DUCK_TEST,
    newDuckText,
}

// Replies

{
    type: FETCHING_REPLIES,
}

{
    type: FETCHING_REPLIES_ERROR,
    error: 'Error fetching replies'
}

{
    type: FETCHING_REPLIES_SUCCESS,
    replies,
    duckId,
    lastUpdated: Date.now()
}

{
    type: ADD_REPLY,
    duckId,
    reply,
}

{
    ADD_REPLY_ERROR,
    error: 'Error adding reply'
}

{
    type: REMOVE_REPLY,
    replyId,
    duckId,
}

//Like Count

{
    type: FETCHING_COUNT,
}

{
    type: FETCHING_COUNT_ERROR,
    error: 'Error fetching duck\'s like count',
}

{
    type: FETCHING_COUNT_SUCCESS,
    duckId,
    count,
}

// Users Ducks

{
    type: FETCHING_USERS_DUCKS,
    uid,
}

{
    type: FETCHING_USERS_DUCKS_ERROR,
    error: 'Error fetching Users Duck Ids',
}

{
    type: FETCHING_USERS_DUCKS_SUCCESS,
    uid,
    duckIds,
    lastUpdated,
}

{
    type: ADD_SINGLE_USERS_DUCK,
    uid,
    duckIds,
    lastUpdated,
}

// User Likes

{
    type: FETCHING_LIKES,
}

{
    type: FETCHING_LIKES_ERROR,
    error: 'Error fetching LIKES',
}

{
    type: FETCHING_LIKES_SUCCESS,
    likes,
}

{
    type: ADD_LIKE,
    duckId,
}

{
    type: REMOVE_LIKE,
    duckId,
}
