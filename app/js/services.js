'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var bgScoreTallyModule = angular.module('BgScoreTally.services', []);
bgScoreTallyModule.factory("SelectionService", function() {
  var selectionService = {};
  selectionService.selections = {
    "games": [
              {"label": "Agricola",
               "value": "agricola"
              },
              {"label": "7 Wonders",
               "value": "7-wonders"
              }
             ]
  };

  selectionService.numPlayers = _.range(1, 11);
  return selectionService;
});
