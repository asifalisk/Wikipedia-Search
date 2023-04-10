let searchInputEle=document.getElementById("searchInput");
let searchResultsEle=document.getElementById("searchResults");
let spinnerEle=document.getElementById("spinner");

function createAndAppendSearchResults(result){
    let {title,link,description}=result;
    let ResultItemEle=document.createElement("div");
    ResultItemEle.classList.add("result-item");
    searchResultsEle.appendChild(ResultItemEle);

    let resultTitle=document.createElement("a");
    resultTitle.classList.add("result-title");
    resultTitle.textContent=title;
    resultTitle.target="_blank";
    resultTitle.href=link;
    ResultItemEle.appendChild(resultTitle);
    
    let titleBreak=document.createElement("br");
    ResultItemEle.appendChild(titleBreak);

    let urlEle=document.createElement("a");
    urlEle.classList.add("result-url");
    urlEle.textContent=title;
    urlEle.target="_blank";
    urlEle.href=link;
    ResultItemEle.appendChild(urlEle);

    let urlBreak=document.createElement("br");
    ResultItemEle.appendChild(urlBreak);

    let desciptionEle=document.createElement("p");
    desciptionEle.classList.add("link-description");
    desciptionEle.textContent=description;
    ResultItemEle.appendChild(desciptionEle)
}


function displayresults(searchresults){
    spinnerEle.classList.toggle("d-none");
    for(let result of searchresults){
        createAndAppendSearchResults(result);
    }
}

function searchresults(event){
    if(event.key==="Enter"){
        spinnerEle.classList.toggle("d-none");
        searchResultsEle.textContent="";
        let searchInput=searchInputEle.value;
        let options={
            method:"GET"
        }

        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
        fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            let {search_results}=data
            displayresults(search_results);
        })
    }
}

searchInputEle.addEventListener('keydown',searchresults)