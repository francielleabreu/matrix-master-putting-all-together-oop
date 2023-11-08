// Exercise 1 and 2
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Hi, my name is ${this.name} and I'm ${this.age} years old.`;
    }
}

const person1 = new Person("John", 25);

function describePerson(callback) {
    callback.call(person1);
}

function customCallback() {
    document.getElementById('personIntroduction').textContent = person1.introduce();
}

document.getElementById('introducePerson').addEventListener('click', () => {
    describePerson(customCallback);
});

// Exercise 3
function wait(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Promise resolved after ' + milliseconds + ' milliseconds.');
        }, milliseconds);
    });
}

document.getElementById('waitForPromise').addEventListener('click', () => {
    wait(2000)
        .then((result) => {
            document.getElementById('promiseResult').textContent = result;
        })
        .catch((error) => {
            console.error(error);
        });
});