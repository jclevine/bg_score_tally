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
                "score_type_names": [
					{
						name: "Fields",
						value: function (amount) {
							var val;
							if (amount === 2 || amount === 3 || amount === 4) {
								val = amount - 1;
							} else if (5 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Pastures",
						value: function (amount) {
							var val;
							if (amount === 1 || amount === 2 || amount === 3) {
								val = amount;
							} else if (4 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Grain",
						value: function (amount) {
							var val;
							if (amount === 1 || amount === 2 || amount === 3) {
								val = 1;
							} else if (amount === 4 || amount === 5) {
								val = 2;
							} else if (amount === 6 || amount === 7) {
								val = 3;
							} else if (8 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Vegetables",
						value: function (amount) {
							var val;
							if (amount === 1 || amount === 2 || amount === 3) {
								val = amount;
							} else if (4 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Sheep",
						value: function (amount) {
							var val;
							if (amount === 1 || amount === 2 || amount === 3) {
								val = 1;
							} else if (amount === 4 || amount === 5) {
								val = 2;
							} else if (amount === 6 || amount === 7) {
								val = 3;
							} else if (8 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Wild Boar",
						value: function (amount) {
							var val;
							if (amount === 1 || amount === 2) {
								val = 1;
							} else if (amount === 3 || amount === 4) {
								val = 2;
							} else if (amount === 5 || amount === 6) {
								val = 3;
							} else if (7 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Cattle",
						value: function (amount) {
							var val;
							if (amount === 1) {
								val = 1;
							} else if (amount === 2 || amount === 3) {
								val = 2;
							} else if (amount === 4 || amount === 5) {
								val = 3;
							} else if (6 <= amount) {
								val = 4;
							} else {
								val = -1;
							}
							return val;
						},
					},
					{
						name: "Empty Spaces",
						value: -1,
					},
					{
						// TODO: wilsona - configurable value function opts
						name: "House Material",
						value: function (amount, material) {
							var val;
							if (material === 'brick') {
								val = amount;
							} else if (material === 'stone') {
								val = 2 * amount;
							} else {
								val = 0;
							}
							return val;
						},
					},
					{
						name: "Fenced Stables",
						value: 1,
					},
					{
						name: "Family Members",
						value: 3,
					},
					{
						name: "Card Points",
						value: 1,
					},
					{
						name: "Bonus Points",
						value: 1,
					},
				]
            },
            {
                "label": "7 Wonders",
                "value": "7-wonders",
                "score_type_names": [
					{
						name: "Military",
						value: 1,
					},
					{
						name: "Coins",
						value: function (amount) {
							return Math.floor(amount / 3);
						},
					},
					{
						name: "Wonder",
						value: 1,
					},
					{
						name: "Blue Cards",
						value: 1,
					},
					{
						name: "Yellow Cards",
						value: 1,
					},
					{
						name: "Purple Cards",
						value: 1,
					},
					{
						name: "Green Cards",
						value: function (a, b, c) {
							// TODO: wilsona - Figure out implementation details.
							//       requires configurable value function opts, above
							return a;
						},
					},
				]
            }
        ],
        "numPlayers": _.range(1, 11)
    };

  return selectionService;
});
