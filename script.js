let takingImages = [
     `./assets/img/alaska-810433_1280.jpg`,
     `./assets/img/anime-8788959_1280.jpg`,
     `./assets/img/atmosphere-8752835_1280.png`,
     `./assets/img/blue-tit-8521052_1280.jpg`,
     `./assets/img/hurricane-92968_1280.jpg`,
     `./assets/img/lake-2896379_1280.jpg`,
     `./assets/img/moorente-8783210_1280.jpg`,
     `./assets/img/sea-2563389_1280.jpg`,
     `./assets/img/snow-bunting-6781122_1280.jpg`,
     `./assets/img/snow-leopard-cubs-8039138_1280.jpg`,
     `./assets/img/travel-8785493_1280.jpg`,
     `./assets/img/winter-1675197_1280.jpg`,
    ];


let namedPictures = [
     `alaska-810433_1280`,
     `anime-8788959_1280`,
     `atmosphere-8752835_1280`,
     `blue-tit-8521052_1280`,
     `hurricane-92968_1280`,
     `lake-2896379_1280`,
     `moorente-8783210_1280`,
     `sea-2563389_1280`,
     `snow-bunting-6781122_1280`,
     `snow-leopard-cubs-8039138_1280`,
     `travel-8785493_1280`,
     `winter-1675197_1280`,
    ];


function popUp(popUpDialog) {
    let dialogRef = document.getElementById('popUpGallery');
    createDialog(popUpDialog);
    dialogRef.showModal();
    document.body.classList.toggle('openPopUpWindow');
}


function openCloseDialog() {
    let dialogRef = document.getElementById('popUpGallery');
    dialogRef.close();
    document.body.classList.toggle('openPopUpWindow');
}


function stopPropagation(event) {
    event.stopPropagation();
}


function createDialog(imageNameNumbering) {
    titleDialog(imageNameNumbering);
    photoCollection(imageNameNumbering);
    switchButtonsFooter(imageNameNumbering);
}


function titleDialog(imageNameNumbering) {
    let dialogTitle = document.getElementById('imageTitle');
    dialogTitle.innerHTML = createImageName(imageNameNumbering)
}


function createImageName(imageNameNumbering) {
    return `
        <h2> ${namedPictures[imageNameNumbering]} </h2>
    `;
}


function photoCollection(imageNameNumbering) {
    let dialogPhotoCollection = document.getElementById('singlePhotoCollection');
    dialogPhotoCollection.innerHTML = `
        <img src="${takingImages[imageNameNumbering]}" alt="Image Close-Up">
    `;
}


function switchButtonsFooter(imageNameNumbering) {
    let dialogFooter = document.getElementById('switchButton');
    dialogFooter.innerHTML = `
        <button class="arrow_left" id="buttonLeftArrow" onclick="imageSwitching(${imageNameNumbering}, ${false}), setFocus('buttonLeftArrow')">
            <img class="left_arrow_button" src="./assets/icons/unclicked_button.png" alt="Arrow Switching Photo to the left"/>
        </button>

        <span> ${[imageNameNumbering + 1]}/12 </span>

        <button class="arrow-right" id="buttonRightArrow" onclick="imageSwitching(${imageNameNumbering}, ${true}), setFocus('buttonRightArrow')">
            <img class="right_arrow_button" src="./assets/icons/unclicked_button.png" alt="Arrow Switching Photo to the right"/>
        </button>
    `;
}


function imageSwitching(popUpDialog, connection) {
    if(connection) {
        if(popUpDialog + 1 == namedPictures.length) {
            createDialog(0);
        } else {
            createDialog(popUpDialog + 1);
        }
    } else {
        if(popUpDialog == 0) {
            createDialog(namedPictures.length - 1);
        } else {
            createDialog(popUpDialog - 1);
        }
    }
}


function setFocus(id) {
    document.getElementById(id).focus();
}


function insertImages() {
    let picRef = document.getElementById('photoGallery');
    for (let i = 0; i < namedPictures.length; i++) {
        picRef.innerHTML += implementList(i);
    }
}


function implementList(i) {
    return `
        <li>
        <button onclick='popUp(${i})'>
            <img src=${takingImages[i]} alt='Photo ${[i + 1]}'>
        </button>
        </li>
    `;
}