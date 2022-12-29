import * as commonFunction from '../lib/responseFunction';
import OpenApiClient_authentication_v1 from '../openapi/openapiclient_authentication_v1';
import OpenApiClient_authorization_v1 from '../openapi/openapiclient_authorization_v1';

export const getProductionSites = async (selectedSite) => {
  const productionSites =  new Promise((resolve, reject) => {
    const callbackGetProductionSites = (responseData, resolve) => {
      if (
        responseData.state.response !== undefined &&
        (responseData.state.response.status === 200 ||
          responseData.state.response.status === 201)
      ) {
        var result = commonFunction.convertToUint(
          responseData.state.response.data,
        );

        resolve(result);
      } else {
        // reject(resolve)
        // resolve(responseData)
        // reject(responseData)
      }
    };
    OpenApiClient_authentication_v1.getClient(selectedSite).GET_ProductionSites(
      (res) => callbackGetProductionSites(res, resolve)
    );
  });
  return productionSites;
};

export const getUserAuthorizations = async (selectedSite,productionSite) => {
  const getAuthorization =  new Promise((resolve, reject) => {
    const callbackGetUserAuthorizations = (responseData, resolve) => {
      if (
        responseData.state.response !== undefined &&
        (responseData.state.response.status === 200 ||
          responseData.state.response.status === 201)
      ) {
        var result = commonFunction.convertToUint(
          responseData.state.response.data,
        );

        resolve(result);
      } else {
        // reject(resolve)
        // resolve(responseData)
        // reject(responseData)
      }
    };
    OpenApiClient_authorization_v1.getClient(selectedSite).GET_Users_Authorizations_productionSiteId(
      (res) => callbackGetUserAuthorizations(res, resolve),
      productionSite
    );
  });
  return getAuthorization;
};
