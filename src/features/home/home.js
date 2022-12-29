import React, { Component, useEffect, useState } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { LiButton } from 'limobcomponents';
import {
  getAuthorizationRightsBasedFeatureId,
  postFeatureActions,
  getallUsersAuthorizations,
} from 'lisecmobutilities/src/utilities/utils/loginUtils';
import { OpenApiClient_Authorization_v1 } from 'lisecmobutilities/';
import {
  SELECTEDSITE,
  PRODUCTIONSITES,
  AUTHORIZATIONS,
} from '../../constants/localconstants';
import Toast from 'react-native-simple-toast';
import { mobile_config } from '../../lilayoutauthentication/authconfig';
import AsyncStorage from '@react-native-community/async-storage';

//Local imports
import * as LocalSettings from 'lisecmobutilities';
import {
  OpenApiClient_rest_api_versioning_backend_server_v1,
  OpenApiClient_rest_api_versioning_backend_server_v1_1,
  OpenApiClient_rest_api_versioning_backend_server_v2
} from 'lisecmobutilities';

// import {AppUtils} from 'lisecmobutilities';
import { versionNegotiation } from '../../utils/versioningnegotiation';
import * as commonFunction from 'lisecmobutilities';
import { DataTable } from 'react-native-paper';
import { FONTS, LIGHT_THEME } from '../../constants/theme';
const restApiVersion = {
  '1': OpenApiClient_rest_api_versioning_backend_server_v1,
  '1.1': OpenApiClient_rest_api_versioning_backend_server_v1_1,
  '2.0': OpenApiClient_rest_api_versioning_backend_server_v2

}
const Home = () => {
  const [studentData, setstudentData] = useState([]);
  const [clientVersion, setclientVersion] = useState('v2.0')
  const [restapiVersion, setrestapiVersion] = useState('-');
  const [negotiatedVersion, setnegotiatedVersion] = useState('-')
  useEffect(() => {
    versoinFunctionAccess();
  }, []);

  const versoinFunctionAccess = async () => {
    let versionVal = await versionNegotiation('rest_api_versioning_backend_server', restApiVersion)
    setrestapiVersion("v"+ versionVal[1])
    setnegotiatedVersion("v"+ versionVal[2])
    versionVal[0].getClient(null).GET_Students(
      callbackGetStudentClasses
    );
  }

  const callbackGetStudentClasses = (responseData) => {
    if (responseData.state.response.status === 200) {
      var jsonData = commonFunction.convertToUint(responseData.state.response.data);
      formatServerDat(jsonData)
    }
  };

  const formatServerDat = (jsonData) => {
    let studentDataArr = jsonData;
    // console.warn('dataaaaaa',studentDataArr)
    setstudentData.length > 0 && studentDataArr.map((each, idx) => {
      // let studentClass = [1,0,1]
      if (each.studentClasses && each.studentClasses.length > 0) {
        each.studentClasses = each.studentClasses[0].id + " Sec - " + each.studentClasses[0].section + " Std - " + each.studentClasses[0].standard
      }

    })
    setstudentData(jsonData)
  }

  //feature : Column 1
  //hasAccess: col2(bool)
  return (
    <View style={{ flex: 1 }}>
      {(
        <View style={{ flex: 1, marginBottom: 30 }}>
          <View style={{ paddingVertical: 10, backgroundColor: '#90ddaa' }}>
            <Text style={{ fontWeight: 'bold', marginLeft: 25 }}> Mob-app/client version : {clientVersion}</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 25 }}> Highest RestApi version(server) : {restapiVersion}</Text>
            <Text style={{ fontWeight: 'bold', marginLeft: 25 }}> Negotiated version : {negotiatedVersion}</Text>
          </View>
          <ScrollView>
            <DataTable>
              <DataTable.Header style={{ backgroundColor: '#D3D3D3' }}>
                <DataTable.Title textStyle={{ color: 'black', }}>
                  id
                </DataTable.Title>
                <DataTable.Title textStyle={{ color: 'black' }}>
                  name
                </DataTable.Title>
                <DataTable.Title textStyle={{ color: 'black' }}>
                  rollNo
                </DataTable.Title>
                <DataTable.Title textStyle={{ color: 'black' }}>
                  Student Class
                </DataTable.Title>
                <DataTable.Title textStyle={{ color: 'black' }}>
                  Standard
                </DataTable.Title>
                <DataTable.Title textStyle={{ color: 'black' }}>
                  Classes
                </DataTable.Title>
              </DataTable.Header>

              {studentData.length > 0 && studentData.map((eachStudent, idx) => {
                return (
                  <DataTable.Row style={{ backgroundColor: LIGHT_THEME.white }}>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.id}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.name}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.rollNo}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.studentClasses}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.standard}
                    </DataTable.Cell>
                    <DataTable.Cell textStyle={{ color: 'black' }}>
                      {eachStudent.classes}
                    </DataTable.Cell>
                  </DataTable.Row>
                )
              })

              }


            </DataTable>
          </ScrollView>
        </View>
      )}
    </View>
  );
};;

export default Home;