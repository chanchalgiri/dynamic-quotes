let text = document.getElementById("quote");
let auth = document.getElementById("author");
let newQ = document.getElementById("new-quote");
let tweetPost = document.getElementById("tweetNow");
let realData = " ";

const post = () => {
    let twitterPost = `https://twitter.com/intent/tweet?text=${text.innerText} ${auth.textContent}`;
    window.open(twitterPost);
};

const newQuote = () => {
    let rnum = Math.floor(Math.random() * 1642);
    text.innerText = realData[rnum].text;
    if(realData[rnum].author == null){
        auth.textContent = "-Unkown";
    }
    else{
        auth.textContent = `- ${realData[rnum].author}`;
    }
};

const getQuote = async() => {
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
        realData = await data.json();
        newQuote();
    } catch (error) {}
};

newQ.addEventListener("click",getQuote);
tweetPost.addEventListener("click",post);
getQuote();