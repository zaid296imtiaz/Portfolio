//----------Get Elements
var getnameHead = document.getElementById('nameHead');
var getIntroPara = document.getElementById('introPara');
var getInsClass = document.getElementsByClassName('ins');
var getExpClass = document.getElementsByClassName('exp');
var getHobbClass = document.getElementsByClassName('hobb');
var getLangClass = document.getElementsByClassName('lang');
var getContentDiv = document.getElementById('contentDiv');
var getBannerPic = document.getElementById('bannerPic');

var personalData = {
    name: 'Zaid Imtiaz,',
    para: 'I am Software student. Ability of understanding problems. Skilled in problem solving. Quick to grab new concepts and technologies. Confident in what i do.<br>Remarkable patience and strong motivational skills. Ability to handle pressure situations. Able to work in groups as well as individuals. Adapting new new trends of the community and the direction towards the industry is. Making small projects as a hobby.'
}

var qualifications = {
    institute: ['Sir Syed University', 'Bahria Colege', 'Happy Home School'],
    experience: ['3 years', '2 years', '2 years']
}

var hobbies = {
    hobb: ['Research and Development', 'Small projects', 'Video Games', 'Movies', 'Tech news', 'Reading']
}

var languages = {
    lang: ['JavaScript', 'Java', 'HTML 5', 'CSS 3', 'XML', 'SQL']
}

getnameHead.innerHTML = personalData.name;
getIntroPara.innerHTML = personalData.para;

for(var i=0; i < getInsClass.length; i++){
    getInsClass[i].innerHTML = qualifications.institute[i];
}
for(var i=0; i < getExpClass.length; i++){
    getExpClass[i].innerHTML = qualifications.experience[i];
}

for(var i=0; i < getHobbClass.length; i++){
    getHobbClass[i].innerHTML = hobbies.hobb[i];
}

for(var i=0; i < getLangClass.length; i++){
    getLangClass[i].innerHTML = languages.lang[i];
}
// console.log(getInsClass.length);


function jsUpdateSize(){
    // Get the dimensions of the viewport          490 1220
    var width = window.innerWidth ||
                document.documentElement.clientWidth ||
                document.body.clientWidth;
    var height = window.innerHeight ||
                 document.documentElement.clientHeight ||
                 document.body.clientHeight;

// console.log('width:' + width);
// console.log('height:' + height);
// const value = window.innerHeight
checkSet(width, height);
};

setInterval(jsUpdateSize,100);

function checkSet(wid, high) {
    widd = wid;
    hi = high;

    if(hi <= 490 || widd <= 1220){
        getContentDiv.style.position = 'initial';
        getContentDiv.style.width = '100%';
        getContentDiv.style.marginLeft = '0';
        getBannerPic.src = 'images/banner-pic2.png';
    }
    else{
        getContentDiv.style.position = 'absolute';
        getContentDiv.style.width = '45%';
        getContentDiv.style.marginLeft = '2%';
        getBannerPic.src = 'images/banner-pic1.jpg';
    }
}