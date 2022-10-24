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
     location.href= '/candidate/' + transitionId;}};window.onload = () => {let municipalityId = window.location.pathname.replace('/mcandidates/','');apiMunicipalityApi.getmunicipality( municipalityId, (error, data, response) => { if (error) {console.error(error);} else { console.log('API called successfully. Returned data: ' + data); const map = new Map();try { document.querySelector('[annotationname = mname]').textContent = response.body.query.mname; } catch (e) { console.log(e) };window.localStorage.setItem('data', JSON.stringify(Array.from(map.entries())));}});};