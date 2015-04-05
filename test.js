'use strict';

var Harvester = require('./lib/harvest')
  , harvester = new Harvester('http://geothermaldata.org/csw?')
;
/*
harvester._request(function (error, data) {
  if (error) console.log(error);
  else console.log(data);
});
*/
harvester.consumer(function (error, data) {
  if (error) console.log(error);
  var r = data['csw:GetRecordsResponse']['csw:SearchResults'][0]['gmd:MD_Metadata'][8];

  var fileIdentifier = r['gmd:fileIdentifier'][0]['gco:CharacterString'][0];

  var language = r['gmd:language'][0]['gco:CharacterString'][0];
  var charset = r['gmd:characterSet'][0]['gmd:MD_CharacterSetCode'][0]['$']['codeListValue'];
  var scopeCode = r['gmd:hierarchyLevel'][0]['gmd:MD_ScopeCode'][0]['$']['codeListValue'];

  var individualName = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:individualName'][0]['gco:CharacterString'][0];
  var organisationName = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:organisationName'][0]['gco:CharacterString'][0];
  var telephone = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:phone'][0]['gmd:CI_Telephone'][0]['gmd:voice'][0]['gco:CharacterString'][0];
  var deliveryPoint = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:deliveryPoint'][0]['gco:CharacterString'][0];
  var city = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:city'][0]['gco:CharacterString'][0];
  var administrativeArea = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:administrativeArea'][0]['gco:CharacterString'][0];
  var postalCodes = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:postalCode'][0]['gco:CharacterString'][0];
  var email = r['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:electronicMailAddress'][0]['gco:CharacterString'][0];

  var dateTime = r['gmd:dateStamp'][0]['gco:DateTime'][0];

  var metadataStandardName = r['gmd:metadataStandardName'][0]['gco:CharacterString'][0];
  var metadataStandardVersion = r['gmd:metadataStandardVersion'][0]['gco:CharacterString'][0];

  var datasetURI = r['gmd:dataSetURI'][0]['gco:CharacterString'][0];

  var citation = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:citation'][0]['gmd:CI_Citation'][0]['gmd:title'][0]['gco:CharacterString'][0];
  var abstract = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:abstract'][0]['gco:CharacterString'][0];
  var status = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:status'][0]['gmd:MD_ProgressCode'][0]['$']['codeListValue'];
  var keywords = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:descriptiveKeywords']/*multiple*/[0]['gmd:MD_Keywords'][0]['gmd:keyword']/*multiple*/[0]['gco:CharacterString'][0];
  var language = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:language'][0]['gco:CharacterString'][0];
  var charSet = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:characterSet'][0]['gmd:MD_CharacterSetCode'][0]['$']['codeListValue'];
  var topicCategory = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:topicCategory'][0]['gmd:MD_TopicCategoryCode'][0];
  var bbox = r['gmd:identificationInfo'][0]['gmd:MD_DataIdentification'][0]['gmd:extent'][0]['gmd:EX_Extent'][0]['gmd:geographicElement'][0]['gmd:EX_GeographicBoundingBox'];

  // distributor
  var individualName = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:individualName'][0]['gco:CharacterString'][0];
  var organisationName = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:organisationName'][0]['gco:CharacterString'][0];
  var telephone = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:phone'][0]['gmd:CI_Telephone'][0]['gmd:voice'][0]['gco:CharacterString'][0];
  var deliveryPoint = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:deliveryPoint'][0]['gco:CharacterString'][0];
  var city = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:city'][0]['gco:CharacterString'][0];
  var administrativeArea = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:administrativeArea'][0]['gco:CharacterString'][0];
  var postalCodes = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:postalCode'][0]['gco:CharacterString'][0];
  var email = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:distributor'][0]['gmd:MD_Distributor'][0]['gmd:distributorContact'][0]['gmd:CI_ResponsibleParty'][0]['gmd:contactInfo'][0]['gmd:CI_Contact'][0]['gmd:address'][0]['gmd:CI_Address'][0]['gmd:electronicMailAddress'][0]['gco:CharacterString'][0];

  var transferOptionsID = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['$']['id'];
  var linkageURL = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'][0]['gmd:linkage'][0]['gmd:URL'][0];
  var linkageName = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'][0]['gmd:name'][0]['gco:CharacterString'][0];
  var linkageDescription = r['gmd:distributionInfo'][0]['gmd:MD_Distribution'][0]['gmd:transferOptions'][0]['gmd:MD_DigitalTransferOptions'][0]['gmd:onLine'][0]['gmd:CI_OnlineResource'][0]['gmd:description'][0]['gco:CharacterString'][0];

  function parseMD_Metadata(data) {

    var obj
      , contact
    ;

    obj = {};

    obj.filedID = data['gmd:fileIdentifier'][0]['gco:CharacterString'][0];
    obj.lang = data['gmd:language'][0]['gco:CharacterString'][0];
    obj.charset = data['gmd:characterSet'][0]['gmd:MD_CharacterSetCode'][0]['$']['codeListValue'];
    obj.scope = data['gmd:hierarchyLevel'][0]['gmd:MD_ScopeCode'][0]['$']['codeListValue'];

    contact = data['gmd:contact'][0]['gmd:CI_ResponsibleParty'][0];

    obj.contact = {
      name: contact['gmd:individualName'][0]['gco:CharacterString'][0],
      organisation: contact['gmd:organisationName'][0]['gco:CharacterString'][0],

    };

  }

});