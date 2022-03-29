const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const classSchema = mongoose.Schema(
    {
	section: {
	    type: String,
	    required: true,
	    trim: true,
	},
	time: {
	    type: [Number],
	    required: true,
	},
	classID: {
	    type: [Number],
	    required: true,
	}
    }
);

classSchema.plugin(toJSON);
classSchema.plugin(paginate);
/**
 * @typedef Class
 */
const Class = mongoose.model('Class', classSchema);

module.exports = Class;
