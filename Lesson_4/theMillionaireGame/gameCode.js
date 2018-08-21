let question = [
    q1 = {question: 'Белым снегом всё одето -\n' +
        'Значит, наступает ...\n',
        a0: 4, //вариантов ответа
        a: '1 - Лето \n',
        b: '2 - Осень \n',
        c: '3 - Зима \n',
        d: '4 - Весна \n',
        cash: 200
    },
    q2 = {question: 'Лишь только свет дневной потух,\n' +
        'заухал в темноте ...\n' ,
        a0: 4,
        a: '1 - Петух \n',
        b: '2 - Голубь \n',
        c: '3 - Филин \n',
        d: '4 - Василий \n',
        cash: 300
    },
    q3 = {question: 'Под деревом четыре льва,\n' +
        'Один ушёл, осталось ...\n' ,
        a0: 4,
        a: '1 - Два \n',
        b: '2 - Три \n',
        c: '3 - Четыре \n',
        d: '4 - Я сбился со счета \n',
        cash: 500
    },
    q4 = {question: 'С пальмы вниз, на пальму снова\n' +
        'Ловко прыгает ...\n' ,
        a0: 4,
        a: '1 - Корова \n',
        b: '2 - Лиса \n',
        c: '3 - Стрекоза  \n',
        d: '4 - Обезьяна \n',
        cash: 1000
    }
];

let event,
    ok,
    i = 0,
    money = 0;

const isAnswer = (q, event)=> {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
};

do{
    ok = false;
    event = +prompt(q1.question + q1.a + q1.b + q1.c + q1.d + 'Выигрыш: ' + q1.cash);
    if(event== -1) {
        break;
    }else {
        ok = isAnswer(question[i].a0, event);
    }
    i++;
}while(!ok);

switch (event){
    case 3: //первый вопрос. если ответ верный, переходим ко второму вопросу
        money += q1.cash;
        do{
            ok = false;
            event = +prompt(q2.question + q2.a + q2.b + q2.c + q2.d + 'Выигрыш: ' + q2.cash);
            if(event== -1) {
                break;
            }else {
                ok = isAnswer(question[i].a0, event);
            }
            i++;
        
                    i++;
                }while(!ok);

                switch (event) {
                    case 2: //если 3-й ответ верный - переходим к четвертому вопросу
                        money += q3.cash;
                                event = +prompt(q4.question + q4.a + q4.b + q4.c + q4.d + 'Выигрыш: ' + q4.cash);
                                if (event == -1) {
                                    break;
                                }else {
                                    ok = isAnswer(question[i].a0, event);
                                }

                        switch (event) {
                            case 4:
                                money += q4.cash;
                                alert('Поздравляем, вы прошли игру.');
                                break;
                            default:
                                break;

                        }
                    default:
                        break;
                }
            default:
                break;
        }
    default:
    alert('Ваш выигрыш: ' +money +' руб.');
    break;
}


