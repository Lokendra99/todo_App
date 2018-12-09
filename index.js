var wigzoApp=angular.module('wigzoApp',['ngRoute','ngFlash']);

wigzoApp.config(function(FlashProvider){
    FlashProvider.setTimeout(5000);
    FlashProvider.setShowClose(true);
});
