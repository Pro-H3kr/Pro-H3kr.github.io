
/*ads = document.getElementsByClassName('ad');
[].forEach.call(ads, function (ad) {adImages = ['aclk1.jpeg']; randomAd(ad, adImages)});
randomAd = function(ad, adImages){
    console.log(ad)
    ad.src = '../ads/' + adImages[Math.floor(Math.random()*adImages.length)];
}
randomAd();*/
/*Array.from(document.getElementsByClassName("ad")).forEach(
    function(element, index, array) {
        console.log(element);
        element.src = '../ads/' + adImages[Math.floor(Math.random()*adImages.length)];
    }
);
*/
adImages = ['aclk1.jpeg', 'giphy.gif', 'Shamwow.png', 'DealOrNoDeal.gif','GreatGiveAway.gif','Meet+hot+2598.png','Meet+hot+russian+singles_23a0af_5882598.jpg', 'ProfitAds.gif','Profits.gif', 'QueerEye.gif', 'remove-website-ads.jpg','Skin.gif', 'Stock.gif', 'StudentDebt.gif','SuperHeros.gif','Support.gif','VideoGuide.gif','YourAdHere.gif'];
var randomAd = function(adImages) {
    ad = document.getElementById('ad');
    ad.src = '../ads/' + adImages[Math.floor(Math.random()*adImages.length)];
    //console.log('done');
}
randomAd(adImages);
/*randomAd = function(adImages){
    ads = document.getElementsByClassName('ad');
    console.log(ads.item(0));
    console.log(ads.item(0).src);

    for (i=0;i<=ads.length;i++){
        console.log(ads.item(i));
        console.log(ads.item(i).src);
        if (ads.item(i) == null){
            console.log('Element: null');
        } else {
            console.log('Element: ' + ads.item(i));
        }
        console.log(ads.item(i).src);
        ads.item(i).src = '../ads/' + adImages[Math.floor(Math.random()*adImages.length)+1];
        console.log(ads.item(i).src);
    }
}
randomAd(adImages);
*/
