const sheetID = '1jnlfz6PV8zGmE2tjAn97LG7J-6m4r2ffa75B75stmEc';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'users';
const query = encodeURIComponent('Select *');
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded',init);
 
function init(){
    console.log('ready');
    fetch(url)
    .then(res => res.text())
    .then(rep => {
        //console.log(rep);
        const jsData = JSON.parse(rep.substr(47).slice(0,-2));
        console.log(jsData);
        const colz = [];
        jsData.table.cols.forEach((heading)=>{
            if(heading.label) {
            colz.push(heading.label.toLowerCase().replace(/\s/g,''));
            }
        })
        jsData.table.rows.forEach((main)=>{
            //console.log(main);
            const row = {};
            colz.forEach((ele,ind)=>{
                //console.log(ele);
                row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
            })
            data.push(row);
        })
        console.log(data);
    })
}