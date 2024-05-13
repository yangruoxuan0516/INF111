const colors = [
    '#FF0000', // Red
    '#FF3300', // OrangeRed
    '#FF6600', // DarkOrange
    '#FF9900', // Orange
    '#FFCC00', // Gold
    '#FFFF00', // Yellow
    '#CCFF33', // LightGreen
    '#99FF66', // PaleGreen
    '#66FF99', // MediumAquamarine
    '#33FFCC', // MediumTurquoise
    '#00FFFF', // Aqua
    '#00CCFF', // DeepSkyBlue
    '#0099FF', // DodgerBlue
    '#0066FF', // RoyalBlue
    '#0033FF', // Blue
    '#3300FF', // MediumSlateBlue
    '#6600FF', // MediumPurple
    '#9900FF', // BlueViolet
    '#CC00FF'  // Purple
];

const titles = [
    'Hello World TypeScript',
    'Hello Html TypeScript',
    'TsConfig.Json',
    'Debug',
    'Html Css 2048',
    'Css Flexbox',
    'Fat Arrow',
    'Map Reduce Filter Find ForEach',
    'Objects',
    'Json',
    'Generics',
    'Exceptions',
    'Async Await',
    'Fetch',
    'Cors',
    'Http CRUD',
    'Forms',
    'Webcomponents',
    'Final Project',
];

const comments = [  
    'Let\'s start easy...',
    'Let\'s start easy... yet this won\'t last',
    'tsc -w is the most useful command ever!',
    '🚫🐛',
    'Loved the game I created and showed it to my mom... proudly!',
    'Frogs... Frogs of different colors... Frogs in different ranks...',
    'Why do we call it fat anyway?',
    'I think about dwarfs every time I see a group of something...',
    'Oh C++ memories...',
    'Json seems to be everywhere...',
    'C++ memories again...',
    'Makes me think about baseball...',
    'It\'s quite gentil to wait for a promise to be resolved... or not',
    'Felt like a hacker somehow...',
    'This result is pretty cool!',
    'Finally had a proper instruction about this... Merci prof!',
    'Might be useful to collect comments on my personal website...?',
    'It\'s cool that ts can be so personalized',
    'Loved the color scheme...',
];

const urls = [
    'https://yangruoxuan0516.github.io/INF111/01/index.html',
    'https://yangruoxuan0516.github.io/INF111/02/index.html',
    'https://yangruoxuan0516.github.io/INF111/03/index.html',
    'https://yangruoxuan0516.github.io/INF111/04/index.html',
    'https://yangruoxuan0516.github.io/INF111/05/index.html',
    'https://yangruoxuan0516.github.io/INF111/06/index.html', 
    'https://yangruoxuan0516.github.io/INF111/07/index.html',
    'https://yangruoxuan0516.github.io/INF111/08/index.html',
    'https://yangruoxuan0516.github.io/INF111/09/index.html',
    'https://yangruoxuan0516.github.io/INF111/10/index.html',
    'https://yangruoxuan0516.github.io/INF111/11/index.html',
    'https://yangruoxuan0516.github.io/INF111/12/index.html',
    'https://yangruoxuan0516.github.io/INF111/13/index.html',
    'https://yangruoxuan0516.github.io/INF111/14/index.html',
    'https://yangruoxuan0516.github.io/INF111/15/index.html', // TODO: deal with CORS
    'https://yangruoxuan0516.github.io/INF111/16/index.html', // same here
    'https://yangruoxuan0516.github.io/INF111/17/index.html', // same here
    'https://yangruoxuan0516.github.io/INF111/18/index.html',
    'https://yangruoxuan0516.github.io/INF111/pf/index.html',
];

// Loop over the colors
for (let i = 0; i < colors.length; i++) {
    const flipCardContainer = document.createElement('div');
    flipCardContainer.className = 'flip-card-container';

    const flipCard = document.createElement('div');
    flipCard.className = 'flip-card';
    flipCardContainer.appendChild(flipCard);

    const flipCardFront = document.createElement('div');
    flipCardFront.className = 'flip-card-front';
    flipCardFront.style.backgroundColor = colors[i];
    flipCard.appendChild(flipCardFront);

    const flipCardBack = document.createElement('div');
    flipCardBack.className = 'flip-card-back';
    flipCardBack.style.backgroundColor = 'white';
    flipCard.appendChild(flipCardBack);

    const TextFront = document.createElement('p');
    TextFront.textContent = 'TP '+ (i+1).toString().padStart(2, '0') + ' - ' + titles[i];
    flipCardFront.appendChild(TextFront);

    const TextBack = document.createElement('p');
    TextBack.innerHTML = `<a href="${urls[i]}">${comments[i]}</a>`;
    flipCardBack.appendChild(TextBack);

    if (i == 4){
        const TextDemo = document.createElement('p');
        TextDemo.innerHTML = `<a href="https://yangruoxuan0516.github.io/INF111/05_demo/index.html">&nbsp;Demo</a>`;
        flipCardBack.appendChild(TextDemo);
        TextDemo.style.color = 'red';
    }

    if (i == 18){
        const TextDemo = document.createElement('p');
        TextDemo.innerHTML = `<a href="https://yangruoxuan0516.github.io/INF111/pf_demo/index.html">&nbsp;Demo</a>`;
        flipCardBack.appendChild(TextDemo);
        TextDemo.style.color = 'red';
    }

    document.body.appendChild(flipCardContainer);

}