const popUp = document.getElementById("extraP");
const popUpBtn = document.getElementById("popUpBtn");
const bodyDiv = document.getElementById("bodyDiv");
const jobListDiv = document.getElementById("jobList");

const hidePopUp = () => {
    popUp.style.display = "none";
    bodyDiv.style.display = "block";
    fetchData();
}

bodyDiv.style.display = "none";
popUpBtn.addEventListener("click", hidePopUp);

async function fetchData() {
    const apiKey = "eyJhbGciOiJFZERTQSIsImtpZCI6ImY1MTk3NDcwLWZiOTctOGNkMy04ZjY5LTE2ZWY0YmI3YjNiMyJ9.eyJhdWQiOiJzc3Quc2NhbGVyLmNvbSIsImV4cCI6MTc3MDMzMzMzNSwiaWF0IjoxNzM4Nzc2MzgzLCJpc3MiOiJodHRwczovL29wcy5jb3Jlc2lnbmFsLmNvbTo4MzAwL3YxL2lkZW50aXR5L29pZGMiLCJuYW1lc3BhY2UiOiJyb290IiwicHJlZmVycmVkX3VzZXJuYW1lIjoic3N0LnNjYWxlci5jb20iLCJzdWIiOiI5Nzg4ZDg5Ni0yNzBjLTU4NjgtMTY0Mi05MWFiZDk0MGEwODYiLCJ1c2VyaW5mbyI6eyJzY29wZXMiOiJjZGFwaSJ9fQ.vgqDViSZ8K_5QnZOT56LhKUkNQ59a9jswhj0cvldqK11sjgshiCUsZY7VrA9I81C3d1e4T3LdQYRU-CNzQsjDQ";
    const apiUrl = 'https://api.coresignal.com/v1/company';

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        displayCompanyCards(data.data);
    }
    catch (error) {
        console.error('Error:', error);
        document.getElementById('results').innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
}

function displayCompanyCards(companies){
    companies.forEach((company)=>{
        createCompanyCard(company.name, company.industry);
    });
}

function createCompanyCard(name, industry) {
    console.log("hey");
    let pDiv = document.createElement('div');
    pDiv.setAttribute('class', "jobCard");
    pDiv.innerHTML = `<div class="cardText"><div class="cardHeadDiv"><h3 class="cardHead">${name}</h3></div><div class="cardBodyDiv"><p class="cardBody">${industry}</p></div></div><div class="cardSaveDiv"><button class="cardSave saved">Save</button></div>`;
    jobListDiv.appendChild(pDiv);
}