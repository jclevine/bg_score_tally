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

  $scope.updatePlayerNumber = function() {
    var morePlayersAdded = $scope.selected.numPlayers > $scope.playerScores.length;
    var fewerPlayersExist = $scope.selected.numPlayers < $scope.playerScores.length;
    if (morePlayersAdded) {
      for (var i = $scope.playerScores.length; i < $scope.selected.numPlayers; ++i) {
        $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
      }
    }
    else if (fewerPlayersExist) {
      $scope.playerScores = $scope.playerScores.slice(0, $scope.selected.numPlayers);
    }
    // Else same number of players. Don't do anything.
  }

  $scope.reset = function() {
    // TODO: jlevine - Make common function.
    $scope.playerScores = new Array($scope.selected.numPlayers);
    for (var i = 0; i < $scope.playerScores.length; ++i) {
      $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
    }
  }

  $scope.addPlayer = function() {
    // TODO: jlevine - See if there's a better way to get this length.
    $scope.playerScores.push(new Array($scope.selections.games[$scope.selected.game].score_type_names.length));
    $scope.selected.numPlayers = $scope.playerScores.length;
    $scope.totalScores.push();
  }

  $scope.removePlayer = function(playerIndex) {
    $scope.playerScores.splice(playerIndex, 1);
    $scope.totalScores.splice(playerIndex, 1);
    $scope.selected.numPlayers--;
  }

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
}]);
