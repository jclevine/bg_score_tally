'use strict';

/* Controllers */

var bgScoreTally = angular.module('BgScoreTally.controllers', []);

bgScoreTally.controller("SelectionCtrl", ["$scope", "SelectionService", function($scope, SelectionService) {
  $scope.selections = SelectionService.selections;

  $scope.playerScores = [];
  $scope.totalScores = [];
  $scope.isGameSelected = false;

  $scope.getScoreTypeNames = function(selectedGame) {
    if (selectedGame != -1) {
      return _.map($scope.selections.games[selectedGame].score_type_names, function(score_type) {
        return score_type.name;
      });
    }
  };

  $scope.updatePlayerNumber = function(selectedNumPlayers) {
    var morePlayersAdded = selectedNumPlayers > $scope.playerScores.length;
    var fewerPlayersExist = selectedNumPlayers < $scope.playerScores.length;
    if (morePlayersAdded) {
      for (var i = $scope.playerScores.length; i < selectedNumPlayers; ++i) {
        $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
      }
    }
    else if (fewerPlayersExist) {
      $scope.playerScores = $scope.playerScores.slice(0, $scope.selected.numPlayers);
      $scope.totalScores = $scope.totalScores.slice(0, $scope.selected.numPlayers);
    }
    // Else same number of players. Don't do anything.
  };

  $scope.reset = function() {
    // TODO: jlevine - Make common function.
    $scope.playerScores = new Array($scope.selected.numPlayers);
    for (var i = 0; i < $scope.playerScores.length; ++i) {
      $scope.playerScores[i] = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
    }
    $scope.totalScores = new Array($scope.selections.games[$scope.selected.game].score_type_names.length);
    $scope.isGameSelected = true;
  };

  $scope.addPlayer = function() {
    // TODO: jlevine - See if there's a better way to get this length.
    $scope.playerScores.push(new Array($scope.selections.games[$scope.selected.game].score_type_names.length));
    $scope.selected.numPlayers = $scope.playerScores.length;
    $scope.totalScores.push();
  };

  $scope.removePlayer = function(playerIndex) {
    $scope.playerScores.splice(playerIndex, 1);
    $scope.totalScores.splice(playerIndex, 1);
    $scope.selected.numPlayers--;
  };

  // Don't use any intermediate variables to point to $scope attributes because it doesn't work for whatever reason.
  $scope.updateTotal = function(studentIndex) {
    var totalScore = 0;
    _.each($scope.selections.games[$scope.selected.game].score_type_names, function(scoreItem, index) {
      var val = scoreItem.value,
      amount = parseInt($scope.playerScores[studentIndex][index]),
      result = 0;
    if (typeof(amount) === 'number') {
      result = val(amount);
      totalScore += isNaN(result) ? 0 : result;
    }
    });
    $scope.totalScores[studentIndex] = isNaN(totalScore) ? 0 : totalScore;
  };
}]);
