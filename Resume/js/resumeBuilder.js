var data = "%data%";

var bio = {
    "name": "Yuan Shi",
    "role": "Web Developer",
    "contacts": {
        "mobile": "136-1199-5216",
        "email": "kris.syuen@gmail.com",
        "github": "KrisYuan",
        "twitter": "@KrisSyuen",
        "location": "Shanghai, China"
    },
    "welcomeMessage": "Welcome to my resume page!",
    "skills": ["Machine Learning", "Android", "Data Analysis", "Front-end Developer"],
    "biopic": "images/fry.jpg"
};

var education = {
    "schools": [{
        "name": "Shanghai Jiaotong University",
        "location": "Shanghai, China",
        "degree": "Master",
        "majors": ["Software Engineering"],
        "dates": "2016.2 - till now",
        "url": "http://www.sjtu.edu.cn"
    }, {
        "name": "Shanghai University",
        "location": "Shanghai, China",
        "degree": "Bachelor",
        "majors": ["Automatization"],
        "dates": "2010.9 - 2014.7",
        "url": "http://www.shu.edu.cn"
    }, ],
    "onlineCourses": [{
        "title": "Machine Learning",
        "school": "Udacity",
        "dates": "2016.8",
        "url": "https://cn.udacity.com"
    }, {
        "title": "Android Developer",
        "school": "Udacity",
        "dates": "2016.10",
        "url": "https://cn.udacity.com"
    }]
};

var work = {
    "jobs": [{
        "employer": "Bank Of China, Shanghai Branch",
        "title": "Technical Manager (System Analysis)",
        "location": "Shanghai, China",
        "dates": "2014.7 - till now",
        "description": "Be in charge of the development of mobile applications."
    }, {
        "employer": "Udacity",
        "title": "Code Reviewer (Part-time)",
        "location": "Shanghai, China",
        "dates": "2016.12",
        "description": "Review the projects submitted by students and give them advice to refine their projects."
    }]
};

var projects = {
    "projects": [{
        "title": "NewsBox",
        "dates": "2016.10",
        "description": "Android application which allow users to read daily news.",
        "images": ["images/newsbox.png"]
    }, {
        "title": "Popular Movies",
        "dates": "2016.8",
        "description": "Android application which allow users to scan popular movies ant top rated movies.",
        "images": ["images/popularmovies.png"]
    }]
};

bio.display = function() {
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    var formattedWelcomMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);


    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomMsg);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);
    $("#topContacts, #footerContacts").append(formattedTwitter);
    $("#topContacts, #footerContacts").append(formattedLocation);



    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        for (var i = 0; i < bio.skills.length; i++) {
            var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formattedSkill);
        }
    }

};



work.display = function() {

    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace(data, work.jobs[i].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates0 = HTMLworkDates.replace(data, work.jobs[i].dates);
        $(".work-entry:last").append(formattedDates0);

        var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[i].location);
        $(".work-entry:last").append(formattedWorkLocation);

        var formattedDescription = HTMLworkDescription.replace(data, work.jobs[i].description);
        $(".work-entry:last").append(formattedDescription);
    }
};

projects.display = function() {
    for (var j = 0; j < projects.projects.length; j++) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace(data, projects.projects[j].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates1 = HTMLprojectDates.replace(data, projects.projects[j].dates);
        $(".project-entry:last").append(formattedDates1);

        var formattedDescription = HTMLprojectDescription.replace(data, projects.projects[j].description);
        $(".project-entry:last").append(formattedDescription);

        for (var m = 0; m < projects.projects[j].images.length; m++) {
            var formattedImages = HTMLprojectImage.replace(data, projects.projects[j].images[m]);
            $(".project-entry:last").append(formattedImages);
        }

    }

};

education.display = function() {
    for (var k = 0; k < education.schools.length; k++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace(data, education.schools[k].name);
        formattedName = formattedName.replace("#",education.schools[k].url);
        $(".education-entry:last").append(formattedName);

        var formattedDegree = HTMLschoolDegree.replace(data, education.schools[k].degree);
        $(".education-entry:last").append(formattedDegree);

        var formattedDates2 = HTMLschoolDates.replace(data, education.schools[k].dates);
        $(".education-entry:last").append(formattedDates2);

        var formattedLocation = HTMLschoolLocation.replace(data, education.schools[k].location);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace(data, education.schools[k].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    for (var l = 0; l < education.onlineCourses.length; l++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace(data, education.onlineCourses[l].title);
        $(".education-entry:last").append(formattedTitle);

        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[l].school);
        $(".education-entry:last").append(formattedSchool);

        var formattedDates3 = HTMLonlineDates.replace(data, education.onlineCourses[l].dates);
        $(".education-entry:last").append(formattedDates3);

        var formattedURL = HTMLonlineURL.replace(data, education.onlineCourses[l].url);
        formattedURL = formattedURL.replace("#",education.onlineCourses[l].url);
        $(".education-entry:last").append(formattedURL);

    }

};


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);