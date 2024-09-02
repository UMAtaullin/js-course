const developers = [
    {
        id: 1,
        fullName: 'Anton Petrov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'React'],
        salary: 1000,
    },
    {
        id: 2,
        fullName: 'Ivan Ivanov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'Vue'],
        salary: 950,
    },
    {
        id: 3,
        fullName: 'Albert Sidorov',
        skills: ['HTML', 'CSS', 'JavaScript', 'Git', 'jQuery'],
        salary: 850,
    },
];

function updateSalary(developer){
    return {
        ...developer,
        salary: developer.salary + 500,
    }
}

function updateSkills(developer){
    return {
        ...developer,
        skills: [...developer.skills, 'TypeScript']
    }
}

/**
 * Функция использует map() для обхода каждого объекта в массиве developers. Для каждого разработчика она сначала вызывает updateSalary и updateSkill.
 * @param {object} developers 
 * @returns новый массив с обновленными данными
 */
function createMiddleDevelopers(developers){
    return (
        developers.map(el=>{const update = updateSalary(el)
            return updateSkills(update)
        })
    )
}

const middleDevelopers = createMiddleDevelopers(developers)

console.log(middleDevelopers)