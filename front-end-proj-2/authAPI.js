"use strict"
$(document).ready(function(){
  var authAPI = {

    api_url: 'http://localhost:3000',

    ajax: function(config, cb){
      $ajax(config).done(function(data, textStatus, jqhxr){
        cb(null, data);
      }).fail(function(jqhxr, status, error){
        cb({jqhxr: jqhxr, statur: status, error: error});
        });
      },

    register: function(credentials, callback){
      this.ajax({
        method: 'POST',
        url: this.api_url +'/users',
        contentType:'application/json; charset=utf-8',
        data: JSON.stringify(credentials),
        dataType: 'json'
      }, callback);



    }
  };
});

