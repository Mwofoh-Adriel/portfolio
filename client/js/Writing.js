let date = new Date();
let options = { month: 'long', day: 'numeric', year: 'numeric' };
let completeDate = date.toLocaleDateString('en-US', options);

document.getElementById('publish-date').textContent = completeDate;