'use strict';

/* Services */

var bgScoreTallyModule = angular.module('BgScoreTally.services', []);
bgScoreTallyModule.value('version', '0.1');
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
						value: function (amount) {
							return -amount;
						},
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
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Family Members",
						value: function (amount) {
							return amount * 3;
						},
					},
					{
						name: "Card Points",
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Bonus Points",
						value: function (amount) {
							return amount;
						},
					},
				]
            },
            {
                "label": "7 Wonders",
                "value": "7-wonders",
                "score_type_names": [
					{
						name: "Military",
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Coins",
						value: function (amount) {
							return Math.floor(amount / 3);
						},
					},
					{
						name: "Wonder",
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Blue Cards",
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Yellow Cards",
						value: function (amount) {
							return amount;
						},
					},
					{
						name: "Purple Cards",
						value: function (amount) {
							return amount;
						},
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
