'use strict';

/* Controllers */

var bgScoreTally = angular.module('BgScoreTally.controllers', []);

bgScoreTally.controller("SelectionCtrl", ["$scope", "SelectionService", function($scope, SelectionService) {
  $scope.selections = SelectionService.selections;

  $scope.playerScores = [];
  $scope.totalScores = [];

  $scope.getScoreTypeNames = function() {
    var selectedGame = $scope.selected.game;
    if (selectedGame != -1) {
      return $scope.selections.games[selectedGame].score_type_names;
    }
  };

  // Don't use any intermediate variables to point to $scope attributes because it doesn't work for whatever reason.
  $scope.updateTotal = function() {
    var totalScore = 0;
    for (var i = 0; i < $scope.playerScores[this.$parent.$index].length; ++i) {
      var score = $scope.playerScores[this.$parent.$index][i];
      if (score != undefined) {
        totalScore += parseInt(score);
      }
    }
    $scope.totalScores[this.$parent.$index] = totalScore;
  }

  $scope.reset = function() {
    // TODO: jlevine - Make common function.
    $scope.playerScores = new Array($scope.selected.numPlayers);
    for (var i = 0; i < $scope.playerScores.length; ++i) {
      $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length)
    }
  }

  $scope.addPlayer = function() {
    $scope.selected.num_players++;
  }

  $scope.updatePlayerNumber = function() {
    $scope.playerScores = new Array($scope.selected.numPlayers);
    for (var i = 0; i < $scope.playerScores.length; ++i) {
      $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
    }
  }



}]);
