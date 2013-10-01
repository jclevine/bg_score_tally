'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var bgScoreTallyModule = angular.module('BgScoreTally.services', []);
bgScoreTallyModule.factory("SelectionService", function() {
  var selectionService = {};
  // Get game selection from a AJAX call?
  selectionService.selections = {
    "games": [
              {"label": "Agricola",
               "value": "agricola"
              },
              {"label": "7 Wonders",
               "value": "7-wonders"
              }
             ],
     "numPlayers": _.range(1, 11)
  };

  return selectionService;
});
