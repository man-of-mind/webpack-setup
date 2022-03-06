function component() {
    let main = document.createElement('main');
    let paragraph = document.createElement('p');
    let img = document.createElement('img');
    main.append(paragraph);
    paragraph.append(img);
    img.alt = "zuri logo";

    return main;
}

export default component;