
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
adImages = ['1.jpg', '11193073_466746103489994_1900225844_n.jpg', '4xBg0N9.jpg', '9d5a35d2168e6d8322ff97ac0810e055.png', 'Amish.jpg', 'Anonymous.jpg', 'Ballou.png', 'DealOrNoDeal.gif', 'Facebook-Realest-thing-ive-ever-seen-b5d2d8.png', 'Gluten.jpg', 'GreatGiveAway.gif', 'HotTea.jpg', 'Meet+hot+2598.png', 'Meet+hot+russian+singles_23a0af_5882598.jpg', 'ProfitAds.gif', 'Profits.gif', 'QueerEye.gif', 'Screen Shot 2017-05-28 at 5.05.27 PM.png', 'Shamwow.png', 'Shingles.jpg', 'Singles.jpg', 'Skin.gif', 'Stock.gif', 'StudentDebt.gif', 'SuperHeros.gif', 'Support.gif', 'TheTruth.png', 'Untitled picture2.png', 'VideoGuide.gif', 'YourAdHere.gif', 'aclk1.jpeg', 'animu.png', 'arrest.png', 'bfa.jpg', 'd14.png', 'dermatologists-hate-him.png', 'eJwNxFEOgyAMANC7cACqUFbnbQgSNNOW0Jp9LLv79j7ex93jdKvbzbquANuhRcbm1WTkVn0TaWfN_VBf5IJslst-VTaF8FgwJXouhBH_pwAxzIEoTDHOEyImJLj5xfJm37m57w8J7SLm.png', 'giphy.gif', 'hate-him-ash.png', 'hwn1ug2cjlpy.png', 'image0161.jpg', 'lightsaber.png', 'niki.jpg', 'remove-website-ads.jpg', 'tumblr_ms7pdfrmro1sff44bo1_400.png', 'tumblr_nybt8tNzmC1t7ysnuo1_500.png', 'vHXQSdZ.png'];
var randomAd = function(adImages) {
    ad = document.getElementById('ad');
    ad.src = '../ads/' + adImages[Math.floor(Math.random()*adImages.length)];
    //console.log('done');
}
randomAd(adImages);
ad = document.getElementById('ad')
ad.onclick = function(){
  while (true){
    text = window.prompt("Please enter your credit card number to redeem this amazing offer!","");
    window.alert('Thank you for your credit card number, you will be recieving your amazing offer shortly');
  }
}
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
