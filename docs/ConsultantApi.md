# TempApi.ConsultantApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createconsultant**](ConsultantApi.md#createconsultant) | **POST** /consultant | Creates the data
[**deleteconsultant**](ConsultantApi.md#deleteconsultant) | **DELETE** /consultant/{consultantId} | Delete the element
[**getAllconsultant**](ConsultantApi.md#getAllconsultant) | **GET** /consultant/getAll | Get all the data
[**getconsultant**](ConsultantApi.md#getconsultant) | **GET** /consultant/{consultantId} | Get the element
[**updateconsultant**](ConsultantApi.md#updateconsultant) | **PUT** /consultant/{consultantId} | Updates the element



## createconsultant

> Consultant createconsultant(consultant)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ConsultantApi();
let consultant = new TempApi.Consultant(); // Consultant | data to be created
apiInstance.createconsultant(consultant, (error, data, response) => {
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
 **consultant** | [**Consultant**](Consultant.md)| data to be created | 

### Return type

[**Consultant**](Consultant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteconsultant

> deleteconsultant(consultantId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ConsultantApi();
let consultantId = "consultantId_example"; // String | the Id parameter
apiInstance.deleteconsultant(consultantId, (error, data, response) => {
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
 **consultantId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllconsultant

> [Consultant] getAllconsultant()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ConsultantApi();
apiInstance.getAllconsultant((error, data, response) => {
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

[**[Consultant]**](Consultant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getconsultant

> Consultant getconsultant(consultantId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ConsultantApi();
let consultantId = "consultantId_example"; // String | the Id parameter
apiInstance.getconsultant(consultantId, (error, data, response) => {
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
 **consultantId** | **String**| the Id parameter | 

### Return type

[**Consultant**](Consultant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateconsultant

> Consultant updateconsultant(consultantId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.ConsultantApi();
let consultantId = "consultantId_example"; // String | the Id parameter
let opts = {
  'consultant': new TempApi.Consultant() // Consultant | data to be updated
};
apiInstance.updateconsultant(consultantId, opts, (error, data, response) => {
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
 **consultantId** | **String**| the Id parameter | 
 **consultant** | [**Consultant**](Consultant.md)| data to be updated | [optional] 

### Return type

[**Consultant**](Consultant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

