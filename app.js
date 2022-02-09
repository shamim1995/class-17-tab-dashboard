
const dashboard_list = document.querySelectorAll('.dashboard_list ul li a');
const dashboard_content = document.querySelectorAll('.dashboard_content');

dashboard_list.forEach(data => {


    data.addEventListener('click', function (e) {
        e.preventDefault();

        dashboard_list.forEach(item => {
            item.classList.remove('active')
        });

        data.classList.add('active')

        const dashboard_menuLink = document.querySelector(this.getAttribute('href'));

        dashboard_content.forEach(data => {
            data.classList.remove('active')
        });

        dashboard_menuLink.classList.add('active')



    });
});






// home themes plugin

const dashboard_menu = document.querySelectorAll('.dashboard_menu ul li a')

dashboard_menu.forEach(data=>{
    
 data.addEventListener('click', function () {

    dashboard_menu.forEach( item =>{
        item.classList.remove('active')
    });

        data.classList.add('active');

        const themes = document.querySelector(this.getAttribute('href'));

    dashboard_content.forEach(themes=>{
        themes.classList.remove('active')
    });
    themes.classList.add('active')
 });
 
});

// plugin

const dashboard_content_body_menu = document.querySelectorAll('.dashboard_content_body .dashboard_content_body_menu ul li a');

const start_hompage = document.querySelectorAll('.start_hompage');

dashboard_content_body_menu.forEach( data => {

    data.addEventListener('click', function(){
        dashboard_content_body_menu.forEach( item=>{
        item.classList.remove('active')
        });

          data.classList.add('active')

     const start_page = document.querySelector(this.getAttribute('href'));

     start_hompage.forEach(start_hompage =>{
         start_hompage.classList.remove('active')

     })

     start_page.classList.add('active');

    });

});