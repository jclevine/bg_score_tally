'use strict';

/* Controllers */

var bgScoreTally = angular.module('BgScoreTally.controllers', []);

bgScoreTally.controller("SelectionCtrl", ["$scope", "SelectionService", function($scope, SelectionService) {
  $scope.selections = SelectionService.selections;
  $scope.getSelectedNumPlayers = function(currentRow) {
    if ($scope.state == undefined) {
      $scope.state = {};
    }
    $scope.state.currentRow = currentRow;
    return new Array(parseInt($scope.selected.num_players));
  };
  $scope.getScoreTypeNames = function() {
    var selectedGame = $scope.selected.game;
    if (selectedGame != -1) {
      return $scope.selections.games[selectedGame].score_type_names;
    }
  };

  // Don't use any intermediate variables to point to $scope attributes because it doesn't work for whatever reason.
  $scope.updateTotal = function() {
    var newScore = this.score;

    if (!$scope.scores) {
      $scope.scores = {};
    }
    if (!$scope.scores[this.$parent.$index]) {
      $scope.scores[this.$parent.$index] = {};
    }
    $scope.scores[this.$parent.$index][this.$index] = parseInt(newScore);

    if (!$scope.totalScores) {
      $scope.totalScores = [];
    }

    var totalScore = 0;
    for (var key in $scope.scores[this.$parent.$index]) {
      totalScore += $scope.scores[this.$parent.$index][key];
    }

    $scope.totalScores[this.$parent.$index] = totalScore;
  }

  $scope.resetTotalScores = function() {
    $scope.scores = {};
    $scope.totalScores = [];
  }
}]);
