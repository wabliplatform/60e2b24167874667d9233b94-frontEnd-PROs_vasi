let apiCandidateApi = new TempApi.CandidateApi();import TempApi from '../src/index';let apiMunicipalityApi = new TempApi.MunicipalityApi();let municipality = new TempApi.Municipality();document.getElementById('ifuuql').onclick = (event) => {
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
let arrayijaug = [];
document.getElementById("idpqe").onclick = event => {
  event.preventDefault();
  const select = document.getElementById("iak4k")
  arrayijaug.push({
      value: select.value,
      liValue: select.selectedOptions[0].textContent
  });
  select.value = "";
  select.selectedIndex = 0;
  refreshULih9u4();
};

function refreshULih9u4() {
let e=``;
for (let y=0; y<arrayijaug.length; y++)
 {
   e += `<li index='${y}' arrayvalue='${arrayijaug[y].value}'><p style="display: inline-block">${arrayijaug[y].liValue}</p><button class="btn pointer bi bi-trash delete-btn" style="display: inline-block;float: right;background-color: red;color: white;" index='${y}'>&nbsp;Delete</button></li>`;
 }
document.getElementById("ih9u4").innerHTML = e;
}

document.getElementById("ih9u4").addEventListener("click", event => {
  event.preventDefault();
  arrayijaug = arrayijaug.filter(
    (item, index) => +event.target.getAttribute("index") !== index
  );
  refreshULih9u4();
});
function initializearrayijaug(data) {
  arrayijaug = data.map(item => ({
    value: item._id,
    liValue: item['cname']
  }));
}
document.addEventListener('alignmcandidates', function(e) {
  const advanceSelect = document.getElementById('iak4k');
  const selectedElement = advanceSelect.getAttribute('selected-element');
  if (!selectedElement) return;
  [...advanceSelect.querySelectorAll("[annotationname]")].forEach(
    optionElement => {
      if (optionElement.value === selectedElement)
        optionElement.setAttribute("selected", true);
    }
  );
});document.getElementById('i0bg9').onclick = (event) => {
    event.preventDefault();
    municipality['mimage'] = {
        data: document.querySelector("[annotationname = 'mimage']").getAttribute("data-image-base64") !== null ? document.querySelector("[annotationname = 'mimage']").getAttribute("data-image-base64") : document.querySelector("[annotationname = 'mimage']").src,
        name: document.querySelector("[annotationname = 'mimage']").getAttribute("name")
      };
      municipality['mname'] = document.querySelector("[annotationname = 'mname']").value;municipality["mcandidates"] = [...document.querySelector("[annotationname = 'mcandidates']").querySelectorAll("[arrayvalue]")].map(li=> li.getAttribute('arrayvalue'));apiMunicipalityApi.createmunicipality( municipality, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); {   location.href= '/' ;}}});};window.onload = () => {apiCandidateApi.getAllcandidate((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("it4eg").querySelectorAll( "[dataitem='true']" )].filter(
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