// Набор базовых элементов 

let taskArr = JSON.parse(localStorage.getItem("firstblock")) || [];
let taskArrProgress =  JSON.parse(localStorage.getItem("secondblock")) ||[];
let taskArrThree =  JSON.parse(localStorage.getItem("threeblock")) ||[];


const $taskCardFirstBlock = document.querySelector('.first-block');

const $taskCardSecondBlock = document.querySelector('.second-block');

const $swapTaskInSectionSecond = document.querySelector('.three-block');




const $deletAllTask = document.querySelector('.all-task-delet');       

const $deletAllTaskSecond = document.querySelector('.all-task-delet-second');

const $deletAllTaskThree = document.querySelector('.all-task-delet-three');



const $firstTotal = document.querySelector('.first-total');

const $secondTotal = document.querySelector('.second-total');

const $threeTotal = document.querySelector('.three-total');



// localstorage

function firstlocal(){
    localStorage.setItem('firstblock', JSON.stringify(taskArr))

}

function secondlocal(){
    localStorage.setItem('secondblock', JSON.stringify(taskArrProgress))

}

function threelocal(){
    localStorage.setItem('threeblock', JSON.stringify(taskArrThree))

}


// Создание  Тасков
let creattask = function(ftitle, fdescription, fautor){
    this.title = ftitle,
    this.description = fdescription,
    this.autor = fautor,
    this.checked = false
}

// Пушить таски

let addTaskInHtml = (el, i)=>{

    let task = `
    <div class="cards" id="${i}">
    <div class="container">
    <div class="card-title">
    <p class="card-title-text">Todo</p>
    <div class="card-title-time">${todaysDaysAll}</div>
    </div>
    <div class="card-work-zone">
    <h4 class="work-zone-title">${el.title}</h4>
    <p class="card-discription">${el.description}</p>
    </div>
    <div class="card-footer">
    <p class="card-autor">${el.autor}</p>
    <div class="card-btn">
    <i class="fa fa-flag swap-task" id="${i}" aria-hidden="true"></i>
    <i class="fa fa-trash delet-task" id="${i}" aria-hidden="true"></i> 
    </div>
    </div>
    </div>
    </div>`;

    return task

};

let addTaskInHtmlReturn = (el, i)=>{

    let task = `
    <div class="cards" id="${i}">
    <div class="container">
    <div class="card-title">
    <p class="card-title-text">Todo</p>
    <div class="card-title-time">${todaysDaysAll}</div>
    </div>
    <div class="card-work-zone">
    <h4 class="work-zone-title">${el.title}</h4>
    <p class="card-discription">${el.description}</p>
    </div>
    <div class="card-footer">
    <p class="card-autor">${el.autor}</p>
    <div class="card-btn">
    <i class="fa fa-wrench" id="${i}" aria-hidden="true"></i>
    <i class="fa fa-flag swap-task" id="${i}" aria-hidden="true"></i>
    <i class="fa fa-trash delet-task" id="${i}" aria-hidden="true"></i> 
    </div>
    </div>
    </div>
    </div>`;

    return task

};

let addTaskInHtmlReturnThree = (el, i)=>{

    let task = `
    <div class="cards" id="${i}">
    <div class="container">
    <div class="card-title">
    <p class="card-title-text">Todo</p>
    <div class="card-title-time">${todaysDaysAll}</div>
    </div>
    <div class="card-work-zone">
    <h4 class="work-zone-title">${el.title}</h4>
    <p class="card-discription">${el.description}</p>
    </div>
    <div class="card-footer">
    <p class="card-autor">${el.autor}</p>
    <div class="card-btn">
    <i class="fa fa-wrench" id="${i}" aria-hidden="true"></i>
    <i class="fa fa-trash delet-task" id="${i}" aria-hidden="true"></i> 
    </div>
    </div>
    </div>
    </div>`;

    return task

};






// Дата в header

const $headerData = document.querySelector('.time');

let todayDays = new Date();
let todaysDaysAll = String(todayDays.getDate()).padStart(2, '0') + '.' + String(todayDays.getMonth() + 1).padStart(2, '0') + '.' + todayDays.getFullYear();

$headerData.innerHTML = todaysDaysAll;

// Ввывод окна для ввода таска 

const addTask = document.querySelector('.fa-plus');

addTask.addEventListener('click', ()=>{
const forms = document.querySelector('.form');
forms.style.display = 'block';
})

// Закрытие окна для ввода таска 

const $btnFormDelet = document.querySelector('.delet').addEventListener('click', ()=>{
  
const forms = document.querySelector('.form');
document.querySelector('.titles').value = '';
document.querySelector('.dist').value = '';
document.querySelector('.autor').value = '';
forms.style.display = 'none';
document.querySelector('.attention').style.display = 'none';

})

// Создание таска и пуш его на страницу (и счетчик)

const $btnFormAdd = document.querySelector('.add').addEventListener('click', ()=>{




let titlform = document.querySelector('.titles').value;
let discriptionForm = document.querySelector('.dist').value;
let autorForm = document.querySelector('.autor').value;

if(titlform == '' && discriptionForm == '' && autorForm == ''){
    document.querySelector('.attention').style.display = 'block';

    document.querySelector('.close-att').addEventListener('click',()=>{
        document.querySelector('.attention').style.display = 'none';
    })
} else{

    let task = new creattask(titlform, discriptionForm, autorForm);

console.log(task);

taskArr.push(task);

let lastItemInTask = taskArr[taskArr.length -1];
let lastItemInTaskIndex = taskArr.lastIndexOf(lastItemInTask);

console.log(lastItemInTaskIndex);


$taskCardFirstBlock.innerHTML += addTaskInHtml(lastItemInTask, lastItemInTaskIndex);

firstlocal()

document.querySelector('.titles').value = '';
document.querySelector('.dist').value = '';
document.querySelector('.autor').value = '';


let result = taskArr.length;


$firstTotal.innerHTML = result;

const forms = document.querySelector('.form');
forms.style.display = 'none';

    console.log(taskArr);    

}


})




// Удаление всех тасков в первой секции

$deletAllTask.addEventListener('click', ()=>{
$taskCardFirstBlock.innerHTML = '';

taskArr.length = 0;

let result = taskArr.length;


document.querySelector('.first-total').innerHTML = result;

firstlocal()
})

// Удаление тасков во второй секции

$deletAllTaskSecond.addEventListener('click', ()=>{
$taskCardSecondBlock.innerHTML = '';

taskArrProgress.length = 0;

let result = taskArrProgress.length;


document.querySelector('.second-total').innerHTML = result;
secondlocal()
});

// Удаление тасков в третьей секции

$deletAllTaskThree.addEventListener('click', ()=>{
$swapTaskInSectionSecond.innerHTML = '';

taskArrThree.length = 0;

let result = taskArrThree.length;


document.querySelector('.three-total').innerHTML = result;
threelocal()
});



// Переброс таска в зону 2

// Пояснения! Затраты 2 часа 41 минута. По родителю ищем куда кликает пользователь. И в случае если это IF тогда берем ID. Id уникальное, так как зависит от индекса в масиве. Затем, пушим элемент из первого масива во второй. И удаляем в первом. 

$taskCardFirstBlock.addEventListener('click', function(block){
    
let atributBtnDelet = block.target.getAttribute('class');

    
let idTask = block.target.getAttribute('id');

console.log(idTask);



if(atributBtnDelet == 'fa fa-flag swap-task' ){

    $taskCardFirstBlock.innerHTML = "";

    taskArrProgress.push(taskArr[idTask]);

    console.log(taskArrProgress);

    taskArr.splice(idTask, 1);

    taskArr.forEach((element, index) =>{
        
        $taskCardFirstBlock.innerHTML += addTaskInHtml(element, index);

        $firstTotal.innerHTML = index + 1;

        
    });

    totalfun(taskArr, $firstTotal);

    $taskCardSecondBlock.innerHTML = "";



    taskArrProgress.forEach((element, index)=>{

        $taskCardSecondBlock.innerHTML += addTaskInHtmlReturn(element, index);

        $secondTotal.innerHTML = index + 1;

        
    });
    totalfun( taskArrProgress, $secondTotal);   
    
    firstlocal();
    secondlocal();
    
    } else if (atributBtnDelet == 'fa fa-trash delet-task'){

        $taskCardFirstBlock.innerHTML = "";

        taskArr.splice(idTask, 1);

        taskArr.forEach((element, index) =>{
            
            $taskCardFirstBlock.innerHTML += addTaskInHtml(element, index);

            $firstTotal.innerHTML = index + 1;

            
        });
        totalfun(taskArr, $firstTotal);  

        firstlocal();

    } 


    console.log(taskArr);

});





// Переброс тасков из 2 секции туда обратно и назад

$taskCardSecondBlock.addEventListener('click', function(block){
    
let atributBtnDelet = block.target.getAttribute('class');

    
let idTask = block.target.getAttribute('id');

    
if(atributBtnDelet == 'fa fa-flag swap-task' ){

    $taskCardSecondBlock.innerHTML = "";

    taskArrThree.push(taskArrProgress[idTask]);

    taskArrProgress.splice(idTask, 1);

    taskArrProgress.forEach((element, index) =>{
        
        $taskCardSecondBlock.innerHTML += addTaskInHtmlReturn(element, index);

        $secondTotal.innerHTML = index + 1;

        
    });

    totalfun(taskArrProgress, $secondTotal);

    $swapTaskInSectionSecond.innerHTML = "";

    
    taskArrThree.forEach((element, index)=>{

        $swapTaskInSectionSecond.innerHTML += addTaskInHtmlReturnThree(element, index);

        $threeTotal.innerHTML = index + 1;

        
    });
    totalfun( taskArrThree, $threeTotal);  
    
    secondlocal()
    threelocal()
    
    } else if (atributBtnDelet == 'fa fa-trash delet-task'){

        $taskCardSecondBlock.innerHTML = "";

        taskArrProgress.splice(idTask, 1);

        taskArrProgress.forEach((element, index) =>{
            
            $taskCardSecondBlock.innerHTML += addTaskInHtmlReturn(element, index);

            $secondTotal.innerHTML = index + 1;

            
        });

        totalfun(taskArrProgress, $secondTotal);
        secondlocal()

    } else if(atributBtnDelet = 'fa fa-wrench'){
        $taskCardSecondBlock.innerHTML = "";
        taskArr.push(taskArrProgress[idTask]);
        taskArrProgress.splice(idTask, 1);
        taskArrProgress.forEach((element, index) =>{
        
            $taskCardSecondBlock.innerHTML += addTaskInHtmlReturn(element, index);

            $secondTotal.innerHTML = index + 1;

            
        });
        totalfun(taskArrProgress, $secondTotal);

        $taskCardFirstBlock.innerHTML = "";


        taskArr.forEach((element, index) =>{
        
            $taskCardFirstBlock.innerHTML += addTaskInHtml(element, index);

            $firstTotal.innerHTML = index + 1;

           
        });

        totalfun(taskArr, $firstTotal);

        firstlocal()
        secondlocal()




    }


    console.log(taskArr);

});


// Переброс тасков из 3 секции обратно и удалить

$swapTaskInSectionSecond.addEventListener('click', function(block){
    
let atributBtnDelet = block.target.getAttribute('class');

    
let idTask = block.target.getAttribute('id');

    
  
    if (atributBtnDelet == 'fa fa-trash delet-task'){

        $swapTaskInSectionSecond.innerHTML = "";

        taskArrThree.splice(idTask, 1);

        

        $swapTaskInSectionSecond.innerHTML = "";

        taskArrThree.forEach((element, index) =>{
            
            $swapTaskInSectionSecond.innerHTML += addTaskInHtmlReturnThree(element, index);

            $threeTotal.innerHTML = index + 1;

            
        })  
        totalfun(taskArrThree,  $threeTotal);
        threelocal();


    } else if(atributBtnDelet = 'fa fa-wrench'){
        $taskCardSecondBlock.innerHTML = "";
        taskArrProgress.push(taskArrThree[idTask]);
        taskArrThree.splice(idTask, 1);
        taskArrProgress.forEach((element, index) =>{
            
            $taskCardSecondBlock.innerHTML += addTaskInHtmlReturn(element, index);

            $secondTotal.innerHTML = index + 1;

            
        })  
        totalfun(taskArrProgress,  $secondTotal);

        $swapTaskInSectionSecond.innerHTML = "";

        taskArrThree.forEach((element, index) =>{
            
            $swapTaskInSectionSecond.innerHTML += addTaskInHtmlReturnThree(element, index);

                            $threeTotal.innerHTML = index + 1;

            
        });
        
        totalfun(taskArrThree, $threeTotal);

        threelocal();
        secondlocal();



    }


    console.log(taskArr);

});


// Функция обнуляющая счетчик 

function totalfun(total, html){
    if(total.length == 0){
        html.innerHTML = 0;

    }
};



















































