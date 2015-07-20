"use strict";

var App = function(spreedsheet_url) {
  this.spreedsheet_url = spreedsheet_url
}

App.prototype = {
  self: this,
  init: function () {
    Tabletop.init( 
      { key: this.spreedsheet_url,
        callback: this.showInfo.bind(this),
        simpleSheet: true 
      }
    );
  },
  showInfo: function(data) {
    // data comes through as a simple array since simpleSheet is turned on
    // document.getElementById("food").innerHTML = "<strong>Foods:</strong> " + [ data[0].name, data[1].name, data[2].name ].join(", ");
    this.spreedsheet_data = data;
    console.log(data);  
    this.generateRows();  
  },
  generateRows: function() {
    $.each(this.spreedsheet_data, function(index, item){
      $('#schedule').append(
        "<div class='row'>" + "\n" +
          "<div class='col-md-4'>" + item.StartDate + "</div>" + "\n" +
          "<div class='col-md-4'>" + item.EndDate + "</div>" + "\n" +
          "<div class='col-md-4'>" + item.Place + "</div>" + "\n" +
          "<div class='col-md-4'>" + item.Info + "</div>" + "\n" +
          "<div class='col-md-4'>" + item.Description + "</div>" + "\n" +
        "</div>"
    )});
  }
};

module.exports = App