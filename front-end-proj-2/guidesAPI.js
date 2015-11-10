"use strict"

var guidesAPI = {

  api_url: 'http://localhost:3000',

  ajax: function(config, cb){
    $.ajax(config).done(function(data, textStatus, jqhxr){
      cb(null, data);
    }).fail(function(jqhxr, status, error){
      cb({jqhxr: jqhxr, statur: status, error: error});
      });
    },

  showGuides: function(token, callback){
    this.ajax({
      method: 'GET',
      url: this.api_url +'/guides/',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(),
      dataType: 'json'
    }, callback);
  }

};
