var content = document.getElementsByClassName('profile-content-container')[0];
var options = Array.from(document.getElementsByClassName('profile-menu-option'));
options.forEach(el => {
    el.addEventListener('click', function() {
        Array.from(document.getElementsByClassName('profile-menu-option')).forEach(el => {
            el.style.borderBottom = "solid rgba(0,0,0,0) 1px";
            el.style.color = "rgb(138, 138, 138)";
        });
        el.style.borderBottom = "solid white 1px";
        el.style.color = "white";
        switch(el.id) {
            case "recent-option":
                content.style.marginLeft = "0%";
                break;
            case "playlists-option":
                content.style.marginLeft = "-100%";
                break;
            case "followers-option":
                content.style.marginLeft = "-200%";
                break;
        }
    })
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".nav-bar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        var $title = $(".nav-title");
        $title.toggleClass('show', $(this).scrollTop() > $nav.height())
    });
});

$(function () {
    $(document).scroll(function () {
        var $nav = $(".profile-content");
        $nav.toggleClass('overflowed', $(this).scrollTop() >= $(window).height()*0.4+29);
    });
});

var recent = document.getElementsByClassName("recent")[0];
var playlists = document.getElementsByClassName("playlists")[0];
var followers = document.getElementsByClassName("followers")[0];

(function () {
     
    window.onload = function() {

        let item1 = `
        <div class="recent-item">
            <div class="recent-item-text">
                <div class="recent-item-title">Travis Scott's Best Songs</div>
                <div class="recent-item-author">by Rohil Pawar</div>
            </div>
            <img class="recent-item-image" src="assets/images/profile-image.png">
        </div>
        `;
        for (let i=0;i<10;i++){
            recent.innerHTML += item1
        }

        let item2 = `
        <div class="recent-item">
            <div class="recent-item-text">
                <div class="recent-item-title">Atlanta Rap</div>
                <div class="recent-item-author">by Rohil Pawar</div>
            </div>
            <img class="recent-item-image" src="assets/images/profile-image.png">
        </div>
        `;
        for (let i=0;i<10;i++){
            playlists.innerHTML += item2
        }
        let item3 = `
        <div class="follower-container">
            <img class="follower-image" src="assets/images/profile-image.png">
            <div class="follower-text">
                <div class="follower-name">Rohil Pawar</div>
                <div class="follower-username">@rohilpawar</div>
            </div>
        </div>
        `;
        for (let i=0;i<10;i++){
            followers.innerHTML += item3
        }

    }
  
})();