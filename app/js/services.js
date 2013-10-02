'use strict';

/* Services */

var bgScoreTallyModule = angular.module('BgScoreTally.services', []);
bgScoreTallyModule.factory("SelectionService", function() {
  var selectionService = {};
  // Get game selection from a AJAX call?
  selectionService.selections = {
    "games": [
              {"label": "Agricola",
               "value": "agricola",
               "num_scores": 5
              },
              {"label": "7 Wonders",
               "value": "7-wonders",
               "num_scores": 8
              }
             ],
     "numPlayers": _.range(1, 11)
  };

  return selectionService;
});
