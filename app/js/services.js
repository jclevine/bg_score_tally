'use strict';

/* Services */

var bgScoreTallyModule = angular.module('BgScoreTally.services', []);
bgScoreTallyModule.factory("SelectionService", function() {
  var selectionService = {};
  // Get game selection from a AJAX call?
  selectionService.selections =
    {
        "games": [
            {
                "label": "Agricola",
                "value": "agricola",
                "score_type_names": ["Empty Spaces", "Sheep", "Hogs", "Cows", "House Material", "Card Points", "Pastures", "Fields"]
            },
            {
                "label": "7 Wonders",
                "value": "7-wonders",
                "score_type_names": ["Blue Cards", "Yellow Cards", "Wonder", "Military"]
            }
        ],
        "numPlayers": _.range(1, 11)
    };

  return selectionService;
});
