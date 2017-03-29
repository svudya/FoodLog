angular.module('food-log', ['firebase'])
.factory('firebaseDB', function($firebaseObject,$firebaseArray){
    var ref = firebase.database().ref();
    var firebaseDB = {};
    
    firebaseDB.getReference = function(){
        return ref;
    };
    firebaseDB.getObject = function(object){
        return $firebaseObject(ref.child(object));
    };
    firebaseDB.getArray = function(object){
        return $firebaseArray(ref.child(object));
    };
    firebaseDB.getObjectPromise = function(object){
        return $firebaseObject(ref.child(object)).$loaded();
    };
    firebaseDB.getArrayPromise = function(object){
        return $firebaseArray(ref.child(object)).$loaded();
    }
    return firebaseDB;
    
    
})
.controller('mainController',function($scope, $firebaseObject,$firebaseArray, firebaseDB){
    $scope.empIds = firebaseDB.getArray('empIds');
    $scope.foodChoice = firebaseDB.getArray('foodChoice');
    $scope.addOns = firebaseDB.getArray('addOns');
    
    $scope.onSubmit = function(){
        
    }
    $scope.onViewOrder = function(){
        
    }
    $scope.onReport = function(){
        
    }
})