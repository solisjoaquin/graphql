'use strict'

const courses = [
    {
        _id: 'anyid',
        title: 'Mi titulo',
        teacher: 'Mi profesor',
        description: 'una des',
        topic: 'descr'
    },
    {
        _id: 'anyid1',
        title: 'Mi titulo 2',
        teacher: 'Mi profesor',
        description: 'una des',
        topic: 'descr'
    },
    {
        _id: 'anyid2',
        title: 'Mi titulo 3',
        teacher: 'Mi profesor',
        description: 'una des',
        topic: 'descr'
    }
]

module.exports = {
    Query: {
        getCourses: () => {
            return courses
        },

        getCourse: (root, args) => {
            const course = courses.filter(course => course._id === args.id)
            return course.pop()
        }
    }
}