let apiMunicipalityApi = new TempApi.MunicipalityApi();import TempApi from '../src/index';let apiCandidateApi = new TempApi.CandidateApi();document.getElementById('ifuuql').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('if2fd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('i4e9ar').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/allcandidates' ;}};document.getElementById('i7e5h').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/cmunicipality' ;}};document.getElementById('iwssa').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/ccandidate' ;}};
 function calculateSize(img, maxWidth, maxHeight) {
      let width = img.width;
      let height = img.height;
    
      // calculate the width and height, constraining the proportions
      if (width > height) {
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
      } else {
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }
      }
      return [width, height];
    }const convertBase64 = (file) => {
          return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            };

            fileReader.onerror = (error) => {
                reject(error);
            };
          });
        };
document.getElementById('formFile').addEventListener("change", async(e) => {
            
      const MAX_WIDTH = 300;
      const MAX_HEIGHT = 300;
      const MIME_TYPE = "image/jpeg";
      const QUALITY = 0.9;
      const file = e.target.files[0]; // get the file
      const blobURL = URL.createObjectURL(file);
      const img = new Image();
      img.src = blobURL;
      img.onerror = function () {
        URL.revokeObjectURL(this.src);
        console.log("Cannot load image");
      };
      img.onload = function () {
        URL.revokeObjectURL(this.src);
        const [newWidth, newHeight] = calculateSize(img, MAX_WIDTH, MAX_HEIGHT);
        const canvas = document.createElement("canvas");
        canvas.width = newWidth;
        canvas.height = newHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, newWidth, newHeight);
        canvas.toBlob(
          async (blob) => {
            const base64 = await convertBase64(blob);
    
            document
              .getElementById('formFile')
              .setAttribute("data-image-base64", base64);
            document
              .getElementById('formFile')
              .setAttribute("name", e.target.files[0].name);
          },
          MIME_TYPE,
          QUALITY
        );
      };});
let arrayiz4py = [];
document.getElementById("iojvm").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("i8qel")
  arrayiz4py.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULiqxgd();
};

function refreshULiqxgd() {
let e=``;
for (let y=0; y<arrayiz4py.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayiz4py[y].value}'><p style="display: inline-block">${arrayiz4py[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("iqxgd").innerHTML = e;
}

document.getElementById("iqxgd").addEventListener("click", event => {
  event.preventDefault();
  arrayiz4py = arrayiz4py.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULiqxgd();
});
function initializearrayiz4py(data) {
  arrayiz4py = data.map(item => ({
    value: item._id,
    liValue: item['cname']
  }));
}
document.addEventListener('alignmcandidates', function(e) {
  const advanceSelect = document.getElementById('i8qel');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i2uqq').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/upmunicipality/','');let municipality = new TempApi.Municipality();municipality['mimage'] = {
        data: document.querySelector("[annotationname = 'mimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'mimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'mimage']").src,
        name: document.querySelector("[annotationname = 'mimage']").getAttribute("name")
      };municipality['mname'] = document.querySelector("[annotationname = 'mname']").value;municipality['mcandidates'] = arrayiz4py.map(item => item.value); let opts = {municipality};apiMunicipalityApi.updatemunicipality( municipalityId, opts, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); 
      if(response.body.query.mimage !== undefined){

        if(document.querySelector('[annotationname = mimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = mimage]').setAttribute('data-image-base64',response.body.query.mimage.data);
        }
        else{
          document.querySelector('[annotationname = mimage]').src = response.body.query.mimage.data;
        }
        document.querySelector('[annotationname = mimage]').name = response.body.query.mimage.name;
      }
      document.querySelector('[annotationname = mname]').value = response.body.query.mname ;initializearrayiz4py(response.body.query.mcandidates|| []) ; {   location.href= '/' ;}}});};document.getElementById('ie5fl').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/upmunicipality/','');
      if(municipalityId === '/upmunicipality' || municipalityId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ie5fl")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            municipalityId = value._id;
            parentId = key;
          }
        });
      }
    apiMunicipalityApi.deletemunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/' ;}}});};window.onload = () => {let municipalityId = window.location.pathname.replace('/upmunicipality/','');apiMunicipalityApi.getmunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = mname]').value = response.body.query.mname; } catch (e) { console.log(e) };try { 
      if(response.body.query.mimage !== undefined){
        if(document.querySelector('[annotationname = mimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = mimage]').setAttribute('data-image-base64',response.body.query.mimage.data);
          let fileName = response.body.query.mimage.name;
          let file = new File([response.body.query.mimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = mimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = mimage]').src = response.body.query.mimage.data ;
        }
        document.querySelector('[annotationname = mimage]').name = response.body.query.mimage.name ;
      }
       } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = mcandidates]').setAttribute('selected-element',response.body.query.mcandidates.cname);document.dispatchEvent(new Event("alignmcandidates"));
        const insideSubdocument = document.querySelector("[annotationname = 'mcandidates']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.mcandidates;
    initializearrayiz4py(tableData); 
 refreshULiqxgd();
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
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});apiCandidateApi.getAllcandidate((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("ipwtw").querySelectorAll( "[dataitem='true']" )].filter(
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