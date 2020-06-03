import * as basics from "./basics"
import * as api from './api'
import * as utils from '../utils'
import * as cst from "../constants"


/**
 *
 * ---- BIGPICTURES ----
 * 
 **/


export const getBigPicture = (bpId) => {
  return (dispatch) => {
    api.getItem(
      dispatch, 
      bpId,
      "bigpictures",
      []
    )
  }
}

export const postBigPicture = (bigPicture) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys(bigPicture),
      "bigpictures",
      basics.addBigPicture,
      "/",
      "POST"
    )
  }
}

export const patchBigPicture = (bigPicture) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys(bigPicture),
      "bigpictures",
      basics.addBigPicture,
      `/${bigPicture.id}/`,
      "PATCH"
    )
  }
}

export const deleteBigPicture = (id) => {
  return (dispatch) => {
    api.deleteItem(
      dispatch,
      id,
      "bigpictures"
    )
  }
}

export const getSubjects = (page, options, requestId) => {
  return (dispatch) => {
    api.getCollection(
      dispatch,
      "subjects",
      page,
      utils.removeEmptyKeys(options),
      options.reference == undefined ? "getSubjects" : "getReferences",
      requestId
    )
  }
}

export const getOwnSubjects = (page, options, requestId) => {
  return (dispatch) => {
    api.getCollection(
      dispatch,
      "ownsubjects",
      page,
      utils.removeEmptyKeys(options),
      "getOwnSubjects",
      requestId
    )
  }
}

export const getBigPictureResults = (bigpictureId) => {
  return (dispatch) => {
    api.get(
      dispatch,
      `bigpictures/${bigpictureId}/results/`,
      { bigpictureId },
      "getBigPictureResults",
      false
    )
  }
}


/**
 *
 * ---- RATINGS ----
 * 
 **/


export const postVote = (vote) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys(vote),
      "ratings",
      basics.addRating,
      "/",
      "POST"
    )
  }
}

export const patchRating = (rating) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys(rating),
      "ratings",
      basics.addRating,
      `/${rating.id}/`,
      "PATCH"
    )
  }
}

export const deleteVote = (id) => {
  return (dispatch) => {
    api.deleteItem(
      dispatch,
      id,
      "ratings"
    )
  }
}

export const getRating = (ratingId) => {
  return (dispatch) => {
    api.getItem(
      dispatch, 
      ratingId,
      "ratingswithcontext",
      []
    )
  }
}

export const getRatings = (page, options, requestId) => {
  let requestName = "getRatings"
  if (options.bigpicture)
    requestName = "getBpRatings"
  if (options.rating)
    requestName = "getRatingRatings"
  if (options.author)
    requestName = "getUserRatings"
  return (dispatch) => {
    api.getCollection(
      dispatch,
      "ratings",
      page,
      utils.removeEmptyKeys(options),
      requestName,
      requestId
    )
  }
}

export const getOwnRatings = (page, options, requestId) => {
  return (dispatch) => {
    api.getCollection(
      dispatch,
      "ownratings",
      page,
      utils.removeEmptyKeys(options),
      "getOwnRatings",
      requestId
    )
  }
}

export const getRatingResults = (ratingId) => {
  return (dispatch) => {
    api.get(
      dispatch,
      `ratings/${ratingId}/results/`,
      { ratingId },
      "getRatingResults",
      false
    )
  }
}

export const getEndorsments = (page, options, requestId) => {
  return (dispatch) => {
    api.getCollection(
      dispatch,
      "endorsments",
      page,
      utils.removeEmptyKeys(options),
      "getEndorsments",
      requestId
    )
  }
}


export const postEndorsment = (endorsment) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys(endorsment),
      "endorsments",
      basics.addEndorsment,
      "/",
      "POST"
    )
  }
}

export const deleteEndorsment = (id) => {
  return (dispatch) => {
    api.deleteItem(
      dispatch,
      id,
      "endorsments"
    )
  }
}


/**
 *
 * ---- USERS ----
 * 
 **/


export const getUser = (id) => {
  return (dispatch) => {
    api.getItem(
      dispatch,
      id,
      "users",
      []
    )
  }
}

export const patchUser = (user) => {
  return (dispatch) => {
    api.sendItem(
      dispatch, 
      utils.removeEmptyKeys(user),
      "users",
      basics.addUser,
      `/${user.id}/`,
      "PATCH"
    )
  }
}


/**
 *
 * ---- SUBSCRIPTIONS ----
 * 
 **/

export const getSubscriptions = (page, options, requestId) => {
  return (dispatch) => {
    api.getCollection(
      dispatch, 
      "subscriptions",
      page,
      utils.removeEmptyKeys(options),
      "getSubscriptions",
      requestId
    )
  }
}

export const unfollow = (targetId) => {
  return (dispatch) => {
    api.get(
      dispatch,
      `users/${targetId}/unfollow/`,
      { targetId },
      "unfollow",
      false
    )
  }
}

export const follow = (author, target_id) => {
  return (dispatch) => {
    api.sendItem(
      dispatch,
      utils.removeEmptyKeys({ author, target_id }),
      "subscriptions",
      basics.createSubscription,
      "/",
      "POST"
    )
  }
}

