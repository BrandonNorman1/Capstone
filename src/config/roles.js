const allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};

// manageUsers, getUsers, manageCourses, getCourses, manageInstructors, getInstructors, manageClasses, getClasses, manageSchedules, getSchedules, generateSchedules
// root, admin, assistant, public
// root = all permissions
// admin = all except Users permissions
// Assistant = all except Users and data entry
// public = all get actions except for getUsers