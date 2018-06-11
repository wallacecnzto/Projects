window.onload = function() {
    var slidewidth = this.document.getElementById("slideshow").offsetWidth;
    var objs = this.document.getElementsByClassName("slide");
    for(i=0;i<objs.length;i++) {
        objs[i].style.width = slidewidth + 'px';
    }
}