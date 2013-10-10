'use strict';

/* jasmine specs for controllers go here */

describe('BgScoreTally controllers', function(){

  beforeEach(module('BgScoreTally'));

  describe('SelectionCtrl', function() {
    var ctrl, scope;

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('SelectionCtrl', { $scope: scope });
      scope.playerScores = [ [ 1, 2 ], [ 3, 4 ] ];
      scope.totalScores = [ 0, 0 ];
      scope.selected = {
        game: 1,
        numPlayers: 2,
      };
      scope.selections = {
        games: [
          {
            score_type_names: [
              { name: 'one-one', value: function(a) { return a; } },
              { name: 'one-two', value: function(a) { return a * 2; } },
              { name: 'one-three', value: function(a) { return a * 3; } },
            ],
          },
          {
            score_type_names: [
              { name: 'two-one', value: function(a) { return a * 3; } },
              { name: 'two-two', value: function(a) { return a * 4; } },
            ]
          },
        ],
      };
    }));

    it('should getScoreTypeNames from the Selection Service', function() {
      expect(scope.getScoreTypeNames(0)).toEqual(['one-one','one-two', 'one-three']);
      expect(scope.getScoreTypeNames(1)).toEqual(['two-one','two-two']);
    });
    it('should updatePlayerNumbers correctly', function() {
      expect(scope.playerScores.length).toBe(2);
      scope.updatePlayerNumber(scope.selected.numPlayers);
      expect(scope.playerScores.length).toBe(2);
      scope.selected.numPlayers = 4;
      scope.updatePlayerNumber(scope.selected.numPlayers);
      expect(scope.playerScores.length).toBe(4);
      scope.selected.numPlayers = 3;
      scope.updatePlayerNumber(scope.selected.numPlayers);
      expect(scope.playerScores.length).toBe(3);
    });
    it('should reset scores', function() {
      expect(scope.playerScores).toEqual([ [1, 2], [3, 4] ]);
      expect(scope.totalScores).toEqual([0, 0]);
      scope.selected.game = 0;
      scope.reset();
      expect(scope.playerScores).toEqual([ [undefined,undefined,undefined], [undefined,undefined,undefined] ]);
      expect(scope.totalScores).toEqual([undefined,undefined,undefined]);
    });
    it('should addPlayer', function() {
      expect(scope.playerScores.length).toBe(2);
      expect(scope.totalScores.length).toBe(2);
      scope.addPlayer();
      expect(scope.playerScores.length).toBe(3);
      expect(scope.totalScores.length).toBe(3);
      expect(scope.selected.numPlayers).toBe(3);
    });
    it('should removePlayer', function() {
      expect(scope.playerScores[0]).toEqual([1, 2]);
      expect(scope.totalScores[0]).toBe(0);
      scope.removePlayer();
      expect(scope.playerScores[0]).toEqual([3, 4]);
      expect(scope.totalScores[0]).toBe(0);
      expect(scope.playerScores.length).toBe(1);
      expect(scope.totalScores.length).toBe(1);
      expect(scope.selected.numPlayers).toBe(1);
    });
    it('should updateTotal scores using the game\s value functions', function() {
      expect(scope.totalScores[0]).toBe(0);
      expect(scope.totalScores[1]).toBe(0);
      scope.updateTotal(0);
      scope.updateTotal(1);
      expect(scope.totalScores[0]).toBe(11);
      expect(scope.totalScores[1]).toBe(25);
      expect(scope.totalScores[2]).toBe(undefined);
    });
    it('should ....', inject(function() {
      //spec body
    }));
  });
});
