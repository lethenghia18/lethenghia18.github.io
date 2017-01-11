function openCourse(evt, courseName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    var courses = ["15-213", "15-251", "15-150", "15-122", "15-112", "21-127", "36-217"]; 

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    if (courses.indexOf(courseName) != -1) {
        tablinks = document.getElementsByClassName("tablinks");

        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
            console.log(tablinks[i]);
        }
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(courseName).style.display = "block";
    evt.currentTarget.className += " active";
}
