const { createTeacher, getTeacherById, getTeachers } = require('../../services/teacher');

exports.createTeacher = ({ input }) => createTeacher(input);

exports.teacher = ({ id }) => getTeacherById(id);

exports.teachersList = ({ page, pageSize }) => getTeachers(page, pageSize);
