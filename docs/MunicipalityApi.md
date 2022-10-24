# TempApi.MunicipalityApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createmunicipality**](MunicipalityApi.md#createmunicipality) | **POST** /municipality | Creates the data
[**deletemunicipality**](MunicipalityApi.md#deletemunicipality) | **DELETE** /municipality/{municipalityId} | Delete the element
[**getAllmunicipality**](MunicipalityApi.md#getAllmunicipality) | **GET** /municipality/getAll | Get all the data
[**getmunicipality**](MunicipalityApi.md#getmunicipality) | **GET** /municipality/{municipalityId} | Get the element
[**updatemunicipality**](MunicipalityApi.md#updatemunicipality) | **PUT** /municipality/{municipalityId} | Updates the element



## createmunicipality

> Municipality createmunicipality(municipality)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MunicipalityApi();
let municipality = new TempApi.Municipality(); // Municipality | data to be created
apiInstance.createmunicipality(municipality, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipality** | [**Municipality**](Municipality.md)| data to be created | 

### Return type

[**Municipality**](Municipality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletemunicipality

> deletemunicipality(municipalityId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MunicipalityApi();
let municipalityId = "municipalityId_example"; // String | the Id parameter
apiInstance.deletemunicipality(municipalityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipalityId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllmunicipality

> [Municipality] getAllmunicipality()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MunicipalityApi();
apiInstance.getAllmunicipality((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Municipality]**](Municipality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getmunicipality

> Municipality getmunicipality(municipalityId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MunicipalityApi();
let municipalityId = "municipalityId_example"; // String | the Id parameter
apiInstance.getmunicipality(municipalityId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipalityId** | **String**| the Id parameter | 

### Return type

[**Municipality**](Municipality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatemunicipality

> Municipality updatemunicipality(municipalityId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.MunicipalityApi();
let municipalityId = "municipalityId_example"; // String | the Id parameter
let opts = {
  'municipality': new TempApi.Municipality() // Municipality | data to be updated
};
apiInstance.updatemunicipality(municipalityId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **municipalityId** | **String**| the Id parameter | 
 **municipality** | [**Municipality**](Municipality.md)| data to be updated | [optional] 

### Return type

[**Municipality**](Municipality.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

