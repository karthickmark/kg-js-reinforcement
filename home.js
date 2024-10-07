const  text= document.querySelector(".sec-text")

const textLoad=()=>{
    setTimeout(()=>{
        text.textContent ="Freelancer"
    },0)
    setTimeout(()=>{
        text.textContent ="Blogger"
    },2000)
    setTimeout(()=>{
        text.textContent ="IMG provider"
    },4000)
    setTimeout(()=>{
        text.textContent ="Youtuber"
    },6000)
}

textLoad()
setInterval(textLoad,8000)


//////////////////////////////////////////////////////////IMG EDITOR///////////////////////////////////////////////////////

const fileInput = document.querySelector(".file-input"),
    filterOptions = document.querySelectorAll(".filter button"),
    filterName = document.querySelector(".filter-info .name"),
    filterValue = document.querySelector(".filter-info .value"),
    filterSlider = document.querySelector(".slider input"),
    rotateOptions = document.querySelectorAll(".rotate button"),
    previewImg = document.querySelector(".preview-img img"),
    resetFilterBtn = document.querySelector(".reset-filter"),
    chooseImgBtn = document.querySelector(".choose-img"),
    saveImgBtn = document.querySelector(".save-img");

let brightness = "100",
    saturation = "100",
    inversion = "0",
    grayscale = "0";
let rotate = 0,
    flipHorizontal = 1,
    flipVertical = 1;

const loadImage = () => {
    let file = fileInput.files[0];
    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {
        resetFilterBtn.click();
        document.querySelector(".container").classList.remove("disable");
    });
};

const applyFilter = () => {
    previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
    previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
};

filterOptions.forEach((option) => {
    option.addEventListener("click", () => {
        document.querySelector(".active").classList.remove("active");
        option.classList.add("active");
        filterName.innerText = option.innerText;

        if (option.id === "brightness") {
            filterSlider.max = "200";
            filterSlider.value = brightness;
            filterValue.innerText = `${brightness}%`;
        } else if (option.id === "saturation") {
            filterSlider.max = "200";
            filterSlider.value = saturation;
            filterValue.innerText = `${saturation}%`;
        } else if (option.id === "inversion") {
            filterSlider.max = "100";
            filterSlider.value = inversion;
            filterValue.innerText = `${inversion}%`;
        } else {
            filterSlider.max = "100";
            filterSlider.value = grayscale;
            filterValue.innerText = `${grayscale}%`;
        }
    });
});

const updateFilter = () => {
    filterValue.innerText = `${filterSlider.value}%`;
    const selectedFilter = document.querySelector(".filter .active");

    if (selectedFilter.id === "brightness") {
        brightness = filterSlider.value;
    } else if (selectedFilter.id === "saturation") {
        saturation = filterSlider.value;
    } else if (selectedFilter.id === "inversion") {
        inversion = filterSlider.value;
    } else {
        grayscale = filterSlider.value;
    }
    applyFilter();
};

rotateOptions.forEach((option) => {
    option.addEventListener("click", () => {
        if (option.id === "left") {
            rotate -= 90;
        } else if (option.id === "right") {
            rotate += 90;
        } else if (option.id === "horizontal") {
            flipHorizontal = flipHorizontal === 1 ? -1 : 1;
        } else {
            flipVertical = flipVertical === 1 ? -1 : 1;
        }
        applyFilter();
    });
});

const resetFilter = () => {
    brightness = "100";
    saturation = "100";
    inversion = "0";
    grayscale = "0";
    rotate = 0;
    flipHorizontal = 1;
    flipVertical = 1;
    filterOptions[0].click();
    applyFilter();
};

const saveImage = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = previewImg.naturalWidth;
    canvas.height = previewImg.naturalHeight;

    ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%)`;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    if (rotate !== 0) {
        ctx.rotate((rotate * Math.PI) / 180);
    }
    ctx.scale(flipHorizontal, flipVertical);
    ctx.drawImage(
        previewImg,
        -canvas.width / 2,
        -canvas.height / 2,
        canvas.width,
        canvas.height
    );

    const link = document.createElement("a");
    link.download = "image.jpg";
    link.href = canvas.toDataURL();
    link.click();
};

filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());


//////////////////////////////////////////////////-js for the  img-editor-flex/////////////////////////////////////////////////

let ImgGamesContainer =document.querySelector(".img-edit-content")
let Imgbtn=document.getElementById("img-btn")
let imgTitle=document.getElementById("img-titles")
let textcolor=document.querySelector("#img-titles")




function toggleVisibilityImg() {
    
    ImgGamesContainer.classList.toggle("visible-img");
    textcolor.classList.toggle("visible-color")
    displaynone.classList.toggle("center-content-diables")

}

Imgbtn.addEventListener("click", toggleVisibilityImg);

////////////////////////////////////////////////js for the games-flex/////////////////////////////////////

let gamescontent=document.querySelector(".games-content")
let gameTitles=document.getElementById("game-titles")
let gtextcolor=document.querySelector("#game-titles")
let displaynone=document.querySelector(".center-content")





function toggleVisibilityGame() {
    
    gtextcolor.classList.toggle("visible-colorgg")
    gamescontent.classList.toggle("games-content-visible");
    displaynone.classList.toggle("center-content-diables")
}

gameTitles.addEventListener("click",toggleVisibilityGame)


// if(gamescontent.classList.contains("games-content-visible")){
//     ImgGamesContainer.classList.remove("visible-img");
    
// }
// else if(ImgGamesContainer.classList.contains("visible-img")){
//     gamescontent.classList.add("games-content-visible");
    
// }

const action =(e)=>{
    console.log(e);
    
}

document.addEventListener('keydown',action)








