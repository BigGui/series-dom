
// 1/ Récupérer en javascript les données sur les séries présentes dans le fichier datas/series.json.

// METHOD 1 - Promise with fetch
// fetch('/datas/series.json')
//     .then(response => response.json())
//     .then(runScript)
//     .catch(e => console.error('Impossible de charger les données : ' + e));



// METHOD 2 - async function
async function fetchSeriesData(url) {
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (e) {
        console.error('Impossible de charger les données : ' + e);
    }
}

let series = [];

fetchSeriesData('datas/series.json')
    .then((data) => {
        series = data;
        displaySeries();
        displaySerieStyles(getStyles());

        console.log(
            getIdFromStyle("Science fiction")
        );

        activeLastStyle();
    });

// 2/ Créer une fonction pour afficher toutes les séries dans la page avec pour chacune son titre et son image.

// function displaySeries2() {
//     const seriesContainer = document.getElementById('series-container');
//     for (const serie of series) {
//         seriesContainer.appendChild(createSerieElement(serie));
//     }
// }

function displaySeries() {
    document.getElementById('series-container').append(...series.map(createSerieElement));
}

function createSerieElement(serie) {
    // Copy template
    const serieElement = document.importNode(document.getElementById('serie-template').content, true);

    // Put the name
    serieElement.querySelector('.serie-ttl').textContent = serie.name;

    // Change image
    const img = serieElement.querySelector('.serie-img');
    img.src = serie.image;
    img.alt = serie.name;

    return serieElement;
}

// 3/ Créer une fonction qui retourne la liste des styles de séries présents dans les données.

function getStyles2() {
    let listStyles = [];
    series.forEach(serie => {
        serie.styles.forEach(style => {
            if (!listStyles.includes(style)) listStyles.push(style);
        });
    });

    return listStyles;
}

function getStyles() {
    return series
        .flatMap(serie => serie.styles)
        .filter((style, i, array) => array.indexOf(style) === i);
}

// 4/ Créer une fonction qui affiche la liste des styles de séries.

function displaySerieStyles2(styles) {
    for (const style of styles) {
        const newLi = document.createElement('li');
        const newBtn = document.createElement('button');
        newBtn.classList.add('nav-btn');
        newBtn.textContent = style;
        newLi.appendChild(newBtn);
        document.querySelector('#nav-bar-list').appendChild(newLi);
    }
}

function displaySerieStyles(styles) {
    document.querySelector('#nav-bar-list').append(...styles.map(s => createStyleElement(s, countSeriesFromStyle(s))));
}

function createStyleElement(style, nb) {
    // Copy template
    const styleElement = document.importNode(document.getElementById('style-template').content, true);

    // Put the name
    styleElement.querySelector('.nav-btn').textContent = `${style} (${nb})`;

    return styleElement;
}


// 5/ Créer une fonction qui compte le nombre de séries d'un style.

function countSeriesFromStyle2(style) {
    let counter = 0;
    series.forEach(serie => {
        if (serie.styles.includes(style)) counter++;
    });
    return counter;
}

function countSeriesFromStyle(style) {
    return series
        .filter(serie => serie.styles.includes(style))
        .length;
}

// 6/ Affichez dans la liste des styles le nombre de séries corresondantes entre parenthèse.
//      Modifier la fonction de la question 4/


// 7/ Créer une fonction qui retourne les ID des séries d'un style.

function getIdFromStyle2(style) {
    let ids = [];
    series.forEach(serie => {
        if (serie.styles.includes(style)) ids.push(serie.id);
    });
    return ids;
}

function getIdFromStyle(style) {
    return series
        .filter(serie => serie.styles.includes(style))
        .map(serie => serie.id);
}

// 8/ Créer une fonction qui souligne le dernier style cliqué.
// Un seul style doit rester souligné à la fois.
function activeLastStyle() {
    document.getElementById('nav-bar').addEventListener('click', function(event) {
        if (!event.target.classList.contains('nav-btn')) return;

        removeActiveStyles();
        event.target.classList.add('active');
    });
}

// 9/ Créer une fonction pour retirer le soulignement de tous les styles.

function removeActiveStyles() {
    document.querySelectorAll('#nav-bar .active').forEach(e => e.classList.remove('active'));
}

// 10/ Créer une fonction qui affiche dans la page uniquement les séries dont l'id est en paramètre.


// 11/ Modifier la fonction de la question 8/ pour n'afficher que les series du style souligné.


// 12/ Créer une fonction qui retourne toutes les données d'une série à partir de sont ID.


// 13/ Créer une fonction qui permet qu'au clic sur une série, on affiche son id dans la console.


// 14/ Modifier la fonction ci-dessus pour retourner toutes les infos de la serie cliquée dans la console.


// 15/ Créer une fonction permettant d'ajouter une série à une liste de favoris dans un array.
// Une série ne peut être présente qu'une fois dans le tableau.


// 16/ Créer une fonction pour ajouter une série en favori au clic.


// 17/ Créer une fonction qui affiche le nom des séries favorites dans la page.


// 18/ Créer une fonction permettant de retirer une série de la liste des favoris de par son id.


// 19/ Créer une fonction qui fasse qu'au clic sur un favori il se retire de la liste des favoris.


// 20/ Créer une fonction qui affiche le nombre de favoris en titre de la liste des favoris.


// 21/ Créer une fonction qui retourne les id des séries par ordre d'année de sortie.


// 22/ Créer une fonction qui affiche les séries dans la page dans l'ordre des ids passés en paramètre.


// 23/ Créer une fonction qui permet de gérer au click sur un lien dans la page le tri des series par années croissantes.


// 24/ Permettez à la fonction précédente de gérer un click sur un autre lien pour trier les series par années décroissantes.


// 25/ Créer une fonction qui permet de sauvegarder les favoris de l'utilisateur dans son navigateur.


// 26/ Créer une fonction qui permet de récupérer les favoris de l'utilisateur stockés dans son navigateur.