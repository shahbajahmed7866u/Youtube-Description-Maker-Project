document.querySelector("#form").addEventListener("submit",hahaha)



function hahaha(){
    event.preventDefault()
    var obj={
        channelName:form.channelName.value,
        instaLink:form.instaLink.value,
        twitterLink:form.twitterLink.value,
        buyMeACoffeeLink:form.buyMeACoffeeLink.value,
        patereonLink:form.patereonLink.value,
        introLink:form.introLink.value,
        outroLink:form.outroLink.value,
        bgmLink:form.bgmLink.value,
        merchLink:form.merchLink.value,
    }

    localStorage.setItem("data",JSON.stringify(obj))
    window.location.href="descopy.html"
}