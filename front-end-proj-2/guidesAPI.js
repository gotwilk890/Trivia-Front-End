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
      url: this.api_url +'/guides',
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      dataType: 'json'
    }, callback);
  },

  create: function(guide, token, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/guides',
      headers: {
      Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(guide),
      dataType: 'json'
    }, callback);
  },

  edit: function(guide, id, token, callback){
    this.ajax({
      method: 'PATCH',
      url: this.api_url +'/guides/' + id,
      headers: {
      Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(guide),
      dataType: 'json'
    }, callback);
  }

};

$(document).ready(function(){

  $('#guides').on('submit', function(e){
    var token = $('.token').val();
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
      callback(null, data);
      };
    guidesAPI.showGuides(token, cb);
    e.preventDefault();
  });

  $('#createGuide').on('submit', function(e){
    var token = $('.token').val();
    var guide = wrap('guide', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
    callback(null, data);
    };
    guidesAPI.create(guide, token, cb);
    e.preventDefault();
  });

  $('#updateGuide').on('submit', function(e){
    var id = $('#guideID').val();
    var token = $('.token').val();
    var guide = wrap('guide', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
    callback(null, data);
    };
    guidesAPI.edit(guide, id, token, cb);
    e.preventDefault();
  });




});
