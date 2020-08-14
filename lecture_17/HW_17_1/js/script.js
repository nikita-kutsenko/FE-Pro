let xhr = new XMLHttpRequest();
xhr.open('GET', './users.json');
xhr.send();

xhr.addEventListener('readystatechange', () => {

    if ( xhr.readyState === 4 ) {
        if ( xhr.status <= 400 ) {
            renderUser( JSON.parse( xhr.responseText ) );
        } else {
            console.log('status, statusText :>> ', xhr.status, xhr.statusText);
        }
    }
});

function renderUser( data ) {
    let users = data.users,
        filteredUsers = users
                            .filter(user => user)
                            .map(user => `<div class="card">${getInfo ( data, user )}${getCourses ( data, user )}</div>`)
                            .join('');

    document.body.innerHTML = filteredUsers;
}



function getInfo( data , user ) {
    return  `<div class="card__info">
                <div class="card__info--data">
                    <img src="${user.icon}" class="data__img" alt="${user.name}" height="50">
                    <div class="user__info">
                        <p>Name: <b>${user.name}</b></p>
                        <p>Age: <b>${user.age}</b></p>
                    </div>
                </div>
                <div class="card__info--role">
                    <img src="${getPosition( data, user.position )}" alt="admin">
                    <span>${user.position}</span>
                </div>
            </div>`;
}

function getCourses( obj, user ) {

    if (user.courses) {
        let courses = user.courses,
            filteredCourses = courses
                                .filter(course => course)
                                .map (course => `<p class="card__courses--course ${getClassByMark ( obj, course.rating )}">${course.name}: <span>${getMark ( obj, course.rating )}</span></p>`)
                                .join('');
        return `<div class="card__courses">${filteredCourses}</div>`;
    } else return '';
}


function getPosition( obj, type ) {
    let roles = obj.roles;

    if ( type === 'admin' ) {
        return roles.admin;
    } else if ( type === 'moderator' ) {
        return roles.moderator;
    } else if ( type === 'student' ) {
        return roles.student;
    }
}

function getMark ( obj, mark ) {
    let rating = obj.rating;

    if ( mark <= rating["Satisfactory"]) {
        return 'Satisfactory';
    } else if ( mark <= rating["Good"]) {
        return 'Good';
    } else if ( mark <= rating["Very Good"]) {
        return 'Very Good';
    } else if ( mark <= rating["Excellent"]) {
        return 'Excellent';
    }
}

function getClassByMark ( obj, mark ) {
    let rating = obj.rating;

    if ( mark <= rating["Satisfactory"]) {
        return 'satisfactory';
    } else if ( mark <= rating["Good"]) {
        return 'good';
    } else if ( mark <= rating["Very Good"]) {
        return 'verygood';
    } else if ( mark <= rating["Excellent"]) {
        return 'excellent';
    }
}





// ***
// Альтернативный способ, без вынесения card__info в отдельную функцию
// ***

// function renderUser( data ) {
//     let users = data.users,
//         filteredUsers = users
//                             .filter(user => user)
//                             .map(user => `<div class="card">
//                                             <div class="card__info">
//                                                 <div class="card__info--data">
//                                                     <img src="${user.icon}" class="data__img" alt="${user.name}" height="50">
//                                                     <div class="user__info">
//                                                         <p>Name: <b>${user.name}</b></p>
//                                                         <p>Age: <b>${user.age}</b></p>
//                                                     </div>
//                                                 </div>
//                                                 <div class="card__info--role">
//                                                     <img src="${getPosition( data, user.position )}" alt="admin">
//                                                     <span>${user.position}</span>
//                                                 </div>
//                                             </div>
//                                             ${getCourses ( data, user )}
//                                         </div>`)
//                             .join('');
//     document.body.innerHTML = filteredUsers;
// }