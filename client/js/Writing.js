let date = new Date();
let options = { month: 'long', day: 'numeric', year: 'numeric' };
let completeDate = date.toLocaleDateString('en-US', options);
document.getElementById('publish-date').textContent = completeDate;

let duration = "5 min";
document.getElementById('duration').textContent = duration;

let clickCount = 0;
let blogLink = document.getElementById('blog-link');

blogLink.addEventListener('click', function() {
    clickCount++;
    document.getElementById('num-reads').textContent = clickCount;
});