let apiCandidateApi = new TempApi.CandidateApi();import TempApi from '../src/index';document.getElementById('ifuuql').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('if2fd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/' ;}};document.getElementById('i4e9ar').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/allcandidates' ;}};document.getElementById('i7e5h').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/cmunicipality' ;}};document.getElementById('iwssa').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/ccandidate' ;}};document.getElementById('ie0zy').onclick = (event) => {
    event.preventDefault();
    let candidateId = window.location.pathname.replace('/consultant/','');
      if(candidateId === '/consultant' || candidateId === ''){
        let parentId = "";
        const storedData = window.localStorage.getItem('data');
        const newMap = new Map(JSON.parse(storedData));
        newMap.forEach((value, key) => {
          if (
            document
              .getElementById(key)
              .contains(document.getElementById("ie0zy")) === true &&
              document.getElementById(key).contains(document.getElementById(parentId)) === false
          ) {
            candidateId = value._id;
            parentId = key;
          }
        });
      }
    apiCandidateApi.deletecandidate( candidateId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully.');{   location.href= '/allcandidates' ;}}});};window.onload = () => {let candidateId = window.location.pathname.replace('/consultant/','');apiCandidateApi.getcandidate( candidateId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
      if(response.body.query.cimage !== undefined){
        if(document.querySelector('[annotationname = cimage]').getAttribute('type') === 'file'){
          document.querySelector('[annotationname = cimage]').setAttribute('data-image-base64',response.body.query.cimage.data);
          let fileName = response.body.query.cimage.name;
          let file = new File([response.body.query.cimage.data], fileName,{lastModified:new Date().getTime()}, 'utf-8');
          let container = new DataTransfer();
          container.items.add(file);

          document.querySelector("[annotationname = cimage]").files = container.files;
        }
        else {
          document.querySelector('[annotationname = cimage]').src = response.body.query.cimage.data ;
        }
        document.querySelector('[annotationname = cimage]').name = response.body.query.cimage.name ;
      }
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cname]').textContent = response.body.query.cname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cbio]').textContent = response.body.query.cbio; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};