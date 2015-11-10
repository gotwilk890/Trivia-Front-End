"use strict"

var authAPI = {

  api_url: 'http://localhost:3000',

  ajax: function(config, cb){
    $.ajax(config).done(function(data, textStatus, jqhxr){
      cb(null, data);
    }).fail(function(jqhxr, status, error){
      cb({jqhxr: jqhxr, statur: status, error: error});
      });
    },

  register: function(credentials, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/register',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  login: function(credentials, callback){
    this.ajax({
      method: 'POST',
      url: this.api_url +'/login',
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(credentials),
      dataType: 'json'
    }, callback);
  },

  logout: function(id, token, callback){
    this.ajax({
      method: 'DELETE',
      url: this.api_url +'/logout/' + id,
      headers: {
        Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(),
      dataType: 'json'
    }, callback);
  }
};

var form2object = function(form) {
  var data = {};
  $(form).children().each(function(index, element) {
    var type = $(this).attr('type');
    if ($(this).attr('name') && type !== 'submit' && type !== 'hidden') {
      data[$(this).attr('name')] = $(this).val();
    }
  });
  return data;
};

var wrap = function wrap(root, formData) {
  var wrapper = {};
  wrapper[root] = formData;
  return wrapper;
};

var callback = function callback(error, data) {
  if (error) {
    console.error(error);
    $('#result').val('status: ' + error.status + ', error: ' +error.error);
    return;
  }
  $('#result').val(JSON.stringify(data, null, 4));
};

$(document).ready(function(){

  $('#register').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    authAPI.register(credentials, callback);
    e.preventDefault();
  });

  $('#login').on('submit', function(e) {
    var credentials = wrap('credentials', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
      callback(null, data);
      $('.token').val(data.user.token);
      $('.id').val(data.user.id);
    };
    authAPI.login(credentials, cb);
    e.preventDefault();
  });

  $('#logout').on('submit', function(e){
    var id = $('.id').val();
    var token = $('.token').val();
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
    callback(null, data);
    };
    authAPI.logout(id, token, cb);
    e.preventDefault();
  });
});
