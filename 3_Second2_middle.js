/*改變原始寬度（0）*/
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("small_screen_nav").style.display="none";
}
/*恢復原始寬度0*/
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("small_screen_nav").style.display="inline";
}