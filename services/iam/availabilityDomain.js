var ocirest = require('../../utils/ocirest.js');
var endpoint = require('../../configs/endpoints.js');


function list( auth, parameters, callback ) {
    var possibleHeaders = [];
    var possibleQueryStrings = ['compartmentId'];
    var headers = ocirest.buildHeaders( possibleHeaders, parameters );
    var queryString = ocirest.buildQueryString( possibleQueryStrings, parameters );
    ocirest.process( auth, 
                     { path : auth.RESTversion + '/availabilityDomains/' + queryString,
                       host : endpoint.service.iam[auth.region],
                       headers : headers,
                       method : 'GET' }, 
                     callback );
  };

  
  module.exports={
      list: list
  }