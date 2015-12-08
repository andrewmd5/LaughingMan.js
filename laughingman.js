/**
 * Created by Andrew on 12/7/2015.
 */
function LaughingMan() {

    this.laughingManImage = "/assets/images/laughingman.gif";
}

LaughingMan.prototype.start = function() {
    if (!document.getElementsByTagName) return;
    var imageArray = document.getElementsByTagName("img");
    var content = new Array();
    var activeImages = 0;
    for (var i = 0; i < imageArray.length; i++) {
        content[activeImages] = imageArray[i];
        activeImages++;
    }
    for (var x = 0, y = imageArray.length; x < y; x++) {
        if (content[x]) {
            content[x].style.background = "url(" + content[x].src + ")";
            if (!content.push || !document.all) {
                content[x].height = imageArray[x].height;
                content[x].width = imageArray[x].width;
                content[x].src = this.laughingManImage;
            } else {
                content[x].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',src='img/new_png.png')";
                content[x].height = imageArray[x].height;
                content[x].width = imageArray[x].width;
                content[x].src = this.laughingManImage;

            }
        }
    }
};

var laughingman = new LaughingMan();
