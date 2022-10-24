# TempApi.CandidateApi

All URIs are relative to *http://localhost:8090/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createcandidate**](CandidateApi.md#createcandidate) | **POST** /candidate | Creates the data
[**deletecandidate**](CandidateApi.md#deletecandidate) | **DELETE** /candidate/{candidateId} | Delete the element
[**getAllcandidate**](CandidateApi.md#getAllcandidate) | **GET** /candidate/getAll | Get all the data
[**getcandidate**](CandidateApi.md#getcandidate) | **GET** /candidate/{candidateId} | Get the element
[**updatecandidate**](CandidateApi.md#updatecandidate) | **PUT** /candidate/{candidateId} | Updates the element



## createcandidate

> Candidate createcandidate(candidate)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CandidateApi();
let candidate = new TempApi.Candidate(); // Candidate | data to be created
apiInstance.createcandidate(candidate, (error, data, response) => {
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
 **candidate** | [**Candidate**](Candidate.md)| data to be created | 

### Return type

[**Candidate**](Candidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletecandidate

> deletecandidate(candidateId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CandidateApi();
let candidateId = "candidateId_example"; // String | the Id parameter
apiInstance.deletecandidate(candidateId, (error, data, response) => {
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
 **candidateId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllcandidate

> [Candidate] getAllcandidate()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CandidateApi();
apiInstance.getAllcandidate((error, data, response) => {
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

[**[Candidate]**](Candidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getcandidate

> Candidate getcandidate(candidateId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CandidateApi();
let candidateId = "candidateId_example"; // String | the Id parameter
apiInstance.getcandidate(candidateId, (error, data, response) => {
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
 **candidateId** | **String**| the Id parameter | 

### Return type

[**Candidate**](Candidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatecandidate

> Candidate updatecandidate(candidateId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.CandidateApi();
let candidateId = "candidateId_example"; // String | the Id parameter
let opts = {
  'candidate': new TempApi.Candidate() // Candidate | data to be updated
};
apiInstance.updatecandidate(candidateId, opts, (error, data, response) => {
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
 **candidateId** | **String**| the Id parameter | 
 **candidate** | [**Candidate**](Candidate.md)| data to be updated | [optional] 

### Return type

[**Candidate**](Candidate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

