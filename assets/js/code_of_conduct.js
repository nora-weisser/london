let controllerCodeOfConduct = (function(jQuery) {
    const menteeConduct = jQuery("#mentee-conduct");
    const mentorConduct = jQuery("#mentor-conduct");
    
    const btnMenteeLearnMore = jQuery("#btn-mentee-learn-more");
    const btnMentorLearnMore = jQuery("#btn-mentor-learn-more");
    const btnHideMenteesShowLess = jQuery("#btn-mentee-show-less");
    const btnHideMentorShowLess = jQuery("#btn-mentor-show-less");
    

    const classHide = "d-none";

    let menteeCodeConduct = function() {
        menteeConduct.removeClass(classHide);
        btnHideMenteesShowLess.removeClass(classHide);
        btnMenteeLearnMore.addClass(classHide);
    }

    let mentorCodeConduct = function() {
        mentorConduct.removeClass(classHide);
        btnHideMentorShowLess.removeClass(classHide);
        btnMentorLearnMore.addClass(classHide);
    }

    let initPage = function() {
        btnHideMenteesShowLess.addClass(classHide);
        btnHideMentorShowLess.addClass(classHide);
        btnMenteeLearnMore.removeClass(classHide);
        btnMentorLearnMore.removeClass(classHide);

        mentorConduct.addClass(classHide);
        menteeConduct.addClass(classHide);
    };

    let init = function() {
        initEvents();
        initPage();
    };

    let initEvents = function() {
        btnMenteeLearnMore.click(function() {
            menteeCodeConduct();
        });

        btnMentorLearnMore.click(function() {
            mentorCodeConduct();
        });

        btnHideMenteesShowLess.click(function() {
            initPage();
        });

        btnHideMentorShowLess.click(function() {
            initPage();
        });
    };

    return {
        init: init
    };
}(jQuery));

controllerCodeOfConduct.init();
