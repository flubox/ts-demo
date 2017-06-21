import 'ts';

window.trad = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc condimentum lacus ac sem dignissim, quis porttitor ligula facilisis. Nam porttitor, lacus ac ultrices mollis, felis lectus interdum purus, ut suscipit urna dolor et enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean mattis tortor nec eros porta vulputate. Nam aliquet nulla at augue faucibus, et congue lacus vehicula. Praesent nec erat et velit cursus luctus. Integer sodales a neque ac ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut vel est malesuada, congue sem vitae, dapibus elit.'
.replace(/[\.,+]/, '').split(' ').map(t => ({title: t})).map((a, i) => ({[i]: a})).reduce((a, b) => ({...a, ...b}), {});

window.fakeEndpoint = require('./demo.json')
.map((each, id) => {
    return {...each, url: each.url.map(url => url.replace('../demo/', '../ts/demo/'))};
});