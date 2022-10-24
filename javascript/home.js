let apiMunicipalityApi = new TempApi.MunicipalityApi();import TempApi from '../src/index';document.getElementById('ijg5f').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ijg5f")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/municipality/' + transitionId;}};document.getElementById('ic22rl').onclick = (event) => {
    event.preventDefault();
    {  
      let transitionId = window.location.href.split('/').at(-1);
      let parentId = "";
      const storedData = window.localStorage.getItem("data");
      const newMap = new Map(JSON.parse(storedData));
      newMap.forEach((value, key) => {
        if (
          document.getElementById(key) !== null &&
          document
            .getElementById(key)
            .contains(document.getElementById("ic22rl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/municipality/' + transitionId;}};window.onload = () => {apiMunicipalityApi.getAllmunicipality((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iof5e").querySelectorAll( "[dataitem='true']" )].filter(
    (element, index, array) =>
    !array.reduce((hasAncestorFlag, dataItem) => hasAncestorFlag || (element.compareDocumentPosition(dataItem) & Node.DOCUMENT_POSITION_CONTAINS) === 8, false)
  );const map = new Map();  data.forEach((item,i) => {
    if(subDataElements.length > i)
      {
        try { 
const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'mimage']");
if(insideSubDataElement !== null && data[data.length -i -1].mimage !== undefined){
  insideSubDataElement.src = data[data.length -i -1].mimage.data;
  insideSubDataElement.name = data[data.length -i -1].mimage.name;
}
else if(subDataElements[i].getAttribute('annotationname') === 'mimage' && data[data.length -i -1].mimage !== undefined){
  subDataElements[i].src = data[data.length -i -1].mimage.data;
  subDataElements[i].name = data[data.length -i -1].mimage.name;
}
 } catch (e) { console.log(e) };try { 
      const insideSubDataElement = subDataElements[i].querySelector("[annotationname = 'mname']");
      if(insideSubDataElement !== null){
        insideSubDataElement.textContent = data[data.length -i -1].mname;
        
      }
      else if(subDataElements[i].getAttribute('annotationname') === 'mname'){
        subDataElements[i].textContent = data[data.length -i -1].mname;
        
      }
     } catch (e) { console.log(e) };
        map.set(subDataElements[i].getAttribute('id'), data[data.length-i-1])
        
      }
      
    });

    window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));
    
    [...subDataElements].forEach((element,index) => {if(index >= data.length) subDataElements[index].style.display = 'none';})}});};