const picPath = "https://source.unsplash.com/featured/?";

var picInput = document.getElementById('picSubject');

document.querySelector('form.picForm').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    const picChoice = picInput.value;   

    const pictures = picPath + picChoice;

    console.log(picChoice); 

    showPics(pictures);
});



const showPics = (userInput) => {
    let output = `
    <div class="picCard">
    <img src=${userInput} width="400" class="picImage" />
    <h3>Here you go!</h3>
    </div>
`
    unsplashPics.innerHTML = output
  }