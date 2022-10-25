let apiCandidateApi = new TempApi.CandidateApi();import TempApi from '../src/index';document.getElementById('ifuuql').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/home' ;}};document.getElementById('if2fd').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/home' ;}};document.getElementById('i4e9ar').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/allcandidates' ;}};document.getElementById('i7e5h').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/cmunicipality' ;}};document.getElementById('iwssa').onclick = (event) => {
    event.preventDefault();
    {   location.href= '/ccandidate' ;}};window.onload = () => {let candidateId = window.location.pathname.replace('/candidate/','');apiCandidateApi.getcandidate( candidateId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); try { 
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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cname]').textContent = response.body.query.cname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cbio]').textContent = response.body.query.cbio; } catch (e) { console.log(e) };}});};