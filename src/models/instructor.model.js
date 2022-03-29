const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const instructorSchema = mongoose.Schema(
    {
	name: {
	    type: String,
	    required: true,
	    trim: true,
	},
	courseLoad: {
	    type: Number,
	    required: true,
	},
	specialties: {
	    type: [Number],
	    required: true,
	}
    }
);

instructorSchema.plugin(toJSON);
instructorSchema.plugin(paginate);
/**
 * @typedef Instructor
 */
const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
