var obj = JSON.parse(localStorage.getItem("data"))

// console.log(obj)

document.querySelector("#description").innerText=
`
Welcome to ${obj.channelName}

Hope You Like the video
Please Subscribe and press the bell icon aslo

Buy Merch Here - ${obj.merchLink}

Follor us on Instagram - ${obj.instaLink}
Follor us on Twitter - ${obj.twitterLink}

Support us on Buy me a coffee - ${obj.buyMeACoffeeLink}
Support us on Patereon - ${obj.patereonLink}

Intro Credits - ${obj.introLink}
Outro Credits - ${obj.outroLink}
BGM Credits - ${obj.bgmLink}

Copyright Disclaimer under Section 107 of the copyright act 1976, allowance is made for fair use for purposes such as criticism, comment, news reporting, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favour of fair use.

`

