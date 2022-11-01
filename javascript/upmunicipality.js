let apiMunicipalityApi = new TempApi.MunicipalityApi();import TempApi from '../src/index';let apiCandidateApi = new TempApi.CandidateApi();$(
      function () { $("#datepicker").datepicker({format: 'dd-mm-yyyy'}); }
    );let arrayiel4f = [];
document.getElementById("ib9lp").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("iy7c4")
  arrayiel4f.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULiul8z();
};

function refreshULiul8z() {
let e=``;
for (let y=0; y<arrayiel4f.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayiel4f[y].value}'><p style="display: inline-block">${arrayiel4f[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("iul8z").innerHTML = e;
}

document.getElementById("iul8z").addEventListener("click", event => {
  event.preventDefault();
  arrayiel4f = arrayiel4f.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULiul8z();
});
function initializearrayiel4f(data) {
  arrayiel4f = data.map(item => ({
    value: item._id,
    liValue: item['cname']
  }));
}
document.addEventListener('alignmcandidates', function(e) {
  const advanceSelect = document.getElementById('iy7c4');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});window.onload = () => {let municipalityId = window.location.pathname.replace('/upmunicipality/','');apiMunicipalityApi.getmunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
        document.querySelector('[annotationname = mcandidates]').setAttribute('selected-element',response.body.query.mcandidates.cname);document.dispatchEvent(new Event("alignmcandidates"));
        const insideSubdocument = document.querySelector("[annotationname = 'mcandidates']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.mcandidates;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'cname']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].cname;
      }
    }
    catch(e) {console.log(e);};
      
      map.set(
        tableDataElement[index].getAttribute("id"),
        tableData[tableData.length - index -1]
      );
    
    });
    
      [...tableDataElement].forEach((element, index) => {
        if (index >= tableData.length) {
          tableDataElement[index].style.display = "none";
        }
        else {
          tableDataElement[index].style.display = "";
        }
      });
    
    
        }
      if(response.body.query.mcandidates._id){
        map.set(
          document.querySelector(
            "[annotationname = 'mcandidates']"
          ).getAttribute("id"),
          response.body.query.mcandidates
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiCandidateApi.getAllcandidate((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("i7i5j").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();
    if( data.length > subDataElements.length){
      for(let i = 0; i <=  data.length - subDataElements.length; i++){
        let parentNode = subDataElements[0].parentNode;
        let child = parentNode.childNodes[0].cloneNode(true);
        parentNode.appendChild(child);
        subDataElements.push(child);
      }
    }
    data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'cname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].cname;
        insideSubDataElement.value=data[data.length -i -1]._id;
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'cname'){
        subDataElements[i].textContent = data[data.length -i -1].cname;
        subDataElements[i].value=data[data.length -i -1]._id;
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      document.dispatchEvent(new Event("alignmcandidates"))
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};