'use strict';

/* Controllers */

angular.module('BgScoreTally.controllers', []).
  controller("SelectionCtrl", ["$scope", "SelectionService", function($scope, SelectionService) {
    $scope.selections = SelectionService.selections;
    $scope.getSelectedNumPlayers = function() {
      return new Array(parseInt($scope.selected.num_players));
    }
    $scope.getNumOfScores = function() {
      return new Array(parseInt($scope.selected.game));
    }
}]);
