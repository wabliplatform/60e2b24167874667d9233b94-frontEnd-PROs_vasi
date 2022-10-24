let apiMunicipalityApi = new TempApi.MunicipalityApi();import TempApi from '../src/index';document.getElementById('if2fd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/home' ;}};document.getElementById('i56eh').onclick = (event) => {
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
            .contains(document.getElementById("i56eh")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/mcandidates/' + transitionId;}};document.getElementById('iw4ibx').onclick = (event) => {
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
            .contains(document.getElementById("iw4ibx")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updatemun/' + transitionId;}};document.getElementById('i1vazi').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/home/','');
      if(municipalityId === '/home' || municipalityId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i1vazi")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            municipalityId = value._id;
            parentId = key;
          }
        });
      }
    apiMunicipalityApi.deletemunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('i3qnf').onclick = (event) => {
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
            .contains(document.getElementById("i3qnf")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/mcandidates/' + transitionId;}};document.getElementById('ie7f4').onclick = (event) => {
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
            .contains(document.getElementById("ie7f4")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updatemun/' + transitionId;}};document.getElementById('iufo5').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/home/','');
      if(municipalityId === '/home' || municipalityId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("iufo5")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            municipalityId = value._id;
            parentId = key;
          }
        });
      }
    apiMunicipalityApi.deletemunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('ism3w').onclick = (event) => {
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
            .contains(document.getElementById("ism3w")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/mcandidates/' + transitionId;}};document.getElementById('i2bef').onclick = (event) => {
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
            .contains(document.getElementById("i2bef")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updatemun/' + transitionId;}};document.getElementById('i3d1k').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/home/','');
      if(municipalityId === '/home' || municipalityId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("i3d1k")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            municipalityId = value._id;
            parentId = key;
          }
        });
      }
    apiMunicipalityApi.deletemunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};document.getElementById('ihvgl').onclick = (event) => {
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
            .contains(document.getElementById("ihvgl")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/mcandidates/' + transitionId;}};document.getElementById('isfex').onclick = (event) => {
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
            .contains(document.getElementById("isfex")) === true &&
            document.getElementById(key).contains(document.getElementById(parentId)) === false
        ) {
          transitionId = value._id;
          parentId = key;
        }
      });
     location.href= '/updatemun/' + transitionId;}};document.getElementById('izb6i').onclick = (event) => {
    event.preventDefault();
    let municipalityId = window.location.pathname.replace('/home/','');
      if(municipalityId === '/home' || municipalityId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("izb6i")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            municipalityId = value._id;
            parentId = key;
          }
        });
      }
    apiMunicipalityApi.deletemunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/home' ;}}});};window.onload = () => {apiMunicipalityApi.getAllmunicipality((error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const subDataElements =[...document.getElementById("iof5e").querySelectorAll( "[dataitem='true']" )].filter(
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