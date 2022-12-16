const student = "Матвеев Кирилл Дмитриевич"; // Очевидно, что здесь ваши личные Фамилия, Имя и Отчество

document.getElementById("student").innerHTML = student;



class Person {
    constructor (person_data) {
        let data = person_data.split(', ');
        this.name = data[0];
        this.gender = data[1];
        this.birth = data[2];
        this.format_birth();
    }

    format_birth () {
        let birth = this.birth.split('.');
        this.birth = `${birth[2]}/${birth[1]}/${birth[0]}`;
        return this.birth
    }

    calculate_age() {
        let now = new Date();
    
        let birthday = new Date(this.birth);

        let birthday_this_year = new Date(birthday);
        birthday_this_year.setFullYear(now.getFullYear());
    
        let age_diff = new Date(now - birthday);
        let age = Math.abs(age_diff.getFullYear() - 1970);
    
        if ((now - birthday_this_year) < 0) {
            age = age - 1;
        } 
        return age
      }
    
    format_name() {
        let full_name = this.name.split(' ');
        full_name = `${full_name[0]} ${full_name[1].substring(0, 1)}. ${full_name[2].substring(0, 1)}.`;
        return full_name;
    }

    get_gender() {
        return this.gender == 'мужчина' ? 'М': 'Ж';
    }
}


const guest_string = `
Пономарев Андрей Алексеевич, мужчина, 11.12.1980
Рыбакова Алина Семёновна, женщина, 16.04.1974
Молчанов Даниил Ильич, мужчина, 21.03.1984
Смирнова София Львовна, женщина, 02.01.1987
Владимиров Артём Григорьевич, мужчина, 07.12.1990
Маслова Елизавета Егоровна, женщина, 10.10.1997
Назарова Вера Романовна, женщина, 01.05.1983
Иванов Иван Фёдорович, мужчина, 05.05.1999
Дмитриев Алексей Григорьевич, мужчина, 12.11.1998
Овчинников Платон Александрович, мужчина, 26.05.1999
Мартынова Софья Тимуровна, женщина, 07.06.1995
Соколов Михаил Адамович, мужчина, 11.03.1979
`

let guests = guest_string.split('\n');
guests = guests.filter(guest_elem => guest_elem != '');

let person_classes = [];

for (let guest_index in guests) {
    let person = new Person(guests[guest_index]);
    person_classes.push(person);
}

const guests_amount = person_classes.length;
const male_guests = person_classes.filter(guest => guest.get_gender() == 'М').length;
const female_guests = person_classes.filter(guest => guest.get_gender() == 'Ж').length;

console.log(`Всего гостей: ${guests_amount}`)
console.log(`Мужчин: ${male_guests}`)
console.log(`Женщин: ${female_guests}`)
console.log('Список гостей:')

for (let guest_index in person_classes) {
    guest = person_classes[guest_index];
    console.log(`${guest.format_name()}, ${guest.get_gender()}, Возраст: ${guest.calculate_age()}`);
}

