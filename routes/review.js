const express = require("express");
const router = express.Router({mergeParams: true});
const mongoose =  require("mongoose");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/reviews.js");
const Listing = require("../models/listing.js");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");
const { createReview } = require("../controllers/reviews.js");

const reviewController = require("../controllers/reviews.js");
const { createListing } = require("../controllers/listings.js");

//reviews
//Post review route
router.post("/",isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//delete review Route

router.delete("/:reviewId", isLoggedIn, isReviewAuthor,  wrapAsync(reviewController.destroyReview)); 

module.exports = router;