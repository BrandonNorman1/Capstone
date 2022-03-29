const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const courseSchema = mongoose.Schema(
    {
	name: {
	    type: String,
	    required: true,
	    trim: true,
	},
	specialties: {
	    type: [Number],
	    required: true,
	},
	courseID: {
	    type: [Number],
	    required: true,
	}
    }
);

courseSchema.plugin(toJSON);
courseSchema.plugin(paginate);
/**
 * @typedef Course
 */
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
