let resources = {
    p1: {
        title: 'Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM)',
        bodyText: 'The PM-KUSUM scheme provides large incentives in the form of subsidies in order to install solar pumps and grid facilities that are solar powered while at the same time covering up 60% of the installation costs while the remaining is financed through those same loans. Due to this, the farmers do not have to depend on expensive fuel and fluctuating electricity, all in all making this clean energy quite affordable for agricultural use.',
        url: 'img/solar.webp'
    },
    p2: {
        title: 'Jawaharlal Nehru National Solar Mission (JNNSM)',
        bodyText: 'The Jawaharlal Nehru National Solar mission was set up to promote solar energy in India through several incentives and policies with their main objective including capital incentives for solar installations, promoting grid-connected solar power projects. This led to a boost in solar capacity in India, making solar energy more accessible to both urban and rural residents. ',
        url: 'img/building.webp'
    },
    p3: {
        title: 'Ujala Scheme',
        bodyText: 'The Indian Government created the Ujala Scheme to make energy-efficient LED lighting affordable to everybody. Along with reducing the power rates for families by using LED lights, it also offers initiative on sibsidized LED bulbs, tube lights and energy efficient fans while at the same time this also contributes to lower carbon emissions. This project has made clean, energy-efficient lighting available and affordable to millions of people throughout India.',
        url: 'img/lightbulb.webp'
    }
};

// get the references to the active parts of html
let buttons = document.querySelectorAll('#controls button');
let dc = document.getElementById('dynamic-content');
let controls = document.getElementById('controls');


// event handler
function selectPage(ev) {
    let currentButton = ev.target.closest('button');


    // styling the active button here:

    for (let button of buttons) {
        if (button.id) {
            // remove it!
            button.removeAttribute('id');
        }
    }

    // add the attribute id="active" to the currently clicked element
    currentButton.setAttribute('id', 'active');


    //div#dynamic-content:
    dc.innerHTML = `
    <h2>${resources[currentButton.dataset.id].title}</h2> 
    <img src="${resources[currentButton.dataset.id].url}">
    <p>${resources[currentButton.dataset.id].bodyText}</p>
    `;
}


window.addEventListener('DOMContentLoaded', (event) => {
    selectPage({
        target: buttons[0]
    });
});

// registering buttons for click event
buttons[0].addEventListener('click', selectPage);
buttons[1].addEventListener('click', selectPage);
buttons[2].addEventListener('click', selectPage);