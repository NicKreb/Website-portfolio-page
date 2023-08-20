// let projectTrans = document.getElementById('#projectsTab');

// projectTrans.onClick(function(){
//     document.getElementById('#projectsTab').addClass('projectsTransition');
// });

$(document).ready(function() {
  $(".circle").click(function() {
    $('svg')
      .addClass('svgFadeOut')
  })
});

$(document).ready(function() {
    $("#projectsTab").click(function() {
      $("#projectsTab")
        .addClass('projectsTransition')
        .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
          location.assign("/projects/projects.html");
        });
    })
});

$(document).ready(function() {
  $(".aboutMeTab").click(function() {
    $(".aboutMeTab")
      .addClass('aboutMeTransition')
      .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
        location.assign("/aboutMe/aboutMe.html");
      });
  })
});

$(document).ready(function() {
  $(".contactsTab").click(function() {
    $(".contactsTab")
      .addClass('contactsTransition')
      .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
        location.assign("/contacts/contacts.html");
      });
  })
});

$(document).ready(function() {
  $(".homeTab").click(function() {
    $(".homeTab")
      .addClass('homeTransition')
      .bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function() {
        location.assign("/homepage/homepage.html");
      });
  })
});