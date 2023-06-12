const students = [
    { id: '12345', name: 'John Smith' },
    { id: '67890', name: 'Emily Johnson' },
    { id: '23456', name: 'Michael Davis' }
];

module.exports = {
    getAll: function () {
        return students;
    },
    getOne: function (id) {
        return students.find(student => student.id === id);
    }
};