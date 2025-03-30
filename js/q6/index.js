console.log("q6")

//  ✅ Easy Level:
//  1️⃣ Create a new <div>, add it to the body, and set its text to "Hello, DOM!".

const body = document.querySelector('body');
const divF = document.createElement("div");
divF.innerHTML = '<h1>Hello,Dom !</h1>';
body.append(divF)
//  2️⃣ Select an unordered list (<ul>) in your HTML and use JavaScript to add three list items (<li>) to it.

    let fruits = ['apple','peach','banana']
    const ulF = document.createElement('ul');
    fruits.forEach( (fruit) => {
        const liUl = document.createElement('li');
        liUl.innerHTML = fruit
        ulF.append(liUl) 
    });
    document.body.appendChild(ulF);
        
//  3️⃣ Create an image (<img>), set its src to "https://via.placeholder.com/150", and append it to the body.

    const img = document.createElement('img');
    img.src="https://via.placeholder.com/150"
    document.body.appendChild(img)
//or
    const divImage = document.createElement('div')
    divImage.innerHTML = `<img src="https://via.placeholder.com/150">`;
    document.body.appendChild(divImage);

//  ✅ Medium Level:
//  4️⃣ Create a table (<table>) with 3 rows and 3 columns. Each cell's text should be "Cell X-Y", where X is the row number and Y is the column number.

const tables = document.createElement('table');
tables.innerHTML = ` 
<tr>
    <td>Cell 1-1</td>
    <td>Cell 1-2</td>
    <td>Cell 1-3</td>
</tr>
<tr>
    <td>Cell 2-1</td>
    <td>Cell 2-2</td>
    <td>Cell 2-3</td>
</tr>
<tr>
    <td>Cell 3-1</td>
    <td>Cell 3-2</td>
    <td>Cell 3-3</td>
</tr>
`;

tables.style.borderCollapse = "collapse";
tables.style.margin = "20px";
tables.querySelectorAll("td").forEach(td => {
    td.style.border = "1px solid black";
    td.style.padding = "8px";
});

document.body.appendChild(tables);



const table = document.createElement('table');
table.style.borderCollapse = "collapse"; 

for (let i = 1; i <= 3; i++) {
    const row = document.createElement('tr'); 
    for (let j = 1; j <= 3; j++) {
        const cell = document.createElement('td'); 
        cell.textContent = `Cell ${i}-${j}`;
        cell.style.border = "1px solid black"; 
        cell.style.padding = "8px";
        row.appendChild(cell);
    }
    table.appendChild(row);
}

document.body.appendChild(table);

//  5️⃣ Select all paragraphs (<p>) in the document and change their text to "Updated Paragraph".
    let pAll = document.querySelectorAll('p');
    console.log(pAll)
    pAll.forEach((item)=>{
        item.innerHTML = "updated text"
    })
//  6️⃣ Select an ordered list (<ol>) and remove its last item.

    const olList = document.querySelector('ol');
    if (olList.lastElementChild) { 
        olList.removeChild(olList.lastElementChild); 
    }
//  ✅ Harder Level:
//  7️⃣ Select all links (<a>) on the page and change their href attribute to "https://example.com".
let linksList = [
    { href: "https://scholar.google.com/", title: "Scholar 1" },
    { href: "https://scholar.google.com/", title: "Scholar 2" },
    { href: "https://scholar.google.com/", title: "Scholar 3" },
    { href: "https://scholar.google.com/", title: "Scholar 4" }
];

linksList.forEach((link) => {
    const linkCreate = document.createElement('a');
    linkCreate.href = link.href; 
    linkCreate.innerHTML = link.title; 
    linkCreate.target = "_blank"; 
    linkCreate.style.display = "block"; 
    linkCreate.style.margin = "5px 0"; 

    document.body.appendChild(linkCreate); 
});


//  8️⃣ In a div containing multiple child elements, remove both the first and last child.

//  9️⃣ Create an input field (<input>), set its value to "Default Text", and append it to the body.

//  🔟 Create a nested list (<ul> inside another <ul>) and append it to the body.