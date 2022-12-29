import React, { useEffect, useState } from "react";
import {
    OpenApiClient_rest_api_versioning_backend_server_v1,
} from "lisecmobutilities";

let siteName = null;


export const versionNegotiation = async (requestedService, restApiVersion) => {
    let data = {}
    let dataVersion = {}
    let highestRestApiVersionSupported = ''
    let negotiatedVersion = ''
    switch (requestedService) {
        case 'rest_api_versioning_backend_server':

            let getCurrentVersionPromise = new Promise(resolve => {
                OpenApiClient_rest_api_versioning_backend_server_v1.getClient(siteName).GET_Version(
                    callbackGetVersion.bind(this, resolve)
                );
            })

            data = await getCurrentVersionPromise;
            let splitVal = data['api-supported-versions'].split(",");
            let extractedValueFromServer = (splitVal[splitVal.length - 1]).trim(); // version value which we received from server
            highestRestApiVersionSupported = extractedValueFromServer
            // finding server version with client version if same versio0n found we take that client version
            // else we fall back to last lesser version of server and we take that

            let restApiVersionArr = Object.keys(restApiVersion).filter(function (x) {
                return x <= extractedValueFromServer;
            });
            negotiatedVersion = restApiVersion[extractedValueFromServer] !== undefined ? extractedValueFromServer : restApiVersionArr[restApiVersionArr.length - 1]
            dataVersion = restApiVersion[extractedValueFromServer] !== undefined ? restApiVersion[extractedValueFromServer] : restApiVersion[restApiVersionArr[restApiVersionArr.length - 1]]
            break;

        default:
            break;

    }
    return [dataVersion , highestRestApiVersionSupported, negotiatedVersion]
}

const callbackGetVersion = (resolve, responseData) => {
    if (responseData.state.response.status === 200) {
        var jsonData = responseData.state.response.headers

        if (jsonData !== undefined && Object.keys(jsonData).length !== 0) {
            resolve(jsonData)
        } else { resolve({}) }
    }
};