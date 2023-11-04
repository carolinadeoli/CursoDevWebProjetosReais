const facebookButton = document.getElementById('facebook-button');
const twitterButton = document.getElementById('twitter-button');

function shareOnFacebook(){
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://m.facebook.com/login.php?next=https%3A%2F%2Fm.facebook.com%2Fsharer.php%3Fsession_id%3Ddfe93069-d5c8-4f25-aeef-9c00da2f56e4&refsrc=deprecated&_rdr`
    window.open(shareUrl, '_blank');
}

function shareOnTwitter(){
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://twitter.com/?lang=pt-br`
    window.open(shareUrl, '_blank');
}