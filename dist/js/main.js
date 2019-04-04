//get full with of the web page and set first image
var fullWidth = document.body.scrollWidth.toString() + "px";

console.log(fullWidth);
document.getElementById("cover-img").style.width = fullWidth;

//get the height of elements:
//about
var page_about = document.getElementById("page-1");
var page1height = page_about.scrollHeight;
console.log("About section height: " + page1height);

//service
var page_service = document.getElementById("page-2");
var page2height = page_service.scrollHeight + page1height;
console.log("Service section height: " + page2height);

//contact
var page_contact = document.getElementById("page-3");
var page3height = page_contact.scrollHeight + page2height;
console.log("Contact section height: " + page3height);

//scroll animation fuction

function pageScroll(a) {
  switch (a == !null) {
    case a == "about":
      $(document).ready(function() {
        $("body,html").animate({ scrollTop: page1height }, 800);
        console.log(page1height);
      });
      break;
    case a == "service":
      $(document).ready(function() {
        $("body,html").animate({ scrollTop: page2height }, 800);
        console.log(page2height);
      });
      break;
    case a == "contact":
      $(document).ready(function() {
        $("body,html").animate({ scrollTop: page3height }, 800);
        console.log(page3height);
      });
      break;
  }
}
