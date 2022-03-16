const skills = [
    {no: 1, name: 'HTML', known: true},
    {no: 2, name: 'Javascript', known: true},
    {no: 3, name: 'React', known: false},
    {no: 4, name: 'Express', known: true}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills
}
function getOne(no) {
    no = parseInt(no)
    return skills.find( skill => skill.no === no)
}
console.log(getOne(1))