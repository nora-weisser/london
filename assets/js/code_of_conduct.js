let controllerCodeOfConduct = (function(jQuery) {
    let menteeConduct = jQuery("#mentee-conduct");
    let mentorConduct = jQuery("#mentor-conduct");
    
    let btnMenteeLearnMore = jQuery("#btn-mentee-learn-more");
    let btnMentorLearnMore = jQuery("#btn-mentor-learn-more");
    let btnHideMenteesShowLess = jQuery("#btn-mentee-show-less");
    let btnHideMentorShowLess = jQuery("#btn-mentor-show-less");
    

    let classHide = "d-none";

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

module.exports = {controllerCodeOfConduct};
