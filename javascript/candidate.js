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
    {   location.href= '/allcandidates' ;}};window.onload = () => {let candidateId = window.location.pathname.replace('/candidate/','');apiCandidateApi.getcandidate( candidateId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { 
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
       } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cname]').textContent = response.body.query.cname; } catch (e) { console.log(e) };try { document.querySelector('[annotationname = cbio]').textContent = response.body.query.cbio; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = cconsultants]').setAttribute('selected-element',response.body.query.cconsultants.undefined);
        const insideSubdocument = document.querySelector("[annotationname = 'cconsultants']");
        if (insideSubdocument !==null) {
          const tableData = response.body.query.cconsultants;
    
    const tableDataElement = insideSubdocument.querySelectorAll("[dataitem='true']");
    tableData.forEach((data,index) => {
      if(tableDataElement.length < index) {
        return;
      }
       try {
      const attributeSubdocumentElement = tableDataElement[
        index
      ].querySelector("[annotationname = 'consname']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.textContent = tableData[tableData.length - index -1].consname;
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
      if(response.body.query.cconsultants._id){
        map.set(
          document.querySelector(
            "[annotationname = 'cconsultants']"
          ).getAttribute("id"),
          response.body.query.cconsultants
        );
      }
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};