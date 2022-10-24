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
     location.href= '/candidate/' + transitionId;}};window.onload = () => {let municipalityId = window.location.pathname.replace('/mcandidates/','');apiMunicipalityApi.getmunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = mname]').textContent = response.body.query.mname; } catch (e) { console.log(e) };try { 
        document.querySelector('[annotationname = mcandidates]').setAttribute('selected-element',response.body.query.mcandidates.undefined);
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
      ].querySelector("[annotationname = 'cimage']");
      if (attributeSubdocumentElement !== null) {
        attributeSubdocumentElement.src = tableData[tableData.length - index -1].cimage;
      }
    }
    catch(e) {console.log(e);}; try {
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
     } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};