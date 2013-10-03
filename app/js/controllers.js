'use strict';

/* Controllers */

angular.module('BgScoreTally.controllers', []).
  controller("SelectionCtrl", ["$scope", "SelectionService", function($scope, SelectionService) {
    $scope.selections = SelectionService.selections;
    $scope.getSelectedNumPlayers = function() {
      return new Array(parseInt($scope.selected.num_players));
    };
    $scope.getScoreTypeNames = function() {
      var selectedGame = $scope.selected.game;
      if (selectedGame != -1) {
        return $scope.selections.games[selectedGame].score_type_names;
      }
    };
}]);
