const skills = [
    {no: 1, name: 'HTML', known: true},
    {no: 2, name: 'Javascript', known: true},
    {no: 3, name: 'React', known: false},
    {no: 4, name: 'Express', known: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills
}
function getOne(no) {
    no = parseInt(no)
    return skills.find( skill => skill.no === no)
}
function create(skill) {
    skill.id = skills.length + 1
    skill.known = false
    skills.push(skill)
}
function deleteOne(no) {
    no = parseInt(no)
    const idx = skills.findIndex(skill => skill.no === no)
    skills.splice(idx, 1)
}