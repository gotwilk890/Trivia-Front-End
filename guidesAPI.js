"use strict"
var toggle = 'off';
var guidesAPI = {

  api_url: 'https://shielded-lowlands-2169.herokuapp.com',

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
  },

  delete: function(id, token, callback){
    this.ajax({
      method: 'DELETE',
      url: this.api_url +'/guides/' + id,
      headers: {
      Authorization: 'Token token=' + token
      },
      contentType:'application/json; charset=utf-8',
      data: JSON.stringify(),
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

  $('.createbut').on('click', function(){
    if(toggle === 'on' ){
      $('#createGuide').hide();
      toggle = 'off';
    }
    else if($('.token').val()){
      $('#createGuide').show();
      toggle = 'on';
      }
  });

  $(document).on('click','.edit', function(){
    console.log('clicked');
    $(this).children().show();

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

    $('#createGuide').hide();
    $(".editguides").remove();
    toggle = 'off';
    guidesAPI.showGuides(token, function(error, data){
        data.guides = data.guides;
        var display = function(){
        var myHTML = guideTemplate({guides: data.guides});
        $("#showguides").append(myHTML);
        };
    display();

      });
      e.preventDefault();
    };
    guidesAPI.create(guide, token, cb);
    e.preventDefault();
  });

  $(document).on('submit', '.updateGuide', function(e){
    var id = $('.guide_id').data('id');
    var token = $('.token').val();
    var guide = wrap('guide', form2object(this));
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
    callback(null, data);
    $(".editguides").remove();
    guidesAPI.showGuides(token, function(error, data){
        data.guides = data.guides;
        var display = function(){
        var myHTML = guideTemplate({guides: data.guides});
        $("#showguides").append(myHTML);
        };
    display();

    });
    e.preventDefault();
    };
    guidesAPI.edit(guide, id, token, cb);
    e.preventDefault();
  });

  $(document).on('click', '.remove', function(e){
    var id = $('.guide_id').data('id');
    var token = $('.token').val();
    var cb = function cb(error, data) {
      if (error) {
        callback(error);
        return;
      }
    callback(null, data);
    $(".editguides").remove();
    guidesAPI.showGuides(token, function(error, data){
        data.guides = data.guides;
        var display = function(){
        var myHTML = guideTemplate({guides: data.guides});
        $("#showguides").append(myHTML);
        };
    display();

    });
    e.preventDefault();
    };
    guidesAPI.delete(id, token, cb);
    e.preventDefault();
  });
});


