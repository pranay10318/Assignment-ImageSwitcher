const images = [
    "https://media.gettyimages.com/id/1440477362/photo/adelaide-australia-virat-kohli-of-india-gestures-to-the-crowd-during-the-icc-mens-t20-world.jpg?s=612x612&w=0&k=20&c=yIElAYQJOpZ9fHRYDoLgbsgrYpZyDYR76zaVkWGq3nI=",
    "https://media.gettyimages.com/id/1244169886/photo/indias-virat-kohli-celebrates-as-pakistani-players-react-on-their-loss-during-the-icc-mens.jpg?s=612x612&w=0&k=20&c=GtS29ge1fMUNKLXmUhjmrjPm0C_CUNRtQ7nXyEbHSGw=",
    "https://media.gettyimages.com/id/1435860482/photo/melbourne-australia-virat-kohli-of-india-celebrates-winning-the-icc-mens-t20-world-cup-match.jpg?s=612x612&w=0&k=20&c=heR-L_X5y6GvI-PFh3jIlNtwKbOePM3aalTSmZ-twkQ=",
    "https://media.gettyimages.com/id/1899349309/photo/cape-town-south-africa-virat-kohli-of-india-during-day-2-of-the-2nd-test-match-between-south.jpg?s=612x612&w=0&k=20&c=gjhjr4mc0-23MqSWsKdhnqmNtmPiWoSIy4Goe76D9_I=",
    "https://media.gettyimages.com/id/1245502430/photo/indias-virat-kholi-celebrates-after-scoring-a-century-during-the-third-and-final-one-day.jpg?s=612x612&w=0&k=20&c=gEv7UFrsBm_fPxRd6wUHIHlAMFiCc-puVHoIyYaoUqo=",
    "https://media.gettyimages.com/id/1882078199/photo/centurion-south-africa-virat-kohli-of-india-in-action-during-day-3-of-the-1st-test-match.jpg?s=612x612&w=0&k=20&c=t4yZm7Kkhh4jIriwGZZl1ynTpMOkIKvbU5DTjEFEaRU=",
    "https://media.gettyimages.com/id/1794765882/photo/mumbai-india-virat-kohli-of-india-celebrates-after-scoring-a-century-overtaking-sachin.jpg?s=612x612&w=0&k=20&c=EX50Dl4W8SeHyLHcgTtRc_7bo1GO6s1dqSovRAhEBVM=",
    "https://media.gettyimages.com/id/1243449254/photo/nagpur-india-virat-kohli-of-india-warms-up-prior-to-game-two-of-the-t20-international-series.jpg?s=612x612&w=0&k=20&c=yLyDibAgNj-SOFumquYmiN3DjxIipoGQvuBdD6IqUoE=",
    "https://media.gettyimages.com/id/1436928977/photo/sydney-australia-virat-kohli-of-india-talks-to-rohit-sharma-of-india-during-the-icc-mens-t20.jpg?s=612x612&w=0&k=20&c=d9N--7aumJuf9a73hfYMGV0GhQMJHqdLe2o6Y9UMeA0=",
    "https://media.gettyimages.com/id/1796422349/photo/mumbai-india-virat-kohli-of-india-celebrates-after-scoring-a-century-overtaking-sachin.jpg?s=612x612&w=0&k=20&c=3ZpuDKXRl2hKDfzkIByW8c46OD5g8Umn76t3pZ9QWVU=",
    "https://media.gettyimages.com/id/1438371344/photo/adelaide-australia-virat-kohli-of-india-celebrates-victory-during-the-icc-mens-t20-world-cup.jpg?s=612x612&w=0&k=20&c=NfQXJTTgmdn8HZltg_0hbyBQKOu1NYB8HfFkmJNua4M=",
    "https://media.gettyimages.com/id/1497731786/photo/london-england-virat-kohli-of-india-looks-on-after-australia-won-the-icc-world-test.jpg?s=612x612&w=0&k=20&c=hxt5WEGqFS5dxZpM_S3mec9wrjSGS-cfk7B8TD0Pfk8=",
]
var imageIdx = 0;

document.addEventListener('DOMContentLoaded', createHeaderAndImageSwitcher);
function createHeaderItem(name) {
    var headerItem = document.createElement('div');
    headerItem.className = 'header-item';

    var dropDownButton = document.createElement('button');
    dropDownButton.className = 'drop-down-button';
    dropDownButton.textContent = name;

    var dropDownContent = document.createElement('div');
    dropDownContent.className = 'drop-down-content';

    for(let i=1; i<=5; i++) {
        var dropDownItem = document.createElement('a');
        dropDownItem.className = 'drop-down-item';
        dropDownItem.textContent = `${name} - Item ${i}`;
        dropDownContent.appendChild(dropDownItem);
    }
    headerItem.appendChild(dropDownButton);
    headerItem.appendChild(dropDownContent);

    return headerItem;
}

function createHeaderAndImageSwitcher() {
    var headerItems = ['Home', 'About', 'Services', 'Portfolio', 'Blog', 'Contact', 'Careers', 'Testimonials'];
    var headerEle = document.getElementById('nav-bar');
    headerItems.forEach((tabName)=> {
        headerEle.appendChild(createHeaderItem(tabName));
    });
    createImageSwitcher();
}

function createImageSwitcher() {
    let img = document.querySelector('.image-container img');
    img.src = images[imageIdx];
}


function handleCarousel(event) {
    let img = document.querySelector('.image-container img');
    let id = event.target.id;

    if(id == 'prev') {
        imageIdx = (imageIdx - 1 + images.length) % images.length;
    }
    else {
        imageIdx = (imageIdx + 1) % images.length;
    }

    img.src = images[imageIdx];
    if(imageIdx%3 == 0) img.classList.add('special-border');
    else img.classList.remove('special-border');
}

function toggleDropDown(event) {
    console.log("adfasdfas: ", event.target);
    let navbar = document.getElementById('nav-bar');
    navbar.className = navbar.className === 'responsive' ? '' : 'responsive';
}