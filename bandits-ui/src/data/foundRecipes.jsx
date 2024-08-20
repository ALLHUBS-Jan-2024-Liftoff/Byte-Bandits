const foundRecipes = [
  {
    "from": 1,
    "to": 20,
    "count": 10000,
    "_links": {
      "next": {
        "href": "https://api.edamam.com/api/recipes/v2?q=turkey&app_key=f7b7c5856e28029b8e7ab08182ab9fe1&_cont=CHcVQBtNNQphDmgVQntAEX4BYUtxAgQFQGJCC2IQYFR6AwYBUXlSBDdFa1FyUgQGSmYUBzcbZVx0UgZTRWZDB2YQNVQnUQsVLnlSVSBMPkd5BgNK&type=public&app_id=9cf8e5c7",
        "title": "Next page"
      }
    },
    "hits": [
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14cf40f94311490abeaad8b1df95f12e",
          "label": "Basic Turkey Gravy Recipe",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b7945bb04ab937a11088c7da383ce8d507e3c73a7c73146a6b0672b30c5ca79",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=733b5bdd7f180df2e39f2e6ec7195b11342e980df45fb641dc20691f7c6a7f71",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f84dcc038a4180ecb12b4a64c0df28efca90b7d4f926ac8566d64ea1ed7a33f5",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b7945bb04ab937a11088c7da383ce8d507e3c73a7c73146a6b0672b30c5ca79",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=974b44835f709aa14013895ef1e4d1b20c92d1d3e6dfd9dee6eed83ec0e04d1b",
              "width": 600,
              "height": 600
            }
          },
          "source": "Serious Eats",
          "url": "https://www.seriouseats.com/basic-turkey-gravy-thanksgiving-recipe",
          "shareAs": "http://www.edamam.com/recipe/basic-turkey-gravy-recipe-14cf40f94311490abeaad8b1df95f12e/turkey",
          "yield": 6.0,
          "dietLabels": [],
          "healthLabels": [
            "Sugar-Conscious",
            "Kidney-Friendly",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1/4 cup butter",
            "1/4 cup flour",
            "4 cups turkey drippings or turkey stock",
            "Kosher salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "1/4 cup butter",
              "quantity": 0.25,
              "measure": "cup",
              "food": "butter",
              "weight": 56.75,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "1/4 cup flour",
              "quantity": 0.25,
              "measure": "cup",
              "food": "flour",
              "weight": 31.25,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "4 cups turkey drippings or turkey stock",
              "quantity": 4.0,
              "measure": "cup",
              "food": "turkey stock",
              "weight": 960.0,
              "foodCategory": "canned soup",
              "foodId": "food_br4d1lpbopycuzbgrfdedanv8qv6",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 6.288,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 3.144,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 874.1389399999999,
          "totalCO2Emissions": 10895.598197599998,
          "co2EmissionsClass": "F",
          "totalWeight": 1053.8865722915464,
          "totalTime": 25.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 874.1389399999999,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 57.952994399999994,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 31.832489099999997,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 18.91712166,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.91341462,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 59.77796,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 58.138778,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.6391820000000001,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 15.306546599999999,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 28.220101,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 150.8125,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2444.41434912,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 61.69363734997114,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 51.81366572291546,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1097.0921057833236,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 2.707307888562103,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1.6539811722915463,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 311.53752,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 398.61888,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.92,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.37973302,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8534542,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 15.618301599999999,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.61020154,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 58.36198,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 58.36198,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.096475,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.6560476,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 11.142410000000002,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 898.4307351445832,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 43.706947,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 89.15845292307692,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 159.1624455,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 19.925986666666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.5567280000000006,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 56.440202,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 50.270833333333336,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 101.85059788000001,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 6.169363734997114,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 12.336587076884634,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 23.342385229432416,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 15.040599380900574,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 15.036192475377693,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 44.505359999999996,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 44.29098666666667,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 2.1333333333333333,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 31.64441833333333,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 65.65032307692307,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 97.614385,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 46.93858,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 14.590495,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.019791666666667,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 11.040317333333332,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 9.28534166666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 57.952994399999994,
              "hasRDI": true,
              "daily": 89.15845292307692,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 31.832489099999997,
                  "hasRDI": true,
                  "daily": 159.1624455,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 18.91712166,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.91341462,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 59.77796,
              "hasRDI": true,
              "daily": 19.925986666666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 58.138778,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.6391820000000001,
                  "hasRDI": true,
                  "daily": 6.5567280000000006,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 15.306546599999999,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 28.220101,
              "hasRDI": true,
              "daily": 56.440202,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 150.8125,
              "hasRDI": true,
              "daily": 50.270833333333336,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2444.41434912,
              "hasRDI": true,
              "daily": 101.85059788000001,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 61.69363734997114,
              "hasRDI": true,
              "daily": 6.169363734997114,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 51.81366572291546,
              "hasRDI": true,
              "daily": 12.336587076884634,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1097.0921057833236,
              "hasRDI": true,
              "daily": 23.342385229432416,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 2.707307888562103,
              "hasRDI": true,
              "daily": 15.040599380900574,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 1.6539811722915463,
              "hasRDI": true,
              "daily": 15.036192475377693,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 311.53752,
              "hasRDI": true,
              "daily": 44.505359999999996,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 398.61888,
              "hasRDI": true,
              "daily": 44.29098666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.92,
              "hasRDI": true,
              "daily": 2.1333333333333333,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.37973302,
              "hasRDI": true,
              "daily": 31.64441833333333,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8534542,
              "hasRDI": true,
              "daily": 65.65032307692307,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 15.618301599999999,
              "hasRDI": true,
              "daily": 97.614385,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.61020154,
              "hasRDI": true,
              "daily": 46.93858,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 58.36198,
              "hasRDI": true,
              "daily": 14.590495,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 58.36198,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.096475,
              "hasRDI": true,
              "daily": 4.019791666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.6560476,
              "hasRDI": true,
              "daily": 11.040317333333332,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 11.142410000000002,
              "hasRDI": true,
              "daily": 9.28534166666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 898.4307351445832,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/14cf40f94311490abeaad8b1df95f12e?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c8ac4741ccfc458788f7a63886890cd2",
          "label": "Turkey Gravy",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/5ce/5ce89dbbc9c485f646be8b6e09dcc85a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a0ce93ae6f441b8de609d2592c2ba62af118fb75babf42b2618aa056f4ca574e",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5ce/5ce89dbbc9c485f646be8b6e09dcc85a-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b05f80249a802b8e183f1b379883cf05bdd6c75e644c6e0c4a00a464a8b8c512",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5ce/5ce89dbbc9c485f646be8b6e09dcc85a-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=752be5f1524192e3d437b6d501002e78777afdf31cf6fdae42de87026ba82a4e",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5ce/5ce89dbbc9c485f646be8b6e09dcc85a.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a0ce93ae6f441b8de609d2592c2ba62af118fb75babf42b2618aa056f4ca574e",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/5ce/5ce89dbbc9c485f646be8b6e09dcc85a-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f316e410a6fbedab9f929c6af072117b441b89276a2aa45657f83e9cd7bb9d04",
              "width": 600,
              "height": 600
            }
          },
          "source": "Bon Appetit",
          "url": "https://www.bonappetit.com/recipe/turkey-gravy",
          "shareAs": "http://www.edamam.com/recipe/turkey-gravy-c8ac4741ccfc458788f7a63886890cd2/turkey",
          "yield": 6.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "Make-Ahead Turkey Stock",
            "⅓ cup unsalted butter",
            "⅓ cup all-purpose flour",
            "1–2 cups skimmed and strained roast turkey drippings",
            "Kosher salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "Make-Ahead Turkey Stock",
              "quantity": 0.0,
              "measure": null,
              "food": "Turkey Stock",
              "weight": 65.46666666666667,
              "foodCategory": "canned soup",
              "foodId": "food_br4d1lpbopycuzbgrfdedanv8qv6",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "⅓ cup unsalted butter",
              "quantity": 0.3333333333333333,
              "measure": "cup",
              "food": "unsalted butter",
              "weight": 75.66666666666666,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "⅓ cup all-purpose flour",
              "quantity": 0.3333333333333333,
              "measure": "cup",
              "food": "all-purpose flour",
              "weight": 41.666666666666664,
              "foodCategory": "grains",
              "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
              "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
            },
            {
              "text": "1–2 cups skimmed and strained roast turkey drippings",
              "quantity": 1.5,
              "measure": "cup",
              "food": "roast turkey",
              "weight": 210.0,
              "foodCategory": "Poultry",
              "foodId": "food_btzvdx5a9k53h9avfhft9ad2gzx6",
              "image": "https://www.edamam.com/food-img/a7d/a7d78470270456fc7a8a940570c70804.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 1.964,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 0.982,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 1117.1294866666665,
          "totalCO2Emissions": 5571.623864266667,
          "co2EmissionsClass": "E",
          "totalWeight": 395.319272591134,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1117.1294866666665,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 78.11061319999999,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 43.0360478,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.2121,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 23.695522979999996,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 7.050894360000001,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 34.902519999999996,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 33.529073999999994,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.373446,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 1.1985581333333337,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 66.74672133333333,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 393.5473333333333,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 915.73216536,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 60.49320542187216,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 77.993259392578,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 646.5669151406241,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.475371866217408,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 5.672643072591135,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 550.68756,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 543.6798066666667,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.13093333333333335,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.44934056,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.8790742666666667,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 23.632681466666668,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.35699562,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 145.86027333333334,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 36.69360666666667,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 64.16666666666666,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.2706333333333335,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.8400000000000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.0281527999999995,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.163079999999999,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 211.0524245451823,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 55.856474333333324,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 120.17017415384613,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 215.18023899999997,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 11.634173333333331,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 5.493784,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 133.49344266666665,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 131.18244444444443,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 38.15550689,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 6.049320542187216,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 18.569823664899523,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 13.756742875332428,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.863177034541156,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 51.56948247810123,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 78.66965142857141,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 60.408867407407406,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.1454814814814815,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 37.44504666666667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 67.62109743589744,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 147.70425916666667,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 104.38427846153844,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 36.465068333333335,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 94.60972222222223,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 5.6000000000000005,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.521018666666663,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 5.9692333333333325,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 78.11061319999999,
              "hasRDI": true,
              "daily": 120.17017415384613,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 43.0360478,
                  "hasRDI": true,
                  "daily": 215.18023899999997,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.2121,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 23.695522979999996,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 7.050894360000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 34.902519999999996,
              "hasRDI": true,
              "daily": 11.634173333333331,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 33.529073999999994,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.373446,
                  "hasRDI": true,
                  "daily": 5.493784,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 1.1985581333333337,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 66.74672133333333,
              "hasRDI": true,
              "daily": 133.49344266666665,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 393.5473333333333,
              "hasRDI": true,
              "daily": 131.18244444444443,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 915.73216536,
              "hasRDI": true,
              "daily": 38.15550689,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 60.49320542187216,
              "hasRDI": true,
              "daily": 6.049320542187216,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 77.993259392578,
              "hasRDI": true,
              "daily": 18.569823664899523,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 646.5669151406241,
              "hasRDI": true,
              "daily": 13.756742875332428,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 4.475371866217408,
              "hasRDI": true,
              "daily": 24.863177034541156,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 5.672643072591135,
              "hasRDI": true,
              "daily": 51.56948247810123,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 550.68756,
              "hasRDI": true,
              "daily": 78.66965142857141,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 543.6798066666667,
              "hasRDI": true,
              "daily": 60.408867407407406,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.13093333333333335,
              "hasRDI": true,
              "daily": 0.1454814814814815,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.44934056,
              "hasRDI": true,
              "daily": 37.44504666666667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.8790742666666667,
              "hasRDI": true,
              "daily": 67.62109743589744,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 23.632681466666668,
              "hasRDI": true,
              "daily": 147.70425916666667,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.35699562,
              "hasRDI": true,
              "daily": 104.38427846153844,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 145.86027333333334,
              "hasRDI": true,
              "daily": 36.465068333333335,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 36.69360666666667,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 64.16666666666666,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 2.2706333333333335,
              "hasRDI": true,
              "daily": 94.60972222222223,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.8400000000000001,
              "hasRDI": true,
              "daily": 5.6000000000000005,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 2.0281527999999995,
              "hasRDI": true,
              "daily": 13.521018666666663,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.163079999999999,
              "hasRDI": true,
              "daily": 5.9692333333333325,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 211.0524245451823,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/c8ac4741ccfc458788f7a63886890cd2?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_59e09323ce8c6b8128ef08131f6b0323",
          "label": "Turkey Soup",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f93d5660417f7e73a8fae55b9f63c614420255188840e830f023dad97d41fad5",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=33a1793278d57f366977bd1600ee336d78df67100e1fe786fe0b76a53dd975a0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf2c970a8b80ba7a4d6c47f43d03b3ad3ab046f7ea4285512b7729e72250cb0a",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f93d5660417f7e73a8fae55b9f63c614420255188840e830f023dad97d41fad5",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a1c/a1cb44fd10a461e46dc0b0e82207fb07-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=17f49ae04cba688ddde4359a1d71fc6a48738ce31710eeb5b97672b13ed2ad4d",
              "width": 600,
              "height": 600
            }
          },
          "source": "Saveur",
          "url": "http://www.saveur.com/article/Recipes/Turkey-Soup",
          "shareAs": "http://www.edamam.com/recipe/turkey-soup-59e09323ce8c6b8128ef08131f6b0323/turkey",
          "yield": 24.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 turkey carcass, broken into pieces",
            "2 1/2 cups leftover turkey stuffing",
            "2 cups turkey gravy",
            "3 carrots, peeled and thickly sliced",
            "3 ribs celery with leaves, sliced",
            "1 onion, chopped",
            "1/2 cup chopped fresh parsley",
            "1 bay leaf",
            "2 tsp. dried thyme, crumbled",
            "Salt to taste"
          ],
          "ingredients": [
            {
              "text": "1 turkey carcass, broken into pieces",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "turkey carcass",
              "weight": 5002.0,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "2 1/2 cups leftover turkey stuffing",
              "quantity": 2.5,
              "measure": "cup",
              "food": "stuffing",
              "weight": 500.0,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_bsq0mlmaci65jya0s886xbzqtjxj",
              "image": "https://www.edamam.com/food-img/617/617068594786702e2ccbe7aee824fa5a.jpg"
            },
            {
              "text": "2 cups turkey gravy",
              "quantity": 2.0,
              "measure": "cup",
              "food": "turkey gravy",
              "weight": 476.0,
              "foodCategory": "canned soup",
              "foodId": "food_ai6dlfkajjot91a0vvyk6a3e1h6a",
              "image": "https://www.edamam.com/food-img/ff0/ff0b096e5afa9d97954e43707b41b55d.jpg"
            },
            {
              "text": "3 carrots, peeled and thickly sliced",
              "quantity": 3.0,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 183.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "3 ribs celery with leaves, sliced",
              "quantity": 3.0,
              "measure": "rib",
              "food": "celery",
              "weight": 120.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 onion, chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "onion",
              "weight": 125.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1/2 cup chopped fresh parsley",
              "quantity": 0.5,
              "measure": "cup",
              "food": "parsley",
              "weight": 30.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "1 bay leaf",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "bay leaf",
              "weight": 0.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
              "text": "2 tsp. dried thyme, crumbled",
              "quantity": 2.0,
              "measure": "teaspoon",
              "food": "dried thyme",
              "weight": 2.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
              "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
            },
            {
              "text": "Salt to taste",
              "quantity": 0.0,
              "measure": null,
              "food": "Salt",
              "weight": 38.631600000000006,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
          ],
          "calories": 8580.668,
          "totalCO2Emissions": 55103.1080813342,
          "co2EmissionsClass": "F",
          "totalWeight": 6448.867442082475,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 8580.668,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 353.31276,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 87.84973999999997,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 13.45124,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 124.85495,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 93.98925000000001,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 161.6762,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 144.7154,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 16.9608,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 30.5724,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1111.4817600000003,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3610.96,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 14972.835528,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 943.0681860997936,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1382.902674420825,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 13324.895395366602,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 56.78258255887217,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 95.2783674420825,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 9632.898,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 3106.7440000000006,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 64.946,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.440754,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 10.407696000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 397.77229,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 30.744359999999993,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 763.5400000000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 608.5400000000001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 90.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 61.60039999999999,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 15.006,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 13.371200000000002,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 652.0160000000001,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 4796.152974884166,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 429.0334,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 543.5580923076924,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 439.2486999999998,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 53.892066666666665,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 67.8432,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 2222.9635200000007,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1203.6533333333334,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 623.868147,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 94.30681860997936,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 329.2625415287678,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 283.50841266737456,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 315.4587919937343,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 866.1669767462045,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1376.1282857142855,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 345.1937777777779,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 72.16222222222221,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 286.72950000000003,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 800.592,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2486.0768125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2364.9507692307684,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 190.88500000000005,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2566.683333333333,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 100.03999999999999,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 89.14133333333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 543.3466666666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 353.31276,
              "hasRDI": true,
              "daily": 543.5580923076924,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 87.84973999999997,
                  "hasRDI": true,
                  "daily": 439.2486999999998,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 13.45124,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 124.85495,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 93.98925000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 161.6762,
              "hasRDI": true,
              "daily": 53.892066666666665,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 144.7154,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 16.9608,
                  "hasRDI": true,
                  "daily": 67.8432,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 30.5724,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 1111.4817600000003,
              "hasRDI": true,
              "daily": 2222.9635200000007,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3610.96,
              "hasRDI": true,
              "daily": 1203.6533333333334,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 14972.835528,
              "hasRDI": true,
              "daily": 623.868147,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 943.0681860997936,
              "hasRDI": true,
              "daily": 94.30681860997936,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1382.902674420825,
              "hasRDI": true,
              "daily": 329.2625415287678,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 13324.895395366602,
              "hasRDI": true,
              "daily": 283.50841266737456,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 56.78258255887217,
              "hasRDI": true,
              "daily": 315.4587919937343,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 95.2783674420825,
              "hasRDI": true,
              "daily": 866.1669767462045,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 9632.898,
              "hasRDI": true,
              "daily": 1376.1282857142855,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 3106.7440000000006,
              "hasRDI": true,
              "daily": 345.1937777777779,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 64.946,
              "hasRDI": true,
              "daily": 72.16222222222221,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.440754,
              "hasRDI": true,
              "daily": 286.72950000000003,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 10.407696000000001,
              "hasRDI": true,
              "daily": 800.592,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 397.77229,
              "hasRDI": true,
              "daily": 2486.0768125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 30.744359999999993,
              "hasRDI": true,
              "daily": 2364.9507692307684,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 763.5400000000002,
              "hasRDI": true,
              "daily": 190.88500000000005,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 608.5400000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 90.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 61.60039999999999,
              "hasRDI": true,
              "daily": 2566.683333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 15.006,
              "hasRDI": true,
              "daily": 100.03999999999999,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 13.371200000000002,
              "hasRDI": true,
              "daily": 89.14133333333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 652.0160000000001,
              "hasRDI": true,
              "daily": 543.3466666666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 4796.152974884166,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/59e09323ce8c6b8128ef08131f6b0323?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4320b3d6799bdcfe6ad371c442af16af",
          "label": "Turkey Burger",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/a48/a48b0260922b3cb11c1b4c718420eb7e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4189e90a30e0d8498298b395d10dde9eb4acd1b149a22d1a9802e4fd76e3fc4",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a48/a48b0260922b3cb11c1b4c718420eb7e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6075aaf5aeea5ba72430a0ce3e786776240fa2d445b16cebdbf1004da9c5c51d",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a48/a48b0260922b3cb11c1b4c718420eb7e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=755be277945755a2b7c78c17a7ec0773b5982ce84761285b81c62e4cdd9b1724",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/a48/a48b0260922b3cb11c1b4c718420eb7e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d4189e90a30e0d8498298b395d10dde9eb4acd1b149a22d1a9802e4fd76e3fc4",
              "width": 300,
              "height": 300
            }
          },
          "source": "Martha Stewart",
          "url": "https://www.marthastewart.com/1078592/turkey-burger",
          "shareAs": "http://www.edamam.com/recipe/turkey-burger-4320b3d6799bdcfe6ad371c442af16af/turkey",
          "yield": 4.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1/4 cup minced red onion",
            "1 tablespoon Worcestershire sauce",
            "1 teaspoon coarse salt",
            "1 pound ground turkey",
            "Extra-virgin olive oil"
          ],
          "ingredients": [
            {
              "text": "1/4 cup minced red onion",
              "quantity": 0.25,
              "measure": "cup",
              "food": "red onion",
              "weight": 40.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 tablespoon Worcestershire sauce",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "Worcestershire sauce",
              "weight": 17.0,
              "foodCategory": "canned soup",
              "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
              "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
            },
            {
              "text": "1 teaspoon coarse salt",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "coarse salt",
              "weight": 4.854166666912875,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1 pound ground turkey",
              "quantity": 1.0,
              "measure": "pound",
              "food": "ground turkey",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
              "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
            },
            {
              "text": "Extra-virgin olive oil",
              "quantity": 0.0,
              "measure": null,
              "food": "Extra-virgin olive oil",
              "weight": 7.010072898670014,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            }
          ],
          "calories": 762.3757520242431,
          "totalCO2Emissions": 4778.728356719664,
          "co2EmissionsClass": "E",
          "totalWeight": 519.452572674067,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "sandwiches"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 762.3757520242431,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 41.79524844067002,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 10.146755934016465,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.4672001411,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 17.097391784029114,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 10.721889794360354,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 7.0,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 6.32,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.68,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.3960000000000004,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 89.79769689000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 312.97873530000004,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1203.6741289119996,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 114.08668217508199,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 110.55474639775397,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1269.6320280110187,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.974518669491363,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 10.761570824775399,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 928.9847400000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 91.56847400000001,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.17,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.3296709642,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.7405040972000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 30.692166501000003,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.6062609668000003,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 40.71146590000001,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 40.71146590000001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.535923700000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.8143694800000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.4392836304084822,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 4.550063884999348,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 377.38957613955085,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 38.118787601212155,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 64.30038221641541,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 50.73377967008232,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.3333333333333335,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.72,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 179.59539378000002,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 104.32624510000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 50.15308870466665,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 11.408668217508199,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 26.322558666131897,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 27.01344740448976,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 33.191770386063126,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 97.83246204341272,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 132.71210571428574,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 10.17427488888889,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.7444444444444445,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 27.472580350000005,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 56.961853630769234,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 191.82604063125,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 200.48161283076925,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 10.177866475000002,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 188.99682083333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.095796533333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 9.595224202723214,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 3.7917199041661234,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 41.79524844067002,
              "hasRDI": true,
              "daily": 64.30038221641541,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 10.146755934016465,
                  "hasRDI": true,
                  "daily": 50.73377967008232,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.4672001411,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 17.097391784029114,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 10.721889794360354,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 7.0,
              "hasRDI": true,
              "daily": 2.3333333333333335,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 6.32,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.68,
                  "hasRDI": true,
                  "daily": 2.72,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.3960000000000004,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 89.79769689000001,
              "hasRDI": true,
              "daily": 179.59539378000002,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 312.97873530000004,
              "hasRDI": true,
              "daily": 104.32624510000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1203.6741289119996,
              "hasRDI": true,
              "daily": 50.15308870466665,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 114.08668217508199,
              "hasRDI": true,
              "daily": 11.408668217508199,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 110.55474639775397,
              "hasRDI": true,
              "daily": 26.322558666131897,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1269.6320280110187,
              "hasRDI": true,
              "daily": 27.01344740448976,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.974518669491363,
              "hasRDI": true,
              "daily": 33.191770386063126,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 10.761570824775399,
              "hasRDI": true,
              "daily": 97.83246204341272,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 928.9847400000001,
              "hasRDI": true,
              "daily": 132.71210571428574,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 91.56847400000001,
              "hasRDI": true,
              "daily": 10.17427488888889,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 5.17,
              "hasRDI": true,
              "daily": 5.7444444444444445,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.3296709642,
              "hasRDI": true,
              "daily": 27.472580350000005,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.7405040972000001,
              "hasRDI": true,
              "daily": 56.961853630769234,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 30.692166501000003,
              "hasRDI": true,
              "daily": 191.82604063125,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.6062609668000003,
              "hasRDI": true,
              "daily": 200.48161283076925,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 40.71146590000001,
              "hasRDI": true,
              "daily": 10.177866475000002,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 40.71146590000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.535923700000001,
              "hasRDI": true,
              "daily": 188.99682083333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.8143694800000003,
              "hasRDI": true,
              "daily": 12.095796533333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.4392836304084822,
              "hasRDI": true,
              "daily": 9.595224202723214,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 4.550063884999348,
              "hasRDI": true,
              "daily": 3.7917199041661234,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 377.38957613955085,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/4320b3d6799bdcfe6ad371c442af16af?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_50eb7bae9d0b4578b7ef1839850ea6e0",
          "label": "Turkey Burgers",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d0d75e2bd42a22a9dd598b0184183b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0b260d2f0f9f4d1b7c5a079b62a7e249ed154f1764836a1b0c178200a8efe61",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d0d75e2bd42a22a9dd598b0184183b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0ab6b3f2a019f9ece05c256d21bbf73b6343752f5d78d8b6ebf5cb4a3cfe0747",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d0d75e2bd42a22a9dd598b0184183b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=de26a1ba94487d36ad5bb75e4e7a25f7722cffa3c95756d99583dfda33e44d29",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d0d75e2bd42a22a9dd598b0184183b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b0b260d2f0f9f4d1b7c5a079b62a7e249ed154f1764836a1b0c178200a8efe61",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/b5d/b5d0d75e2bd42a22a9dd598b0184183b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=79c4b9b13da594b5587b2a3194a1313f06d8ce915bffdb6b309789a3e4b0aec2",
              "width": 600,
              "height": 600
            }
          },
          "source": "Honest Cooking",
          "url": "https://honestcooking.com/turkey-burgers-recipe/",
          "shareAs": "http://www.edamam.com/recipe/turkey-burgers-50eb7bae9d0b4578b7ef1839850ea6e0/turkey",
          "yield": 4.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 pound of freshly ground turkey",
            "salt / pepper1 clover of garlic, grated",
            "½ brown onion, diced",
            "a dash of Worcester Sauce",
            "salt / pepper"
          ],
          "ingredients": [
            {
              "text": "1 pound of freshly ground turkey",
              "quantity": 1.0,
              "measure": "pound",
              "food": "ground turkey",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
              "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
            },
            {
              "text": "salt / pepper1 clover of garlic, grated",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 3.100851094998475,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "½ brown onion, diced",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "onion",
              "weight": 62.5,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "a dash of Worcester Sauce",
              "quantity": 1.0,
              "measure": "dash",
              "food": "Worcester Sauce",
              "weight": 0.7161458330790678,
              "foodCategory": "canned soup",
              "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
              "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
            },
            {
              "text": "salt / pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "salt",
              "weight": 3.100851094998475,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
          ],
          "calories": 696.868139891471,
          "totalCO2Emissions": 4521.254661765566,
          "co2EmissionsClass": "E",
          "totalWeight": 519.1975220108354,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "sandwiches"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 696.868139891471,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 34.807675542000005,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 9.188815874000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.4672001411,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 11.982963568000002,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.989657140000002,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 5.974999999951182,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 4.912499999951182,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.0625,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 2.721614583307907,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 90.04519689000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 312.97873530000004,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1201.8278673995092,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 101.89718782405616,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 110.69323412007785,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1172.184204058853,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.121246282539787,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 10.769420378260607,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 925.7394274998476,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 90.75428129165397,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 4.718098958300279,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.3286222662831554,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.7254100867830028,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 30.60427952183156,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.6332609668000004,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 43.68375756664633,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 43.68375756664633,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.535923700000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.8143694800000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.4213060496664633,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.2571614583307907,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 384.65532837132264,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 34.84340699457355,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 53.5502700646154,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 45.94407937000001,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.991666666650394,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.25,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 180.09039378,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 104.32624510000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 50.07616114164621,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 10.189718782405617,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 26.35553193335187,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 24.940089448060704,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 28.45136823633215,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 97.90382162055097,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 132.24848964283535,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 10.083809032405997,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.2423321758891985,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 27.385188856929616,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 55.80077590638482,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 191.27674701144727,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 202.55853590769232,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 10.920939391661582,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 188.99682083333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.095796533333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.808706997776422,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.2143012152756589,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 34.807675542000005,
              "hasRDI": true,
              "daily": 53.5502700646154,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 9.188815874000001,
                  "hasRDI": true,
                  "daily": 45.94407937000001,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.4672001411,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 11.982963568000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.989657140000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 5.974999999951182,
              "hasRDI": true,
              "daily": 1.991666666650394,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 4.912499999951182,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.0625,
                  "hasRDI": true,
                  "daily": 4.25,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 2.721614583307907,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 90.04519689000001,
              "hasRDI": true,
              "daily": 180.09039378,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 312.97873530000004,
              "hasRDI": true,
              "daily": 104.32624510000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1201.8278673995092,
              "hasRDI": true,
              "daily": 50.07616114164621,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 101.89718782405616,
              "hasRDI": true,
              "daily": 10.189718782405617,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 110.69323412007785,
              "hasRDI": true,
              "daily": 26.35553193335187,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1172.184204058853,
              "hasRDI": true,
              "daily": 24.940089448060704,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.121246282539787,
              "hasRDI": true,
              "daily": 28.45136823633215,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 10.769420378260607,
              "hasRDI": true,
              "daily": 97.90382162055097,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 925.7394274998476,
              "hasRDI": true,
              "daily": 132.24848964283535,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 90.75428129165397,
              "hasRDI": true,
              "daily": 10.083809032405997,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 4.718098958300279,
              "hasRDI": true,
              "daily": 5.2423321758891985,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.3286222662831554,
              "hasRDI": true,
              "daily": 27.385188856929616,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.7254100867830028,
              "hasRDI": true,
              "daily": 55.80077590638482,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 30.60427952183156,
              "hasRDI": true,
              "daily": 191.27674701144727,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.6332609668000004,
              "hasRDI": true,
              "daily": 202.55853590769232,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 43.68375756664633,
              "hasRDI": true,
              "daily": 10.920939391661582,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 43.68375756664633,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.535923700000001,
              "hasRDI": true,
              "daily": 188.99682083333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.8143694800000003,
              "hasRDI": true,
              "daily": 12.095796533333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.4213060496664633,
              "hasRDI": true,
              "daily": 2.808706997776422,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 0.2571614583307907,
              "hasRDI": true,
              "daily": 0.2143012152756589,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 384.65532837132264,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/50eb7bae9d0b4578b7ef1839850ea6e0?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_62e7b03f50c1c5e2392c1a977bf79030",
          "label": "Easy turkey crown",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/be4/be4375485888b261620d710f40f3a3a9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e4eb4d2ff73b944ac2f2de10f35aa5954bc015285e67280a812ef9c694a74d99",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/be4/be4375485888b261620d710f40f3a3a9-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9f3ca1f686d2f7ff2f4bfd8a465d282752b44adccbf51d07e8d3b55eacc163d3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/be4/be4375485888b261620d710f40f3a3a9-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b8a625912e3c1c3590d418e9aa0fedab2cce75203ccde861f68405be82569d12",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/be4/be4375485888b261620d710f40f3a3a9.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e4eb4d2ff73b944ac2f2de10f35aa5954bc015285e67280a812ef9c694a74d99",
              "width": 300,
              "height": 300
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/easy-turkey-crown",
          "shareAs": "http://www.edamam.com/recipe/easy-turkey-crown-62e7b03f50c1c5e2392c1a977bf79030/turkey",
          "yield": 6.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "FODMAP-Free",
            "Immuno-Supportive"
          ],
          "cautions": [],
          "ingredientLines": [
            "50g butter, softened",
            "2kg turkey crown on the bone",
            "1 tsp Chinese five spice or a pinch of ground cloves"
          ],
          "ingredients": [
            {
              "text": "50g butter, softened",
              "quantity": 50.0,
              "measure": "gram",
              "food": "butter",
              "weight": 50.0,
              "foodCategory": "Dairy",
              "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
              "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
            },
            {
              "text": "2kg turkey crown on the bone",
              "quantity": 2.0,
              "measure": "kilogram",
              "food": "turkey crown",
              "weight": 2000.0,
              "foodCategory": "Poultry",
              "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
              "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
            },
            {
              "text": "1 tsp Chinese five spice or a pinch of ground cloves",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "ground cloves",
              "weight": 2.1,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_abb00nxbw761ggavcuto7b3mw1s0",
              "image": "https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg"
            }
          ],
          "calories": 3504.254,
          "totalCO2Emissions": 20937.59478,
          "co2EmissionsClass": "G",
          "totalWeight": 2052.1,
          "totalTime": 90.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3504.254,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 181.22299999999998,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 63.532949999999985,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.005334,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 64.92919,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 34.780809999999995,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.4055000000000002,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0.6936000000000002,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.7119,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.07998,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 438.55037000000004,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1407.5,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1191.317,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 285.272,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 486.43899999999996,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5533.42,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.257800000000003,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 31.493720000000003,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3734.184,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 382.168,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.004200000000000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.165818,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.3216200000000002,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 104.05376000000001,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 9.609710999999999,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 142.025,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 142.025,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.485000000000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.3452199999999999,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 6.482,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1408.30727,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 175.21269999999998,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 278.8046153846154,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 317.6647499999999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.4685,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.8476,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 877.1007400000001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 469.1666666666667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 49.63820833333333,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 28.5272,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 115.8188095238095,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 117.73234042553192,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 134.76555555555558,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 286.30654545454547,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 533.4548571428571,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 42.46311111111111,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.004666666666666667,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 97.1515,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 178.58615384615388,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 650.336,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 739.2085384615383,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 35.50625,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 353.54166666666674,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 8.968133333333332,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 5.401666666666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 181.22299999999998,
              "hasRDI": true,
              "daily": 278.8046153846154,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 63.532949999999985,
                  "hasRDI": true,
                  "daily": 317.6647499999999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.005334,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 64.92919,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 34.780809999999995,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 1.4055000000000002,
              "hasRDI": true,
              "daily": 0.4685,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0.6936000000000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.7119,
                  "hasRDI": true,
                  "daily": 2.8476,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.07998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 438.55037000000004,
              "hasRDI": true,
              "daily": 877.1007400000001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1407.5,
              "hasRDI": true,
              "daily": 469.1666666666667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1191.317,
              "hasRDI": true,
              "daily": 49.63820833333333,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 285.272,
              "hasRDI": true,
              "daily": 28.5272,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 486.43899999999996,
              "hasRDI": true,
              "daily": 115.8188095238095,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5533.42,
              "hasRDI": true,
              "daily": 117.73234042553192,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 24.257800000000003,
              "hasRDI": true,
              "daily": 134.76555555555558,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 31.493720000000003,
              "hasRDI": true,
              "daily": 286.30654545454547,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3734.184,
              "hasRDI": true,
              "daily": 533.4548571428571,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 382.168,
              "hasRDI": true,
              "daily": 42.46311111111111,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.004200000000000001,
              "hasRDI": true,
              "daily": 0.004666666666666667,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.165818,
              "hasRDI": true,
              "daily": 97.1515,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.3216200000000002,
              "hasRDI": true,
              "daily": 178.58615384615388,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 104.05376000000001,
              "hasRDI": true,
              "daily": 650.336,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 9.609710999999999,
              "hasRDI": true,
              "daily": 739.2085384615383,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 142.025,
              "hasRDI": true,
              "daily": 35.50625,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 142.025,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.485000000000001,
              "hasRDI": true,
              "daily": 353.54166666666674,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.3452199999999999,
              "hasRDI": true,
              "daily": 8.968133333333332,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 6.482,
              "hasRDI": true,
              "daily": 5.401666666666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1408.30727,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/62e7b03f50c1c5e2392c1a977bf79030?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8daa814572c1786f408f00807e41d902",
          "label": "The Simplest Roast Turkey",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/287/287c74087daa690f5eecf390bfb2e5aa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f9ceb1430e8f27c7da9ac46f3cb8964d445201831c631c03b629bcb02878061",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/287/287c74087daa690f5eecf390bfb2e5aa-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1b611571ba69c72f7a20ff8dba344ed5e40e7e33d664d73fc058c85d905395a3",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/287/287c74087daa690f5eecf390bfb2e5aa-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=529983f92f5ddd98d282b6eff9e04fbe198a4483756f1075eec3eb00dff8b942",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/287/287c74087daa690f5eecf390bfb2e5aa.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4f9ceb1430e8f27c7da9ac46f3cb8964d445201831c631c03b629bcb02878061",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/287/287c74087daa690f5eecf390bfb2e5aa-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=23bd7b188ed260d8dfc9f2f64bc27dac76da1f84716b1dcd5aa4e4cd6715db76",
              "width": 600,
              "height": 600
            }
          },
          "source": "Epicurious",
          "url": "https://www.epicurious.com/recipes/food/views/the-simplest-roast-turkey-232985",
          "shareAs": "http://www.edamam.com/recipe/the-simplest-roast-turkey-8daa814572c1786f408f00807e41d902/turkey",
          "yield": 10.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 (14- to 16-lb) turkey, neck and giblets (excluding liver) reserved for turkey giblet stock",
            "2½ teaspoons salt (2 teaspoons if using a kosher bird)",
            "1½ teaspoons black pepper",
            "Special Equipment: Pliers (preferably needlenose); a small metal skewer (optional); kitchen string; a flat metal rack; an instant-read thermometer"
          ],
          "ingredients": [
            {
              "text": "1 (14- to 16-lb) turkey, neck and giblets (excluding liver) reserved for turkey giblet stock",
              "quantity": 15.0,
              "measure": "pound",
              "food": "turkey",
              "weight": 6803.88555,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "2½ teaspoons salt (2 teaspoons if using a kosher bird)",
              "quantity": 2.5,
              "measure": "teaspoon",
              "food": "salt",
              "weight": 15.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "1½ teaspoons black pepper",
              "quantity": 1.5,
              "measure": "teaspoon",
              "food": "black pepper",
              "weight": 4.35,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 6967.211086319999,
          "totalCO2Emissions": 67169.7467085,
          "co2EmissionsClass": "G",
          "totalWeight": 6823.23555,
          "totalTime": 180.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 6967.211086319999,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 272.5966029642,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 70.58954261129998,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 2.9950704191099997,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 88.43503145114997,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 71.05556648534998,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 9.5470622367,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 8.4465122367,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.10055,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.4093711183499997,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1043.8962879479998,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 3478.146293159999,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 11231.31978936,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 554.2539614549999,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1215.278185125,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 10879.954578719999,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 42.01641016829999,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 86.0542705809,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 8847.161495114999,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 822.4034858849998,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.3234621954399994,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 8.944733669924998,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 368.63648190015,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 28.948903355594993,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 338.89261183499997,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 338.89261183499997,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 58.93525663409999,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 14.492276221499997,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.392922866449999,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.1339999999999995,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 3512.5353543434994,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 348.36055431599993,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 419.37938917569227,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 352.9477130564999,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 3.1823540789000004,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.4022,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 2087.7925758959996,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1159.3820977199998,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 467.97165789,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 55.42539614549999,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 289.3519488392857,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 231.48839529191486,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 233.42450093499994,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 782.3115507354545,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1263.880213587857,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 91.37816509833331,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 193.62184961999998,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 688.0564361480767,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 2303.978011875937,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2226.8387196611534,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 84.72315295874999,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2455.6356930875,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 96.61517480999997,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 29.286152442999995,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 5.944999999999999,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 272.5966029642,
              "hasRDI": true,
              "daily": 419.37938917569227,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 70.58954261129998,
                  "hasRDI": true,
                  "daily": 352.9477130564999,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 2.9950704191099997,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 88.43503145114997,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 71.05556648534998,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 9.5470622367,
              "hasRDI": true,
              "daily": 3.1823540789000004,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 8.4465122367,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.10055,
                  "hasRDI": true,
                  "daily": 4.4022,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.4093711183499997,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 1043.8962879479998,
              "hasRDI": true,
              "daily": 2087.7925758959996,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 3478.146293159999,
              "hasRDI": true,
              "daily": 1159.3820977199998,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 11231.31978936,
              "hasRDI": true,
              "daily": 467.97165789,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 554.2539614549999,
              "hasRDI": true,
              "daily": 55.42539614549999,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1215.278185125,
              "hasRDI": true,
              "daily": 289.3519488392857,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 10879.954578719999,
              "hasRDI": true,
              "daily": 231.48839529191486,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 42.01641016829999,
              "hasRDI": true,
              "daily": 233.42450093499994,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 86.0542705809,
              "hasRDI": true,
              "daily": 782.3115507354545,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 8847.161495114999,
              "hasRDI": true,
              "daily": 1263.880213587857,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 822.4034858849998,
              "hasRDI": true,
              "daily": 91.37816509833331,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.3234621954399994,
              "hasRDI": true,
              "daily": 193.62184961999998,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 8.944733669924998,
              "hasRDI": true,
              "daily": 688.0564361480767,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 368.63648190015,
              "hasRDI": true,
              "daily": 2303.978011875937,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 28.948903355594993,
              "hasRDI": true,
              "daily": 2226.8387196611534,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 338.89261183499997,
              "hasRDI": true,
              "daily": 84.72315295874999,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 338.89261183499997,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 58.93525663409999,
              "hasRDI": true,
              "daily": 2455.6356930875,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 14.492276221499997,
              "hasRDI": true,
              "daily": 96.61517480999997,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.392922866449999,
              "hasRDI": true,
              "daily": 29.286152442999995,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 7.1339999999999995,
              "hasRDI": true,
              "daily": 5.944999999999999,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 3512.5353543434994,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/8daa814572c1786f408f00807e41d902?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7045d7e5a2e847cea94a37f1e1364e2b",
          "label": "Turkey Congee",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/67d/67dbbf8b7542b64a3e1f5d4ed3a5fb56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=453eff46dc277bca56f28dc00f21d259cac6730eae095edadfd1557c74f132a5",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/67d/67dbbf8b7542b64a3e1f5d4ed3a5fb56-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8b27cabc3fa67664db21a707f3ef82f001e9d0e3e6f9ea4d2f666b4dcfc1fb06",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/67d/67dbbf8b7542b64a3e1f5d4ed3a5fb56-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=111995e80bfd154f4952d8169e0f28de5ccc4c5e860a6dd485112d0f627ddbdd",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/67d/67dbbf8b7542b64a3e1f5d4ed3a5fb56.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=453eff46dc277bca56f28dc00f21d259cac6730eae095edadfd1557c74f132a5",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/67d/67dbbf8b7542b64a3e1f5d4ed3a5fb56-l.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8671d538eb6d1f2602769b5f8fcdb8feb2bec8ab4087b729490d58560c9bf100",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "https://food52.com/recipes/19378-turkey-congee",
          "shareAs": "http://www.edamam.com/recipe/turkey-congee-7045d7e5a2e847cea94a37f1e1364e2b/turkey",
          "yield": 2.0,
          "dietLabels": [
            "Low-Fat"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 pound Leftover turkey meat and bones",
            "4 cups Water",
            "1 cup White long-grain rice",
            "1 egg",
            "1 tablespoon chopped spring onions",
            "Pinch salt and white pepper"
          ],
          "ingredients": [
            {
              "text": "1 pound Leftover turkey meat and bones",
              "quantity": 1.0,
              "measure": "pound",
              "food": "turkey meat",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_b2p8t3wa5ajr9zbin5oxvalxjuf0",
              "image": "https://www.edamam.com/food-img/2c5/2c5c2bf2701d4b4adda0d8a85df1eceb.jpg"
            },
            {
              "text": "4 cups Water",
              "quantity": 4.0,
              "measure": "cup",
              "food": "Water",
              "weight": 946.352946,
              "foodCategory": "water",
              "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
              "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
            },
            {
              "text": "1 cup White long-grain rice",
              "quantity": 1.0,
              "measure": "cup",
              "food": "long-grain rice",
              "weight": 185.0,
              "foodCategory": "grains",
              "foodId": "food_aoretmhabmvwy5be2cqeva2lxi7k",
              "image": "https://www.edamam.com/food-img/e49/e4946f328d36095b279369b7bf47850a.jpg"
            },
            {
              "text": "1 egg",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "egg",
              "weight": 43.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "1 tablespoon chopped spring onions",
              "quantity": 1.0,
              "measure": "tablespoon",
              "food": "spring onions",
              "weight": 6.0,
              "foodCategory": "vegetables",
              "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
              "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
            },
            {
              "text": "Pinch salt and white pepper",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "salt",
              "weight": 0.380208333815447,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Pinch salt and white pepper",
              "quantity": 1.0,
              "measure": "pinch",
              "food": "white pepper",
              "weight": 0.14791666685672963,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
              "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
            }
          ],
          "calories": 1260.729058833896,
          "totalCO2Emissions": 4941.039106067247,
          "co2EmissionsClass": "G",
          "totalWeight": 1634.4734410006722,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "breakfast"
          ],
          "dishType": [
            "cereals"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1260.729058833896,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 14.079168574337363,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 3.7637349366345236,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.048091465900000005,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 4.1213226674014996,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.018365807367837,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 149.4865001514637,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 146.88674598474725,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.5997541667164636,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.8384146590000001,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 121.24555895335313,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 463.86688790000005,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 791.8913437937364,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 158.96897824728603,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 184.68039644350918,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1354.7304653335104,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 6.244601152862104,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 11.0373865692693,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1162.195836333668,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 112.6233133,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.159062500039913,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.3768287266667085,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.1630437254002397,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 39.765045553333735,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 3.3377301690668575,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 70.61625756668568,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 70.61625756668568,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 6.007245388,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.7671847400000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.096233133,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 12.734,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1347.0468629506895,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 63.0364529416948,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 21.660259345134406,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 18.818674683172617,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 49.828833383821234,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 10.399016666865855,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 242.49111790670625,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 154.62229596666668,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 32.99547265807235,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 15.896897824728603,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 43.97152296274029,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 28.824052453904475,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 34.69222862701169,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 100.33987790244818,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 166.02797661909543,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 12.51370147777778,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.28784722226657,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 31.40239388889238,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 89.4649019538646,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 248.53153470833584,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 256.7484745436044,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 17.65406439167142,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 250.30189116666668,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.781231600000002,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 7.308220886666666,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 10.611666666666668,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 14.079168574337363,
              "hasRDI": true,
              "daily": 21.660259345134406,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 3.7637349366345236,
                  "hasRDI": true,
                  "daily": 18.818674683172617,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.048091465900000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 4.1213226674014996,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.018365807367837,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 149.4865001514637,
              "hasRDI": true,
              "daily": 49.828833383821234,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 146.88674598474725,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 2.5997541667164636,
                  "hasRDI": true,
                  "daily": 10.399016666865855,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.8384146590000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 121.24555895335313,
              "hasRDI": true,
              "daily": 242.49111790670625,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 463.86688790000005,
              "hasRDI": true,
              "daily": 154.62229596666668,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 791.8913437937364,
              "hasRDI": true,
              "daily": 32.99547265807235,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 158.96897824728603,
              "hasRDI": true,
              "daily": 15.896897824728603,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 184.68039644350918,
              "hasRDI": true,
              "daily": 43.97152296274029,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1354.7304653335104,
              "hasRDI": true,
              "daily": 28.824052453904475,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 6.244601152862104,
              "hasRDI": true,
              "daily": 34.69222862701169,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 11.0373865692693,
              "hasRDI": true,
              "daily": 100.33987790244818,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 1162.195836333668,
              "hasRDI": true,
              "daily": 166.02797661909543,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 112.6233133,
              "hasRDI": true,
              "daily": 12.51370147777778,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.159062500039913,
              "hasRDI": true,
              "daily": 1.28784722226657,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.3768287266667085,
              "hasRDI": true,
              "daily": 31.40239388889238,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.1630437254002397,
              "hasRDI": true,
              "daily": 89.4649019538646,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 39.765045553333735,
              "hasRDI": true,
              "daily": 248.53153470833584,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 3.3377301690668575,
              "hasRDI": true,
              "daily": 256.7484745436044,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 70.61625756668568,
              "hasRDI": true,
              "daily": 17.65406439167142,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 70.61625756668568,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 6.007245388,
              "hasRDI": true,
              "daily": 250.30189116666668,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.7671847400000003,
              "hasRDI": true,
              "daily": 11.781231600000002,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 1.096233133,
              "hasRDI": true,
              "daily": 7.308220886666666,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 12.734,
              "hasRDI": true,
              "daily": 10.611666666666668,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1347.0468629506895,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/7045d7e5a2e847cea94a37f1e1364e2b?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_ac2f5ec26df7057e01294cc014bc3461",
          "label": "Turkey Gravy recipes",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/99b/99bb54eeef035cf63f2bfd72d9af8c26?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d699691b1e3f46412e842d8a89fecdf9c2de5f128a1adc54112214414bd00b8",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99b/99bb54eeef035cf63f2bfd72d9af8c26-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5d9d061d32e4179ae716af9c219f413426f1f7915a6b9ec748909ab2716776e",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99b/99bb54eeef035cf63f2bfd72d9af8c26-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75417a67d154541229eaa13635cc71672d9a70a1616aa698bc2c093b3737cddb",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/99b/99bb54eeef035cf63f2bfd72d9af8c26?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=969426fd64abf9f4ddab133c35294de3d2507de85ed18e25cfad74082314672d",
              "width": 300,
              "height": 300
            }
          },
          "source": "Pioneer Woman",
          "url": "http://thepioneerwoman.com/food-and-friends/thanksgiving-dinner-how-to-make-gravy/",
          "shareAs": "http://www.edamam.com/recipe/turkey-gravy-recipes-ac2f5ec26df7057e01294cc014bc3461/turkey",
          "yield": 6.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "3-1/2 pounds Turkey Legs Or Wings",
            "1 pound Turkey Necks",
            "1 Large Onion, Chopped",
            "1 Large Carrot, Chopped Into Large Chunks",
            "1 stalk Celery, Chopped",
            "4 sprigs Parsley",
            "4 sprigs Thyme",
            "1 Bay Leaf",
            "1 cup Turkey Drippings",
            "6 cups Turkey Stock",
            "1/3 cup Turkey Fat",
            "1/3 cup Flour",
            "1 teaspoon Minced Fresh Thyme",
            "1 teaspoon Minced Fresh Sage"
          ],
          "ingredients": [
            {
              "text": "3-1/2 pounds Turkey Legs Or Wings",
              "quantity": 3.5,
              "measure": "pound",
              "food": "Turkey Legs",
              "weight": 1587.5732950000001,
              "foodCategory": "Poultry",
              "foodId": "food_bk225dhawwsk75b2ihq0vbyklcey",
              "image": "https://www.edamam.com/food-img/af0/af0ecbe6b6f3df58da1cf33d667824fa.jpg"
            },
            {
              "text": "1 pound Turkey Necks",
              "quantity": 1.0,
              "measure": "pound",
              "food": "Turkey Necks",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_ae6sr37a7i6dv2b3hd2lpb116hg1",
              "image": null
            },
            {
              "text": "1 Large Onion, Chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "Onion",
              "weight": 150.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 Large Carrot, Chopped Into Large Chunks",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "Carrot",
              "weight": 72.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 stalk Celery, Chopped",
              "quantity": 1.0,
              "measure": "stalk",
              "food": "Celery",
              "weight": 40.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "4 sprigs Parsley",
              "quantity": 4.0,
              "measure": "sprig",
              "food": "Parsley",
              "weight": 4.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            },
            {
              "text": "4 sprigs Thyme",
              "quantity": 4.0,
              "measure": "sprig",
              "food": "Thyme",
              "weight": 12.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "1 Bay Leaf",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "Bay Leaf",
              "weight": 0.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
              "text": "1 cup Turkey Drippings",
              "quantity": 1.0,
              "measure": "cup",
              "food": "Turkey",
              "weight": 140.0,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "6 cups Turkey Stock",
              "quantity": 6.0,
              "measure": "cup",
              "food": "Turkey Stock",
              "weight": 1440.0,
              "foodCategory": "canned soup",
              "foodId": "food_br4d1lpbopycuzbgrfdedanv8qv6",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "1/3 cup Turkey Fat",
              "quantity": 0.3333333333333333,
              "measure": "cup",
              "food": "Turkey Fat",
              "weight": 68.33333333333333,
              "foodCategory": "Oils",
              "foodId": "food_bgu5v26b45u9xmadnktz9b6oo7nr",
              "image": null
            },
            {
              "text": "1/3 cup Flour",
              "quantity": 0.3333333333333333,
              "measure": "cup",
              "food": "Flour",
              "weight": 41.666666666666664,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "1 teaspoon Minced Fresh Thyme",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "Fresh Thyme",
              "weight": 0.8,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "1 teaspoon Minced Fresh Sage",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "Fresh Sage",
              "weight": 2.666666666847008,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b00mwy0bne9gs4au15ja8ab10h0e",
              "image": "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg"
            }
          ],
          "calories": 4459.528673967235,
          "totalCO2Emissions": 36620.09911355029,
          "co2EmissionsClass": "G",
          "totalWeight": 4013.2323316668476,
          "totalTime": 75.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4459.528673967235,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 228.89183790535648,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 67.37830998201268,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0868,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 81.37625567767004,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 57.11231104116983,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 110.36033333344281,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 100.87286666670346,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 9.487466666739342,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 33.35090000000309,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 458.99360690835255,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1862.5082649500002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4540.011127066687,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 624.2236289529757,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 565.8492474507718,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 7492.755614118596,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 40.69657694438401,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 70.1342761585085,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 4323.045190816831,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 780.0674077171986,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 46.41100000005844,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.2296282125180262,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 5.987280219817272,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 104.564643473177,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 9.223436096471517,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 350.8769480004942,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 350.8769480004942,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 15.882761562500002,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 5.06077711,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 3.9516441773468225,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 136.0290000030838,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 3180.4691009616813,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 222.97643369836175,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 352.1412890851638,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 336.8915499100634,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 36.78677777781427,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 37.94986666695737,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 917.9872138167051,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 620.8360883166667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 189.1671302944453,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 62.42236289529757,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 134.7260112978028,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 159.42033221528928,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 226.09209413546674,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 637.5843287137136,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 617.5778844024044,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 86.67415641302208,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 51.56777777784272,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 185.80235104316884,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 460.56001690902093,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 653.5290217073563,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 709.4950843439627,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 87.71923700012356,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 661.7817317708334,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 33.73851406666667,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 26.344294515645483,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 113.35750000256984,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 228.89183790535648,
              "hasRDI": true,
              "daily": 352.1412890851638,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 67.37830998201268,
                  "hasRDI": true,
                  "daily": 336.8915499100634,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0868,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 81.37625567767004,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 57.11231104116983,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 110.36033333344281,
              "hasRDI": true,
              "daily": 36.78677777781427,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 100.87286666670346,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 9.487466666739342,
                  "hasRDI": true,
                  "daily": 37.94986666695737,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 33.35090000000309,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 458.99360690835255,
              "hasRDI": true,
              "daily": 917.9872138167051,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1862.5082649500002,
              "hasRDI": true,
              "daily": 620.8360883166667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4540.011127066687,
              "hasRDI": true,
              "daily": 189.1671302944453,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 624.2236289529757,
              "hasRDI": true,
              "daily": 62.42236289529757,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 565.8492474507718,
              "hasRDI": true,
              "daily": 134.7260112978028,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 7492.755614118596,
              "hasRDI": true,
              "daily": 159.42033221528928,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 40.69657694438401,
              "hasRDI": true,
              "daily": 226.09209413546674,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 70.1342761585085,
              "hasRDI": true,
              "daily": 637.5843287137136,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 4323.045190816831,
              "hasRDI": true,
              "daily": 617.5778844024044,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 780.0674077171986,
              "hasRDI": true,
              "daily": 86.67415641302208,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 46.41100000005844,
              "hasRDI": true,
              "daily": 51.56777777784272,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.2296282125180262,
              "hasRDI": true,
              "daily": 185.80235104316884,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 5.987280219817272,
              "hasRDI": true,
              "daily": 460.56001690902093,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 104.564643473177,
              "hasRDI": true,
              "daily": 653.5290217073563,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 9.223436096471517,
              "hasRDI": true,
              "daily": 709.4950843439627,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 350.8769480004942,
              "hasRDI": true,
              "daily": 87.71923700012356,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 350.8769480004942,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 15.882761562500002,
              "hasRDI": true,
              "daily": 661.7817317708334,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 5.06077711,
              "hasRDI": true,
              "daily": 33.73851406666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 3.9516441773468225,
              "hasRDI": true,
              "daily": 26.344294515645483,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 136.0290000030838,
              "hasRDI": true,
              "daily": 113.35750000256984,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 3180.4691009616813,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "mashed cauliflower",
            "thanksgiving recipes",
            "pioneer woman thanksgiving",
            "browned butter gravy",
            "turkey stuffing",
            "roasting turkey in roasting pan",
            "christmas gravy",
            "baked whole turkey",
            "roast turkey sauce",
            "roux gravy",
            "turkey gravy roasted",
            "turkey gravy with roux",
            "stock for turkey gravy",
            "turkey chops and gravy",
            "10 lb thanksgiving turkey",
            "turkey gravy from stock",
            "roast turkey butter",
            "turkey+stock+gravy",
            "gravy canned broth",
            "roasted butter herb turkey"
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/ac2f5ec26df7057e01294cc014bc3461?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f47c9b30880841b29aa9a53639a31213",
          "label": "Sous Vide Turkey Legs",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6df/6df672607aeb0b03974524bf2a274755.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df2b7f40c2a8dfe98ab819eef8330bc6585014f39956402ac58e58a7bdd46f8a",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6df/6df672607aeb0b03974524bf2a274755-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3492b8efbe93b824d7db818b1df2a284bf355747b2cb00fe698bab9ba1bb52d0",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6df/6df672607aeb0b03974524bf2a274755-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=60c37e29863913f114a23b166c46de9c4e382258aac3f86a14eddabb50430c20",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6df/6df672607aeb0b03974524bf2a274755.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df2b7f40c2a8dfe98ab819eef8330bc6585014f39956402ac58e58a7bdd46f8a",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6df/6df672607aeb0b03974524bf2a274755-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ee325ebe466c53c2bdb24e606566b0ab2df30828e4663b8f42673cdd34f0c4b9",
              "width": 600,
              "height": 600
            }
          },
          "source": "Serious Eats",
          "url": "https://www.seriouseats.com/sous-vide-turkey-legs-recipe-5210218",
          "shareAs": "http://www.edamam.com/recipe/sous-vide-turkey-legs-f47c9b30880841b29aa9a53639a31213/turkey",
          "yield": 4.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Paleo",
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "FODMAP-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "4 to 4 1/2 pounds (1.8 to 2 kg) turkey legs, number will vary by size",
            "Kosher salt and freshly ground black pepper",
            "6 sprigs fresh thyme"
          ],
          "ingredients": [
            {
              "text": "4 to 4 1/2 pounds (1.8 to 2 kg) turkey legs, number will vary by size",
              "quantity": 4.25,
              "measure": "pound",
              "food": "turkey legs",
              "weight": 1927.7675725000001,
              "foodCategory": "Poultry",
              "foodId": "food_bk225dhawwsk75b2ihq0vbyklcey",
              "image": "https://www.edamam.com/food-img/af0/af0ecbe6b6f3df58da1cf33d667824fa.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 11.674605435000002,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 5.837302717500001,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "6 sprigs fresh thyme",
              "quantity": 6.0,
              "measure": "sprig",
              "food": "fresh thyme",
              "weight": 18.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            }
          ],
          "calories": 2808.816934220925,
          "totalCO2Emissions": 19066.582824950452,
          "co2EmissionsClass": "G",
          "totalWeight": 1959.6179748077768,
          "totalTime": 1455.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 2808.816934220925,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 130.0386769405905,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 39.877210501273254,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 39.769729660582335,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 35.43216285787065,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 8.1278737392,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 4.1310361516725,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 3.9968375875275,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.037358737392000005,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 377.52255612012004,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1368.7149764750002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4538.418105220792,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 428.40288226519135,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 443.69310886782785,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5450.702647034973,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 36.88284756951716,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 59.971294992178535,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3440.45154161865,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 63.693747458725,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 28.799999999999997,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.4993253177599,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 4.162876722866501,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 57.26328863972951,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.634036297407926,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 201.869098711975,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 201.869098711975,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 7.518293532750001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.06070794826200001,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 9.5731764567,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1413.9507142463683,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 140.44084671104625,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 200.05950298552386,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 199.38605250636627,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 2.7092912464000003,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 15.98735035011,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 755.0451122402401,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 456.2383254916667,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 189.1007543841997,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 42.840288226519135,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 105.64121639710187,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 115.97239674542496,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 204.9047087195398,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 545.1935908379867,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 491.4930773740929,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 7.077083050969445,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 31.999999999999996,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 124.94377647999166,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 320.2212863743462,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 357.8955539983094,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 510.31048441599427,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 50.46727467799374,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 313.26223053125005,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.4047196550800001,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 7.9776470472500005,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 130.0386769405905,
              "hasRDI": true,
              "daily": 200.05950298552386,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 39.877210501273254,
                  "hasRDI": true,
                  "daily": 199.38605250636627,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 39.769729660582335,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 35.43216285787065,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 8.1278737392,
              "hasRDI": true,
              "daily": 2.7092912464000003,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 4.1310361516725,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 3.9968375875275,
                  "hasRDI": true,
                  "daily": 15.98735035011,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.037358737392000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 377.52255612012004,
              "hasRDI": true,
              "daily": 755.0451122402401,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1368.7149764750002,
              "hasRDI": true,
              "daily": 456.2383254916667,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4538.418105220792,
              "hasRDI": true,
              "daily": 189.1007543841997,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 428.40288226519135,
              "hasRDI": true,
              "daily": 42.840288226519135,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 443.69310886782785,
              "hasRDI": true,
              "daily": 105.64121639710187,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5450.702647034973,
              "hasRDI": true,
              "daily": 115.97239674542496,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 36.88284756951716,
              "hasRDI": true,
              "daily": 204.9047087195398,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 59.971294992178535,
              "hasRDI": true,
              "daily": 545.1935908379867,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3440.45154161865,
              "hasRDI": true,
              "daily": 491.4930773740929,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 63.693747458725,
              "hasRDI": true,
              "daily": 7.077083050969445,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 28.799999999999997,
              "hasRDI": true,
              "daily": 31.999999999999996,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.4993253177599,
              "hasRDI": true,
              "daily": 124.94377647999166,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 4.162876722866501,
              "hasRDI": true,
              "daily": 320.2212863743462,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 57.26328863972951,
              "hasRDI": true,
              "daily": 357.8955539983094,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.634036297407926,
              "hasRDI": true,
              "daily": 510.31048441599427,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 201.869098711975,
              "hasRDI": true,
              "daily": 50.46727467799374,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 201.869098711975,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 7.518293532750001,
              "hasRDI": true,
              "daily": 313.26223053125005,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.06070794826200001,
              "hasRDI": true,
              "daily": 0.4047196550800001,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 9.5731764567,
              "hasRDI": true,
              "daily": 7.9776470472500005,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1413.9507142463683,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/f47c9b30880841b29aa9a53639a31213?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_95035eddd9e7d9a14c0d2afc1e9ee807",
          "label": "Turkey Avgolemono",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/39c/39ce3ae9c57f239f6f0f1d0d2387b372.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=869b59341f0ccc36f5ff1cef78ccf12cdb05f25af450f6da9a69d68620bd8c8d",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/39c/39ce3ae9c57f239f6f0f1d0d2387b372-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=24961c23c3cc68ddb7533c1166e87ea9e14026586249e2ada15ff448a70bad75",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/39c/39ce3ae9c57f239f6f0f1d0d2387b372-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=866c0be43a4f1515b7ccf16adad26c847b146e853fbce483dfe280315d2c31cb",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/39c/39ce3ae9c57f239f6f0f1d0d2387b372.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=869b59341f0ccc36f5ff1cef78ccf12cdb05f25af450f6da9a69d68620bd8c8d",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/39c/39ce3ae9c57f239f6f0f1d0d2387b372-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=653dd79cb2173addaaf9580352db67f65f0857b1661adbd64d6624df4ba5c66d",
              "width": 600,
              "height": 600
            }
          },
          "source": "Food52",
          "url": "http://food52.com/recipes/32269-turkey-avgolemono",
          "shareAs": "http://www.edamam.com/recipe/turkey-avgolemono-95035eddd9e7d9a14c0d2afc1e9ee807/turkey",
          "yield": 12.0,
          "dietLabels": [],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "6 quarts chicken or turkey stock",
            "12 eggs",
            "2 cups lemon juice",
            "2 cups cooked white rice",
            "4 cups cooked chicken or turkey, pulled from the bone in nice, big pieces",
            "Olive oil for serving",
            "Parsley for serving"
          ],
          "ingredients": [
            {
              "text": "6 quarts chicken or turkey stock",
              "quantity": 6.0,
              "measure": "quart",
              "food": "turkey stock",
              "weight": 5760.0,
              "foodCategory": "canned soup",
              "foodId": "food_br4d1lpbopycuzbgrfdedanv8qv6",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "12 eggs",
              "quantity": 12.0,
              "measure": "<unit>",
              "food": "eggs",
              "weight": 516.0,
              "foodCategory": "Eggs",
              "foodId": "food_bhpradua77pk16aipcvzeayg732r",
              "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
            },
            {
              "text": "2 cups lemon juice",
              "quantity": 2.0,
              "measure": "cup",
              "food": "lemon juice",
              "weight": 488.0,
              "foodCategory": "100% juice",
              "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
              "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
            },
            {
              "text": "2 cups cooked white rice",
              "quantity": 2.0,
              "measure": "cup",
              "food": "cooked white rice",
              "weight": 372.0,
              "foodCategory": "grains",
              "foodId": "food_amwqvqubqnah33ayuze70bdzs5mk",
              "image": "https://www.edamam.com/food-img/ee1/ee14e91fe6931d00130249eb539d4ae8.jpg"
            },
            {
              "text": "4 cups cooked chicken or turkey, pulled from the bone in nice, big pieces",
              "quantity": 4.0,
              "measure": "cup",
              "food": "cooked chicken",
              "weight": 560.0,
              "foodCategory": "Poultry",
              "foodId": "food_a59p480aae04fubjz0yo7a5auh4m",
              "image": "https://www.edamam.com/food-img/c81/c81b9affb7c9c29a861e8566bd2d0829.jpg"
            },
            {
              "text": "Olive oil for serving",
              "quantity": 1.0,
              "measure": "serving",
              "food": "Olive oil",
              "weight": 14.0,
              "foodCategory": "Oils",
              "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
              "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
            },
            {
              "text": "Parsley for serving",
              "quantity": 1.0,
              "measure": "serving",
              "food": "Parsley",
              "weight": 5.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 4463.200000000001,
          "totalCO2Emissions": 67095.482644144,
          "co2EmissionsClass": "G",
          "totalWeight": 7715.0,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 4463.200000000001,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 171.3115,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 47.122240000000005,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.19608,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 76.91463,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 32.3674,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 347.42370000000005,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 344.67870000000005,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 2.745,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 105.25730000000001,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 360.8781,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 2512.32,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 9397.48,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 576.44,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 490.06000000000006,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 8680.84,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 34.223600000000005,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 25.0923,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3831.66,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 971.45,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 207.02600000000007,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 3.3122600000000006,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 8.21494,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 142.87738000000002,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 7.10178,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1024.56,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 671.1600000000001,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 208.32000000000005,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 6.2164,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 10.32,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 9.9315,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 103.49600000000001,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 6791.353000000001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 223.16000000000003,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 263.5561538461538,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 235.6112,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 115.8079,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 10.98,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 721.7562000000001,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 837.44,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 391.56166666666667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 57.644000000000005,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 116.6809523809524,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 184.69872340425533,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 190.13111111111115,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 228.1118181818182,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 547.38,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 107.93888888888888,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 230.02888888888896,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 276.0216666666667,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 631.9184615384615,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 892.9836250000001,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 546.2907692307692,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 256.14,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 259.01666666666665,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 68.8,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 66.21,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 86.24666666666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 171.3115,
              "hasRDI": true,
              "daily": 263.5561538461538,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 47.122240000000005,
                  "hasRDI": true,
                  "daily": 235.6112,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.19608,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 76.91463,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 32.3674,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 347.42370000000005,
              "hasRDI": true,
              "daily": 115.8079,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 344.67870000000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 2.745,
                  "hasRDI": true,
                  "daily": 10.98,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 105.25730000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 360.8781,
              "hasRDI": true,
              "daily": 721.7562000000001,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 2512.32,
              "hasRDI": true,
              "daily": 837.44,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 9397.48,
              "hasRDI": true,
              "daily": 391.56166666666667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 576.44,
              "hasRDI": true,
              "daily": 57.644000000000005,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 490.06000000000006,
              "hasRDI": true,
              "daily": 116.6809523809524,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 8680.84,
              "hasRDI": true,
              "daily": 184.69872340425533,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 34.223600000000005,
              "hasRDI": true,
              "daily": 190.13111111111115,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 25.0923,
              "hasRDI": true,
              "daily": 228.1118181818182,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3831.66,
              "hasRDI": true,
              "daily": 547.38,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 971.45,
              "hasRDI": true,
              "daily": 107.93888888888888,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 207.02600000000007,
              "hasRDI": true,
              "daily": 230.02888888888896,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 3.3122600000000006,
              "hasRDI": true,
              "daily": 276.0216666666667,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 8.21494,
              "hasRDI": true,
              "daily": 631.9184615384615,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 142.87738000000002,
              "hasRDI": true,
              "daily": 892.9836250000001,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 7.10178,
              "hasRDI": true,
              "daily": 546.2907692307692,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1024.56,
              "hasRDI": true,
              "daily": 256.14,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 671.1600000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 208.32000000000005,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 6.2164,
              "hasRDI": true,
              "daily": 259.01666666666665,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 10.32,
              "hasRDI": true,
              "daily": 68.8,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 9.9315,
              "hasRDI": true,
              "daily": 66.21,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 103.49600000000001,
              "hasRDI": true,
              "daily": 86.24666666666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 6791.353000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/95035eddd9e7d9a14c0d2afc1e9ee807?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_60a10a75b184d476caa276b818a59a4c",
          "label": "Turkey Burgers",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/ff0/ff0d36ab959f8fa58a2d05d54ddb0767.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5c0717ec82d772bc6ebe7447f0145fb264a0cdef2514212d9b846616e5b207b",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff0/ff0d36ab959f8fa58a2d05d54ddb0767-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b253a727b713c8016138f8b18a2c2c4d103e89f1eb388dd1a5158f14168754ae",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff0/ff0d36ab959f8fa58a2d05d54ddb0767-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83558e31100d09d79b3fdd16c0d9a14325f3c8bda03c7ea5b7e8479ed66edff9",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff0/ff0d36ab959f8fa58a2d05d54ddb0767.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5c0717ec82d772bc6ebe7447f0145fb264a0cdef2514212d9b846616e5b207b",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/ff0/ff0d36ab959f8fa58a2d05d54ddb0767-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=bb9b56a5ce7f9f284f8d22d3f3c7abe88e6316d687d2c9bfa7224379630b62cd",
              "width": 600,
              "height": 600
            }
          },
          "source": "Honest Cooking",
          "url": "http://honestcooking.com/turkey-burgers-recipe/",
          "shareAs": "http://www.edamam.com/recipe/turkey-burgers-60a10a75b184d476caa276b818a59a4c/turkey",
          "yield": 4.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "1 pound of freshly ground turkey",
            "Salt/pepper1 clover of garlic, grated",
            "½ brown onion, diced",
            "A dash of worcester sauce",
            "Salt/pepper"
          ],
          "ingredients": [
            {
              "text": "1 pound of freshly ground turkey",
              "quantity": 1.0,
              "measure": "pound",
              "food": "ground turkey",
              "weight": 453.59237,
              "foodCategory": "Poultry",
              "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
              "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
            },
            {
              "text": "Salt/pepper1 clover of garlic, grated",
              "quantity": 0.0,
              "measure": null,
              "food": "Salt",
              "weight": 3.100851094998475,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "½ brown onion, diced",
              "quantity": 0.5,
              "measure": "<unit>",
              "food": "onion",
              "weight": 62.5,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "A dash of worcester sauce",
              "quantity": 1.0,
              "measure": "dash",
              "food": "worcester sauce",
              "weight": 0.7161458330790678,
              "foodCategory": "canned soup",
              "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
              "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
            },
            {
              "text": "Salt/pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Salt",
              "weight": 3.100851094998475,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            }
          ],
          "calories": 696.868139891471,
          "totalCO2Emissions": 4521.254661765566,
          "co2EmissionsClass": "E",
          "totalWeight": 519.1975220108354,
          "totalTime": 20.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "sandwiches"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 696.868139891471,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 34.807675542000005,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 9.188815874000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.4672001411,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 11.982963568000002,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 9.989657140000002,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 5.974999999951182,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 4.912499999951182,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.0625,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 2.721614583307907,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 90.04519689000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 312.97873530000004,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1201.8278673995092,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 101.89718782405616,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 110.69323412007785,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1172.184204058853,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 5.121246282539787,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 10.769420378260607,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 925.7394274998476,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 90.75428129165397,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 4.718098958300279,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.3286222662831554,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.7254100867830028,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 30.60427952183156,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 2.6332609668000004,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 43.68375756664633,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 43.68375756664633,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 4.535923700000001,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 1.8143694800000003,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.4213060496664633,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.2571614583307907,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 384.65532837132264,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 34.84340699457355,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 53.5502700646154,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 45.94407937000001,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.991666666650394,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 4.25,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 180.09039378,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 104.32624510000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 50.07616114164621,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 10.189718782405617,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 26.35553193335187,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 24.940089448060704,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 28.45136823633215,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 97.90382162055097,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 132.24848964283535,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 10.083809032405997,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 5.2423321758891985,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 27.385188856929616,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 55.80077590638482,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 191.27674701144727,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 202.55853590769232,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 10.920939391661582,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 188.99682083333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 12.095796533333335,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 2.808706997776422,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.2143012152756589,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 34.807675542000005,
              "hasRDI": true,
              "daily": 53.5502700646154,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 9.188815874000001,
                  "hasRDI": true,
                  "daily": 45.94407937000001,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.4672001411,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 11.982963568000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 9.989657140000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 5.974999999951182,
              "hasRDI": true,
              "daily": 1.991666666650394,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 4.912499999951182,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 1.0625,
                  "hasRDI": true,
                  "daily": 4.25,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 2.721614583307907,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 90.04519689000001,
              "hasRDI": true,
              "daily": 180.09039378,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 312.97873530000004,
              "hasRDI": true,
              "daily": 104.32624510000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1201.8278673995092,
              "hasRDI": true,
              "daily": 50.07616114164621,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 101.89718782405616,
              "hasRDI": true,
              "daily": 10.189718782405617,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 110.69323412007785,
              "hasRDI": true,
              "daily": 26.35553193335187,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1172.184204058853,
              "hasRDI": true,
              "daily": 24.940089448060704,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 5.121246282539787,
              "hasRDI": true,
              "daily": 28.45136823633215,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 10.769420378260607,
              "hasRDI": true,
              "daily": 97.90382162055097,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 925.7394274998476,
              "hasRDI": true,
              "daily": 132.24848964283535,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 90.75428129165397,
              "hasRDI": true,
              "daily": 10.083809032405997,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 4.718098958300279,
              "hasRDI": true,
              "daily": 5.2423321758891985,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.3286222662831554,
              "hasRDI": true,
              "daily": 27.385188856929616,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.7254100867830028,
              "hasRDI": true,
              "daily": 55.80077590638482,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 30.60427952183156,
              "hasRDI": true,
              "daily": 191.27674701144727,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 2.6332609668000004,
              "hasRDI": true,
              "daily": 202.55853590769232,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 43.68375756664633,
              "hasRDI": true,
              "daily": 10.920939391661582,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 43.68375756664633,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 4.535923700000001,
              "hasRDI": true,
              "daily": 188.99682083333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 1.8143694800000003,
              "hasRDI": true,
              "daily": 12.095796533333335,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.4213060496664633,
              "hasRDI": true,
              "daily": 2.808706997776422,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 0.2571614583307907,
              "hasRDI": true,
              "daily": 0.2143012152756589,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 384.65532837132264,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/60a10a75b184d476caa276b818a59a4c?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8841f9a3d91446f38dedb6f7754187cd",
          "label": "Turkey Stock",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da8327786a9ecb421530b9a25d987fed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d5c351488b99285c93f7567d7e301957b0491789e3cf69b9b15cfe1ad7da2f0",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da8327786a9ecb421530b9a25d987fed-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0527b71311678478216735e530f6f825ededd0b0873253b307d6200e5b24783f",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da8327786a9ecb421530b9a25d987fed-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fe105dbd30e3e459d94e7d9f2a92215dbf5d1a85270c8360ac6fc16cc6bf9c88",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da8327786a9ecb421530b9a25d987fed.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8d5c351488b99285c93f7567d7e301957b0491789e3cf69b9b15cfe1ad7da2f0",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/da8/da8327786a9ecb421530b9a25d987fed-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f6ff307123708686d5ae4b35833b28f7ccf330db98010b94a8cf3d7470564ff8",
              "width": 600,
              "height": 600
            }
          },
          "source": "Saveur",
          "url": "https://www.saveur.com/article/recipes/turkey-stock/",
          "shareAs": "http://www.edamam.com/recipe/turkey-stock-8841f9a3d91446f38dedb6f7754187cd/turkey",
          "yield": 2.0,
          "dietLabels": [
            "Low-Carb",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "3 lb. fresh turkey bones (wings, backs, and legs)",
            "1 medium carrot, coarsely chopped",
            "1 celery rib, coarsely chopped",
            "1 medium yellow onion, peeled and coarsely chopped"
          ],
          "ingredients": [
            {
              "text": "3 lb. fresh turkey bones (wings, backs, and legs)",
              "quantity": 3.0,
              "measure": "pound",
              "food": "turkey bones",
              "weight": 1360.77711,
              "foodCategory": "meats",
              "foodId": "food_a7q728iawv3tnjaxst3bzbwilr6w",
              "image": "https://www.edamam.com/food-img/fe9/fe9a9e49cc93092c033926d327ca50b4.jpg"
            },
            {
              "text": "1 medium carrot, coarsely chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "carrot",
              "weight": 61.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 celery rib, coarsely chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "celery rib",
              "weight": 40.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 medium yellow onion, peeled and coarsely chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "yellow onion",
              "weight": 110.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            }
          ],
          "calories": 66.12445790400002,
          "totalCO2Emissions": 135471.7369028,
          "co2EmissionsClass": "G",
          "totalWeight": 62.8710844,
          "totalTime": 0.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 66.12445790400002,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 3.8231519080000007,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 1.6362333320000004,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 0.0013768,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 0.0045008,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.6922320000000001,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 0.5235120000000001,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.16872,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.32365600000000005,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 6.069551284000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 17.417947008000002,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 82.06467238000002,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 2.4572000000000003,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 0.9088,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 18.392,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 0.7273640972000002,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 0.015416000000000003,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2.5140000000000002,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 20.726000000000003,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.5191600000000001,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.003970400000000001,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.0035152000000000004,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 0.0342092,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.0098312,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 1.8756000000000002,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 1.8756000000000002,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.021304,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.80848,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 7.601320000000001,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3.3062228952000012,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 5.881772166153848,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 8.181166660000002,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.23074400000000003,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.67488,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 12.139102568000004,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 5.805982336000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 3.419361349166667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 0.24572000000000002,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 0.2163809523809524,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 0.3913191489361702,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.040911651111112,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 0.14014545454545457,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 0.3591428571428572,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 2.3028888888888894,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.5768444444444445,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.33086666666666675,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.27040000000000003,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 0.2138075,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.7562461538461538,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 0.4689,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.14202666666666666,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 0.6737333333333333,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 3.8231519080000007,
              "hasRDI": true,
              "daily": 5.881772166153848,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 1.6362333320000004,
                  "hasRDI": true,
                  "daily": 8.181166660000002,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 0.0013768,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 0.0045008,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 0.6922320000000001,
              "hasRDI": true,
              "daily": 0.23074400000000003,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 0.5235120000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.16872,
                  "hasRDI": true,
                  "daily": 0.67488,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.32365600000000005,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 6.069551284000001,
              "hasRDI": true,
              "daily": 12.139102568000004,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 17.417947008000002,
              "hasRDI": true,
              "daily": 5.805982336000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 82.06467238000002,
              "hasRDI": true,
              "daily": 3.419361349166667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 2.4572000000000003,
              "hasRDI": true,
              "daily": 0.24572000000000002,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 0.9088,
              "hasRDI": true,
              "daily": 0.2163809523809524,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 18.392,
              "hasRDI": true,
              "daily": 0.3913191489361702,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 0.7273640972000002,
              "hasRDI": true,
              "daily": 4.040911651111112,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 0.015416000000000003,
              "hasRDI": true,
              "daily": 0.14014545454545457,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2.5140000000000002,
              "hasRDI": true,
              "daily": 0.3591428571428572,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 20.726000000000003,
              "hasRDI": true,
              "daily": 2.3028888888888894,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.5191600000000001,
              "hasRDI": true,
              "daily": 0.5768444444444445,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.003970400000000001,
              "hasRDI": true,
              "daily": 0.33086666666666675,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.0035152000000000004,
              "hasRDI": true,
              "daily": 0.27040000000000003,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 0.0342092,
              "hasRDI": true,
              "daily": 0.2138075,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.0098312,
              "hasRDI": true,
              "daily": 0.7562461538461538,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 1.8756000000000002,
              "hasRDI": true,
              "daily": 0.4689,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 1.8756000000000002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.021304,
              "hasRDI": true,
              "daily": 0.14202666666666666,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 0.80848,
              "hasRDI": true,
              "daily": 0.6737333333333333,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 7.601320000000001,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/8841f9a3d91446f38dedb6f7754187cd?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_6647bdb94e2f49c7b2fcaf284e895603",
          "label": "Turkey stock",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/090/0901751b4d85d6384b288c30a3eb2979.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e623999d0a0c6999a74fa740cb369dff157ce1729bd5353a86328a5245dde150",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/090/0901751b4d85d6384b288c30a3eb2979-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=36224630e13de912eaa331fe0e0fd76fd1fa49d1e9e0e4bb952746e41870ea8a",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/090/0901751b4d85d6384b288c30a3eb2979-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=13cd630a46683d58cde5e74035b7c98b0d4f801008e28472e6876f5bf6d1e5d5",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/090/0901751b4d85d6384b288c30a3eb2979.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e623999d0a0c6999a74fa740cb369dff157ce1729bd5353a86328a5245dde150",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/090/0901751b4d85d6384b288c30a3eb2979-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=54216902f8a02726e8ca750c8a8aaebe8e0cd72944a91917d16864607386b84a",
              "width": 600,
              "height": 600
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/turkey-stock",
          "shareAs": "http://www.edamam.com/recipe/turkey-stock-6647bdb94e2f49c7b2fcaf284e895603/turkey",
          "yield": 6.0,
          "dietLabels": [
            "High-Protein",
            "Low-Carb",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Paleo",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 turkey carcass, meat removed",
            "2 onions, chopped",
            "2 carrots, chopped",
            "2 celery stalks, chopped",
            "1 tsp black peppercorns",
            "3 sprigs thyme",
            "1 bay leaf"
          ],
          "ingredients": [
            {
              "text": "1 turkey carcass, meat removed",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "turkey carcass",
              "weight": 5002.0,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "2 onions, chopped",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "onions",
              "weight": 250.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "2 carrots, chopped",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 122.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "2 celery stalks, chopped",
              "quantity": 2.0,
              "measure": "stalk",
              "food": "celery",
              "weight": 80.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 tsp black peppercorns",
              "quantity": 1.0,
              "measure": "teaspoon",
              "food": "black peppercorns",
              "weight": 2.9,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            },
            {
              "text": "3 sprigs thyme",
              "quantity": 3.0,
              "measure": "sprig",
              "food": "thyme",
              "weight": 9.0,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
              "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
            },
            {
              "text": "1 bay leaf",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "bay leaf",
              "weight": 0.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            }
          ],
          "calories": 295.2938800000001,
          "totalCO2Emissions": 49600.3842200002,
          "co2EmissionsClass": "G",
          "totalWeight": 218.66000000000003,
          "totalTime": 40.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "soup"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 295.2938800000001,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 11.323500000000001,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2.932114400000001,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.12404960000000001,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 3.6659160400000017,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.9540040800000003,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 1.956736,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 1.512836,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.44389999999999996,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 0.8389904000000001,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 43.42865040000001,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 144.05760000000004,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 230.47792000000004,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 29.371240000000007,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 52.760760000000005,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 490.5773600000001,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 1.8469516000000001,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 3.6030804000000014,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 372.1144000000001,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 76.42788000000002,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.7142800000000002,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.10483144000000003,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.37950784000000015,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 15.344268799999998,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.2215895600000002,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 18.20972,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 18.20972,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 2.4409760000000005,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.6002400000000001,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.2241264,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.8119999999999998,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 161.98016560000002,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 14.764694000000006,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 17.42076923076923,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 14.660572000000005,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 0.6522453333333333,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.7755999999999998,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 86.85730080000002,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 48.01920000000001,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 9.603246666666669,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 2.9371240000000007,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 12.562085714285717,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 10.437816170212768,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 10.260842222222223,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 32.755276363636376,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 53.15920000000001,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 8.491986666666667,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.9047555555555558,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 8.735953333333336,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 29.192910769230778,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 95.90167999999998,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 93.9684276923077,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 4.55243,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 101.70733333333337,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 4.001600000000001,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.494176,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.51,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 11.323500000000001,
              "hasRDI": true,
              "daily": 17.42076923076923,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 2.932114400000001,
                  "hasRDI": true,
                  "daily": 14.660572000000005,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.12404960000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 3.6659160400000017,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.9540040800000003,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 1.956736,
              "hasRDI": true,
              "daily": 0.6522453333333333,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 1.512836,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.44389999999999996,
                  "hasRDI": true,
                  "daily": 1.7755999999999998,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 0.8389904000000001,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 43.42865040000001,
              "hasRDI": true,
              "daily": 86.85730080000002,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 144.05760000000004,
              "hasRDI": true,
              "daily": 48.01920000000001,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 230.47792000000004,
              "hasRDI": true,
              "daily": 9.603246666666669,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 29.371240000000007,
              "hasRDI": true,
              "daily": 2.9371240000000007,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 52.760760000000005,
              "hasRDI": true,
              "daily": 12.562085714285717,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 490.5773600000001,
              "hasRDI": true,
              "daily": 10.437816170212768,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 1.8469516000000001,
              "hasRDI": true,
              "daily": 10.260842222222223,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 3.6030804000000014,
              "hasRDI": true,
              "daily": 32.755276363636376,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 372.1144000000001,
              "hasRDI": true,
              "daily": 53.15920000000001,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 76.42788000000002,
              "hasRDI": true,
              "daily": 8.491986666666667,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.7142800000000002,
              "hasRDI": true,
              "daily": 1.9047555555555558,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.10483144000000003,
              "hasRDI": true,
              "daily": 8.735953333333336,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.37950784000000015,
              "hasRDI": true,
              "daily": 29.192910769230778,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 15.344268799999998,
              "hasRDI": true,
              "daily": 95.90167999999998,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.2215895600000002,
              "hasRDI": true,
              "daily": 93.9684276923077,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 18.20972,
              "hasRDI": true,
              "daily": 4.55243,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 18.20972,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 2.4409760000000005,
              "hasRDI": true,
              "daily": 101.70733333333337,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.6002400000000001,
              "hasRDI": true,
              "daily": 4.001600000000001,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.2241264,
              "hasRDI": true,
              "daily": 1.494176,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 1.8119999999999998,
              "hasRDI": true,
              "daily": 1.51,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 161.98016560000002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/6647bdb94e2f49c7b2fcaf284e895603?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7ef841f7193d4e8697f5d633443f1de8",
          "label": "Smoked-Turkey Gravy",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/6ed/6ed747baff19c2b5af45543652f84037?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18cc67af3d01e1b58440d9048c37e3b47c2f5999fa288a4558a528183e9fda45",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6ed/6ed747baff19c2b5af45543652f84037-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=df0c0a1fc67d68540e4828ac6bbfb31b1eccf7523d4a6716d7dfd35dbde4c475",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6ed/6ed747baff19c2b5af45543652f84037-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e78d6e2d8461397aeb31d30132fe803ef07b7f9de2601366ec17be042bb35ab4",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/6ed/6ed747baff19c2b5af45543652f84037?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=18cc67af3d01e1b58440d9048c37e3b47c2f5999fa288a4558a528183e9fda45",
              "width": 300,
              "height": 300
            }
          },
          "source": "Martha Stewart",
          "url": "https://www.marthastewart.com/1554750/smoked-turkey-gravy",
          "shareAs": "http://www.edamam.com/recipe/smoked-turkey-gravy-7ef841f7193d4e8697f5d633443f1de8/turkey",
          "yield": 10.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "No oil added",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "Turkey neck and giblets (reserved from Smoked Turkey recipe)",
            "3 pounds fresh or frozen turkey pieces (necks, wings, backs), or 3 pounds fresh or frozen chicken wings and backs (thawed if frozen)",
            "2 medium carrots, halved lengthwise",
            "1 medium yellow onion, quartered",
            "1 small piece celery (about 4 inches long)",
            "1 small fresh or dried bay leaf",
            "6 cups Easy Homemade Turkey Stock, or store-bought chicken or turkey broth, or water, or a combination",
            "1/2 cup dry white wine or water",
            "2 to 3 tablespoons all-purpose flour, or 1 to 2 tablespoons Wondra flour",
            "Kosher salt (we use Diamond Crystal) and freshly ground pepper"
          ],
          "ingredients": [
            {
              "text": "Turkey neck and giblets (reserved from Smoked Turkey recipe)",
              "quantity": 1.0,
              "measure": "turkey",
              "food": "Turkey",
              "weight": 500.0,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "3 pounds fresh or frozen turkey pieces (necks, wings, backs), or 3 pounds fresh or frozen chicken wings and backs (thawed if frozen)",
              "quantity": 1.0,
              "measure": "piece",
              "food": "chicken wings",
              "weight": 107.0,
              "foodCategory": "Poultry",
              "foodId": "food_aftnyj9ap60fc6av2a9nfbju90c1",
              "image": "https://www.edamam.com/food-img/f92/f928682fc890edded472c5d8baeffed5.jpg"
            },
            {
              "text": "2 medium carrots, halved lengthwise",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "carrots",
              "weight": 122.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "1 medium yellow onion, quartered",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "yellow onion",
              "weight": 110.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 small piece celery (about 4 inches long)",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "celery",
              "weight": 30.0,
              "foodCategory": "vegetables",
              "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
              "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
            },
            {
              "text": "1 small fresh or dried bay leaf",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "bay leaf",
              "weight": 0.6,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_asx39x4ayja4jab6ivj6zayvkblo",
              "image": "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg"
            },
            {
              "text": "6 cups Easy Homemade Turkey Stock, or store-bought chicken or turkey broth, or water, or a combination",
              "quantity": 6.0,
              "measure": "cup",
              "food": "chicken",
              "weight": 840.0,
              "foodCategory": "Poultry",
              "foodId": "food_bmyxrshbfao9s1amjrvhoauob6mo",
              "image": "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg"
            },
            {
              "text": "1/2 cup dry white wine or water",
              "quantity": 0.5,
              "measure": "cup",
              "food": "dry white wine",
              "weight": 117.6,
              "foodCategory": "wines",
              "foodId": "food_a656mk2a5dmqb2adiamu6beihduu",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            },
            {
              "text": "2 to 3 tablespoons all-purpose flour, or 1 to 2 tablespoons Wondra flour",
              "quantity": 2.5,
              "measure": "tablespoon",
              "food": "all-purpose flour",
              "weight": 19.531249999669775,
              "foodCategory": "grains",
              "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
              "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
            },
            {
              "text": "Kosher salt (we use Diamond Crystal) and freshly ground pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 11.080387499998018,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt (we use Diamond Crystal) and freshly ground pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "pepper",
              "weight": 5.540193749999009,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 3011.899636311295,
          "totalCO2Emissions": 14679.045476504225,
          "co2EmissionsClass": "F",
          "totalWeight": 1859.8731023405473,
          "totalTime": 145.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3011.899636311295,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 169.6119765662467,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 47.51060213062448,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 1.19007,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 67.4717142193122,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 37.47353519612363,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 45.508267749747404,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 37.65545498100657,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 7.852812768740833,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 12.415951614999102,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 288.23247889996594,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1108.77,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 4307.420197010978,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 281.615143874257,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 365.38662289833445,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 3718.5511470619035,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 15.05400828645948,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 22.091068714213556,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 2414.903256124642,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 1467.6798523124994,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 29.987000000000002,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.1044377217474066,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.2873927237483667,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 104.1463699587305,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 6.916475713812352,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 207.8037704365389,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 156.6318954374041,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 30.078124999491457,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.971499999999999,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 3.287,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 4.665539889999231,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 47.548911499997374,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1331.5589862858924,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 150.59498181556478,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 260.94150240961034,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 237.55301065312239,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 15.169422583249133,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 31.411251074963328,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 576.4649577999319,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 369.59,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 179.47584154212407,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 28.1615143874257,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 86.99681497579392,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 79.1181095119554,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 83.63337936921933,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 200.8278974019414,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 344.98617944637743,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 163.07553914583326,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 33.31888888888889,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 92.03647681228388,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 175.95328644218205,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 650.9148122420656,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 532.0365933701809,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 51.95094260913473,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 373.81249999999994,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 21.913333333333334,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 31.103599266661536,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 39.62409291666448,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 169.6119765662467,
              "hasRDI": true,
              "daily": 260.94150240961034,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 47.51060213062448,
                  "hasRDI": true,
                  "daily": 237.55301065312239,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 1.19007,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 67.4717142193122,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 37.47353519612363,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 45.508267749747404,
              "hasRDI": true,
              "daily": 15.169422583249133,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 37.65545498100657,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 7.852812768740833,
                  "hasRDI": true,
                  "daily": 31.411251074963328,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 12.415951614999102,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 288.23247889996594,
              "hasRDI": true,
              "daily": 576.4649577999319,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1108.77,
              "hasRDI": true,
              "daily": 369.59,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 4307.420197010978,
              "hasRDI": true,
              "daily": 179.47584154212407,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 281.615143874257,
              "hasRDI": true,
              "daily": 28.1615143874257,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 365.38662289833445,
              "hasRDI": true,
              "daily": 86.99681497579392,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 3718.5511470619035,
              "hasRDI": true,
              "daily": 79.1181095119554,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 15.05400828645948,
              "hasRDI": true,
              "daily": 83.63337936921933,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 22.091068714213556,
              "hasRDI": true,
              "daily": 200.8278974019414,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 2414.903256124642,
              "hasRDI": true,
              "daily": 344.98617944637743,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 1467.6798523124994,
              "hasRDI": true,
              "daily": 163.07553914583326,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 29.987000000000002,
              "hasRDI": true,
              "daily": 33.31888888888889,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.1044377217474066,
              "hasRDI": true,
              "daily": 92.03647681228388,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.2873927237483667,
              "hasRDI": true,
              "daily": 175.95328644218205,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 104.1463699587305,
              "hasRDI": true,
              "daily": 650.9148122420656,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 6.916475713812352,
              "hasRDI": true,
              "daily": 532.0365933701809,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 207.8037704365389,
              "hasRDI": true,
              "daily": 51.95094260913473,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 156.6318954374041,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 30.078124999491457,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.971499999999999,
              "hasRDI": true,
              "daily": 373.81249999999994,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 3.287,
              "hasRDI": true,
              "daily": 21.913333333333334,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 4.665539889999231,
              "hasRDI": true,
              "daily": 31.103599266661536,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 47.548911499997374,
              "hasRDI": true,
              "daily": 39.62409291666448,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1331.5589862858924,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/7ef841f7193d4e8697f5d633443f1de8?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5d990f401b4070e929d9e62b2ec6436a",
          "label": "Basic Deep-Fried Turkey Recipe",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/c13/c13eb878cbbc80e3ad4975a817831756.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c2644daaa7ed336afefbcfd3dc7d378d46f29d3c6f413e0695d662c6754bdb8",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c13/c13eb878cbbc80e3ad4975a817831756-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99943644abf9c85435fb94444b29cdd191b307efab30af19a8f13ed817557046",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c13/c13eb878cbbc80e3ad4975a817831756-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5bb0a81cb725e5710f63e81670b5ee2451580fd8e5f4e837d852ae15fd33e414",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c13/c13eb878cbbc80e3ad4975a817831756.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c2644daaa7ed336afefbcfd3dc7d378d46f29d3c6f413e0695d662c6754bdb8",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/c13/c13eb878cbbc80e3ad4975a817831756-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c141eead35ecc0f7662c43902e772d894f7c52f8817ee26c9cfbc85ed6eb1332",
              "width": 600,
              "height": 600
            }
          },
          "source": "Serious Eats",
          "url": "http://www.seriouseats.com/recipes/2014/11/basic-deep-fried-turkey-recipe.html",
          "shareAs": "http://www.edamam.com/recipe/basic-deep-fried-turkey-recipe-5d990f401b4070e929d9e62b2ec6436a/turkey",
          "yield": 10.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Keto-Friendly",
            "Dairy-Free",
            "Gluten-Free",
            "Wheat-Free",
            "Egg-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "FODMAP-Free",
            "Kosher"
          ],
          "cautions": [],
          "ingredientLines": [
            "1 turkey, about 12 pounds (5.5kg), giblets removed, patted dry",
            "2 to 4 gallons (7.8 to 15L) peanut oil",
            "Kosher salt and freshly ground black pepper"
          ],
          "ingredients": [
            {
              "text": "1 turkey, about 12 pounds (5.5kg), giblets removed, patted dry",
              "quantity": 12.0,
              "measure": "pound",
              "food": "turkey",
              "weight": 5443.10844,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "2 to 4 gallons (7.8 to 15L) peanut oil",
              "quantity": 3.0,
              "measure": "gallon",
              "food": "peanut oil",
              "weight": 10368.0,
              "foodCategory": "Oils",
              "foodId": "food_ackj525b2vo905bisrwjabfanm5t",
              "image": "https://www.edamam.com/food-img/827/82725f6b015e75a059ba2569c768eb68.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "Kosher salt",
              "weight": 94.86665064,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
              "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
            },
            {
              "text": "Kosher salt and freshly ground black pepper",
              "quantity": 0.0,
              "measure": null,
              "food": "black pepper",
              "weight": 47.43332532,
              "foodCategory": "Condiments and sauces",
              "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
              "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
            }
          ],
          "calories": 13090.343275172161,
          "totalCO2Emissions": 157913.51580420832,
          "co2EmissionsClass": "G",
          "totalWeight": 6355.102027462291,
          "totalTime": 60.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "starter"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 13090.343275172161,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1057.321423170792,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 198.67268865557404,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 2.396056335288,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 458.1416434610629,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 325.38271134105366,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 35.76777799416,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 23.7671466882,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 12.00063130596,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 3.0087981767280008,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 839.6881761916801,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 2782.5170345280003,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 14716.458398888355,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 641.6561602711895,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 1047.530224394683,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 9289.722809711864,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 38.18101110109955,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 69.46499116201569,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 7147.1754500976,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 669.7901865444001,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 1.9062393476976,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 7.2349029215159995,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 295.410253428768,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 23.2870268611572,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 278.5861547724,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 278.5861547724,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 47.148205307279994,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 11.5938209772,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 135.50782107234602,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 83.65533236155801,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 2815.5519471392963,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 654.517163758608,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 1626.6483433396802,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 993.3634432778701,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 11.92259266472,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 48.00252522384,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 1679.3763523833602,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 927.5056781760002,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 613.1857666203482,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 64.16561602711896,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 249.41195818921025,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 197.6536768023801,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 212.11672833944192,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 631.4999196546881,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 1021.0250642996573,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 74.42113183826667,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 0.0,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 158.85327897480002,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 556.5309939627692,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 1846.3140839297998,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1791.3097585505539,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 69.6465386931,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1964.5085544699998,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 77.292139848,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 903.3854738156401,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 69.71277696796501,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 1057.321423170792,
              "hasRDI": true,
              "daily": 1626.6483433396802,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 198.67268865557404,
                  "hasRDI": true,
                  "daily": 993.3634432778701,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 2.396056335288,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 458.1416434610629,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 325.38271134105366,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 35.76777799416,
              "hasRDI": true,
              "daily": 11.92259266472,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 23.7671466882,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 12.00063130596,
                  "hasRDI": true,
                  "daily": 48.00252522384,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 3.0087981767280008,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 839.6881761916801,
              "hasRDI": true,
              "daily": 1679.3763523833602,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 2782.5170345280003,
              "hasRDI": true,
              "daily": 927.5056781760002,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 14716.458398888355,
              "hasRDI": true,
              "daily": 613.1857666203482,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 641.6561602711895,
              "hasRDI": true,
              "daily": 64.16561602711896,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 1047.530224394683,
              "hasRDI": true,
              "daily": 249.41195818921025,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 9289.722809711864,
              "hasRDI": true,
              "daily": 197.6536768023801,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 38.18101110109955,
              "hasRDI": true,
              "daily": 212.11672833944192,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 69.46499116201569,
              "hasRDI": true,
              "daily": 631.4999196546881,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 7147.1754500976,
              "hasRDI": true,
              "daily": 1021.0250642996573,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 669.7901865444001,
              "hasRDI": true,
              "daily": 74.42113183826667,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 1.9062393476976,
              "hasRDI": true,
              "daily": 158.85327897480002,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 7.2349029215159995,
              "hasRDI": true,
              "daily": 556.5309939627692,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 295.410253428768,
              "hasRDI": true,
              "daily": 1846.3140839297998,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 23.2870268611572,
              "hasRDI": true,
              "daily": 1791.3097585505539,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 278.5861547724,
              "hasRDI": true,
              "daily": 69.6465386931,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 278.5861547724,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 47.148205307279994,
              "hasRDI": true,
              "daily": 1964.5085544699998,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 11.5938209772,
              "hasRDI": true,
              "daily": 77.292139848,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 135.50782107234602,
              "hasRDI": true,
              "daily": 903.3854738156401,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 83.65533236155801,
              "hasRDI": true,
              "daily": 69.71277696796501,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 2815.5519471392963,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ],
          "tags": [
            "turkey",
            "thanksgiving"
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/5d990f401b4070e929d9e62b2ec6436a?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_81f0d25f91926215aabe057266bf62eb",
          "label": "Quick turkey couscous",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/7a1/7a19db01abb90f44270062f87125c9e6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=021c8f33a8730ce8729dba7d5b33c3dfd3606530773916e448493f2184264d77",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a1/7a19db01abb90f44270062f87125c9e6-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e1defd11bdb0267d98b97ac3547414f2677c2738de7441d796268d431e66526",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a1/7a19db01abb90f44270062f87125c9e6-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c889607d353c24398f6f1f42bcaed8c78b993723d0e143623cc3ec4e8197aa8",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/7a1/7a19db01abb90f44270062f87125c9e6.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=021c8f33a8730ce8729dba7d5b33c3dfd3606530773916e448493f2184264d77",
              "width": 300,
              "height": 300
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/quick-turkey-couscous",
          "shareAs": "http://www.edamam.com/recipe/quick-turkey-couscous-81f0d25f91926215aabe057266bf62eb/turkey",
          "yield": 2.0,
          "dietLabels": [
            "High-Fiber",
            "Low-Fat",
            "Low-Sodium"
          ],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "No oil added",
            "Sulfite-Free",
            "Kosher"
          ],
          "cautions": [
            "Sulfites",
            "FODMAP"
          ],
          "ingredientLines": [
            "130g pack roast turkey slices",
            "80g pack green salad leaves",
            "200g tub fresh Moroccan couscous",
            "100g tub pomegranate seeds"
          ],
          "ingredients": [
            {
              "text": "130g pack roast turkey slices",
              "quantity": 130.0,
              "measure": "gram",
              "food": "turkey",
              "weight": 130.0,
              "foodCategory": "Poultry",
              "foodId": "food_a9m7tjlaizm6qwb80yipna6dvd20",
              "image": "https://www.edamam.com/food-img/45b/45ba5c5df6da8dbc4d19f2bd7d04d345.jpg"
            },
            {
              "text": "80g pack green salad leaves",
              "quantity": 80.0,
              "measure": "gram",
              "food": "salad leaves",
              "weight": 80.0,
              "foodCategory": "vegetables",
              "foodId": "food_bfmb5cybk1o247bmrmry4a6jvp60",
              "image": "https://www.edamam.com/food-img/79e/79e8dd0ee229cbc32171ec362ce93a37.jpg"
            },
            {
              "text": "200g tub fresh Moroccan couscous",
              "quantity": 200.0,
              "measure": "gram",
              "food": "couscous",
              "weight": 200.0,
              "foodCategory": "grains",
              "foodId": "food_ath4mfgbrn9z6gaijwn1wb2pf4oq",
              "image": "https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg"
            },
            {
              "text": "100g tub pomegranate seeds",
              "quantity": 100.0,
              "measure": "gram",
              "food": "pomegranate",
              "weight": 100.0,
              "foodCategory": "fruit",
              "foodId": "food_b43po6ubmv934gb4dfd1kaic8fxa",
              "image": "https://www.edamam.com/food-img/342/342903acce5f863b7683cff3644931a8.jpg"
            }
          ],
          "calories": 1035.8,
          "totalCO2Emissions": 1744.5,
          "co2EmissionsClass": "E",
          "totalWeight": 510.0,
          "totalTime": 4.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 1035.8,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 10.022,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2.2832,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0806,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 2.6595999999999997,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 2.6220000000000003,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 176.314,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 160.634,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 15.68,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 14.742999999999999,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 56.334,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 93.60000000000001,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 175.0,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 98.7,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 143.7,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 1056.8,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 4.354,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 4.508,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 637.9,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 370.90000000000003,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 13.399999999999999,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.513,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.5031000000000001,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 17.4424,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.1329,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 195.9,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 195.9,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 1.586,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.39,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.821,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 98.0,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 265.21000000000004,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 51.79,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 15.418461538461539,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 11.416,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 58.771333333333324,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 62.72,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 112.668,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 31.2,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 7.291666666666667,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 9.87,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 34.21428571428571,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 22.485106382978724,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 24.18888888888889,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 40.981818181818184,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 91.12857142857143,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 41.21111111111111,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 14.888888888888886,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 42.75000000000001,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 38.7,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 109.015,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 87.14615384615385,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 48.975,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 66.08333333333333,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 2.6,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.473333333333333,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 81.66666666666667,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 10.022,
              "hasRDI": true,
              "daily": 15.418461538461539,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 2.2832,
                  "hasRDI": true,
                  "daily": 11.416,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0806,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 2.6595999999999997,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 2.6220000000000003,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 176.314,
              "hasRDI": true,
              "daily": 58.771333333333324,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 160.634,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 15.68,
                  "hasRDI": true,
                  "daily": 62.72,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 14.742999999999999,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 56.334,
              "hasRDI": true,
              "daily": 112.668,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 93.60000000000001,
              "hasRDI": true,
              "daily": 31.2,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 175.0,
              "hasRDI": true,
              "daily": 7.291666666666667,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 98.7,
              "hasRDI": true,
              "daily": 9.87,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 143.7,
              "hasRDI": true,
              "daily": 34.21428571428571,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 1056.8,
              "hasRDI": true,
              "daily": 22.485106382978724,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 4.354,
              "hasRDI": true,
              "daily": 24.18888888888889,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 4.508,
              "hasRDI": true,
              "daily": 40.981818181818184,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 637.9,
              "hasRDI": true,
              "daily": 91.12857142857143,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 370.90000000000003,
              "hasRDI": true,
              "daily": 41.21111111111111,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 13.399999999999999,
              "hasRDI": true,
              "daily": 14.888888888888886,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.513,
              "hasRDI": true,
              "daily": 42.75000000000001,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.5031000000000001,
              "hasRDI": true,
              "daily": 38.7,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 17.4424,
              "hasRDI": true,
              "daily": 109.015,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.1329,
              "hasRDI": true,
              "daily": 87.14615384615385,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 195.9,
              "hasRDI": true,
              "daily": 48.975,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 195.9,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 1.586,
              "hasRDI": true,
              "daily": 66.08333333333333,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.39,
              "hasRDI": true,
              "daily": 2.6,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.821,
              "hasRDI": true,
              "daily": 5.473333333333333,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 98.0,
              "hasRDI": true,
              "daily": 81.66666666666667,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 265.21000000000004,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/81f0d25f91926215aabe057266bf62eb?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d0893e0afc67ab902365ce1851c7c029",
          "label": "Easy turkey gravy",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/1f5/1f5eae6ef913b9eaa68af3989fe6e675.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d12fba29cbb5fdbb3b13a0ffeb544f77310509615cf17c7ca6e8a2d8ce30b8d6",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f5/1f5eae6ef913b9eaa68af3989fe6e675-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a473bd9aac41a95e76e163163a2eaad934ccc0be686c52bd74f8f82217cfad9e",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f5/1f5eae6ef913b9eaa68af3989fe6e675-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=45e89b0a532eeb44044a4c3baeaf11d80d46eb55c8ba79368bf9f85f816d332c",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f5/1f5eae6ef913b9eaa68af3989fe6e675.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d12fba29cbb5fdbb3b13a0ffeb544f77310509615cf17c7ca6e8a2d8ce30b8d6",
              "width": 300,
              "height": 300
            },
            "LARGE": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/1f5/1f5eae6ef913b9eaa68af3989fe6e675-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a7212e5a2b673be7ab4ca321de4c3fc5844073d0c54ab56f7270ab44f4111e77",
              "width": 600,
              "height": 600
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/easy-turkey-gravy",
          "shareAs": "http://www.edamam.com/recipe/easy-turkey-gravy-d0893e0afc67ab902365ce1851c7c029/turkey",
          "yield": 8.0,
          "dietLabels": [
            "Low-Sodium"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Low Potassium",
            "Kidney-Friendly",
            "Keto-Friendly",
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "No oil added",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 tbsp plain flour",
            "700ml turkey stock",
            "2 tbsp marsala (optional)"
          ],
          "ingredients": [
            {
              "text": "2 tbsp plain flour",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 15.624999999735829,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "700ml turkey stock",
              "quantity": 700.0,
              "measure": "milliliter",
              "food": "turkey stock",
              "weight": 710.0944767387031,
              "foodCategory": "canned soup",
              "foodId": "food_br4d1lpbopycuzbgrfdedanv8qv6",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "2 tbsp marsala (optional)",
              "quantity": 2.0,
              "measure": "tablespoon",
              "food": "marsala",
              "weight": 29.49999999950124,
              "foodCategory": "wines",
              "foodId": "food_bw2ziyiaoqtjc8abha34haszk8b9",
              "image": "https://www.edamam.com/food-img/ea6/ea6e045b01daf204a1b5b9badcc31af3.jpg"
            }
          ],
          "calories": 357.34901162421346,
          "totalCO2Emissions": 7086.5021192456825,
          "co2EmissionsClass": "E",
          "totalWeight": 755.2194767379401,
          "totalTime": 10.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 357.34901162421346,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 8.674258720861847,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 2.3036220203308275,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 4.146343604619021,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 1.5770324854523465,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 40.439710028616304,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 40.01783502862344,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 0.4218749999928675,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 11.583230232465358,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 19.56275581378711,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 21.30283430216109,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1018.4026017362952,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 26.006584302081567,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 34.496279069445116,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 789.4579505748967,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 1.7448109011469886,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 1.124157267431986,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 211.25550871911966,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 7.1009447673870305,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.4201889534774061,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.27259306685813933,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 0.6151403052277021,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 11.477640232467143,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 0.44003263081049265,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 39.567223836866475,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 39.567223836866475,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.22240334302145243,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.4670639534766137,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 677.9539825526912,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 17.867450581210672,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 13.345013416710533,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 11.518110101654138,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 13.479903342872102,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 1.68749999997147,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 39.12551162757422,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 7.1009447673870305,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 42.4334417390123,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 2.600658430208157,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 8.213399778439314,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 16.796977671806314,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 9.693393895261046,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 10.219611522108963,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 30.179358388445664,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 0.7889938630430035,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 1.577987726086007,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 22.716088904844945,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 47.31848501751555,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 71.73525145291964,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 33.84866390849943,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 9.891805959216619,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 1.4826889534763494,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 1.2225532945638447,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 8.674258720861847,
              "hasRDI": true,
              "daily": 13.345013416710533,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 2.3036220203308275,
                  "hasRDI": true,
                  "daily": 11.518110101654138,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 4.146343604619021,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 1.5770324854523465,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 40.439710028616304,
              "hasRDI": true,
              "daily": 13.479903342872102,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 40.01783502862344,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 0.4218749999928675,
                  "hasRDI": true,
                  "daily": 1.68749999997147,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 11.583230232465358,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 19.56275581378711,
              "hasRDI": true,
              "daily": 39.12551162757422,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 21.30283430216109,
              "hasRDI": true,
              "daily": 7.1009447673870305,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1018.4026017362952,
              "hasRDI": true,
              "daily": 42.4334417390123,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 26.006584302081567,
              "hasRDI": true,
              "daily": 2.600658430208157,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 34.496279069445116,
              "hasRDI": true,
              "daily": 8.213399778439314,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 789.4579505748967,
              "hasRDI": true,
              "daily": 16.796977671806314,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 1.7448109011469886,
              "hasRDI": true,
              "daily": 9.693393895261046,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 1.124157267431986,
              "hasRDI": true,
              "daily": 10.219611522108963,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 211.25550871911966,
              "hasRDI": true,
              "daily": 30.179358388445664,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 7.1009447673870305,
              "hasRDI": true,
              "daily": 0.7889938630430035,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 1.4201889534774061,
              "hasRDI": true,
              "daily": 1.577987726086007,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.27259306685813933,
              "hasRDI": true,
              "daily": 22.716088904844945,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 0.6151403052277021,
              "hasRDI": true,
              "daily": 47.31848501751555,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 11.477640232467143,
              "hasRDI": true,
              "daily": 71.73525145291964,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 0.44003263081049265,
              "hasRDI": true,
              "daily": 33.84866390849943,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 39.567223836866475,
              "hasRDI": true,
              "daily": 9.891805959216619,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 39.567223836866475,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.22240334302145243,
              "hasRDI": true,
              "daily": 1.4826889534763494,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 1.4670639534766137,
              "hasRDI": true,
              "daily": 1.2225532945638447,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 677.9539825526912,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/d0893e0afc67ab902365ce1851c7c029?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1b6db37170674072ab0d9be273bdf5af",
          "label": "Turkey crown kiev",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/abf/abf5430d52f8e05f9e03837a6e001907.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3ba975ee3776466c70467b35af416ed351b00b63017bb4f670f22e4472eff163",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/abf/abf5430d52f8e05f9e03837a6e001907-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f4301052866e27a36ae1d70f06b85379e854c4f39b88d67432e852e98c7d166c",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/abf/abf5430d52f8e05f9e03837a6e001907-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=38fc40341887165b53f17628a9af487332b36ef4ad85c5ed8320bc4ba2666ac2",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/abf/abf5430d52f8e05f9e03837a6e001907.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3ba975ee3776466c70467b35af416ed351b00b63017bb4f670f22e4472eff163",
              "width": 300,
              "height": 300
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/turkey-crown-kiev",
          "shareAs": "http://www.edamam.com/recipe/turkey-crown-kiev-1b6db37170674072ab0d9be273bdf5af/turkey",
          "yield": 6.0,
          "dietLabels": [
            "Low-Carb"
          ],
          "healthLabels": [
            "Sugar-Conscious",
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "Alcohol-Free",
            "Sulfite-Free",
            "Kosher",
            "Immuno-Supportive"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2kg turkey crown",
            "200g ciabatta , baguette or sourdough, preferably stale",
            "garlic bulbs, lemons and shallots, halved, plus fresh herbs, to serve (optional)"
          ],
          "ingredients": [
            {
              "text": "2kg turkey crown",
              "quantity": 2.0,
              "measure": "kilogram",
              "food": "turkey crown",
              "weight": 2000.0,
              "foodCategory": "Poultry",
              "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
              "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
            },
            {
              "text": "200g ciabatta , baguette or sourdough, preferably stale",
              "quantity": 200.0,
              "measure": "gram",
              "food": "ciabatta",
              "weight": 200.0,
              "foodCategory": "bread, rolls and tortillas",
              "foodId": "food_a2r69tsbu8c2nsbzxw0s1avxcc6k",
              "image": "https://www.edamam.com/food-img/19f/19fc0706f04d44f62fc79ab4d7a07d7b.jpg"
            },
            {
              "text": "garlic bulbs, lemons and shallots, halved, plus fresh herbs, to serve (optional)",
              "quantity": 0.0,
              "measure": null,
              "food": "garlic",
              "weight": 6.6000000000000005,
              "foodCategory": "vegetables",
              "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
              "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
            },
            {
              "text": "garlic bulbs, lemons and shallots, halved, plus fresh herbs, to serve (optional)",
              "quantity": 0.0,
              "measure": null,
              "food": "lemons",
              "weight": 0.0,
              "foodCategory": "fruit",
              "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
              "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
            },
            {
              "text": "garlic bulbs, lemons and shallots, halved, plus fresh herbs, to serve (optional)",
              "quantity": 0.0,
              "measure": null,
              "food": "shallots",
              "weight": 22.0,
              "foodCategory": "vegetables",
              "foodId": "food_bu2ver7a5f52dfap8q9f0bn085qb",
              "image": "https://www.edamam.com/food-img/d23/d23e3be21df05e9e16c05eadb12341e7.jpeg"
            },
            {
              "text": "garlic bulbs, lemons and shallots, halved, plus fresh herbs, to serve (optional)",
              "quantity": 0.0,
              "measure": null,
              "food": "fresh herbs",
              "weight": 22.0,
              "foodCategory": "vegetables",
              "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
              "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
            }
          ],
          "calories": 3691.594,
          "totalCO2Emissions": 20079.96,
          "co2EmissionsClass": "G",
          "totalWeight": 2250.6,
          "totalTime": 120.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "lunch/dinner"
          ],
          "dishType": [
            "main course"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 3691.594,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 146.08879999999996,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 39.326654,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.034,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 54.254706,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 35.87229399999999,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 103.4732,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 97.7046,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 5.7686,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 11.364400000000002,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 458.60316,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 1300.0,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 2432.082,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 520.446,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 549.27,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 5969.826,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 32.6402,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 33.379960000000004,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 3946.058,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 132.62,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 33.0792,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 2.3693199999999996,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 2.97522,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 113.45839999999998,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 9.98554,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 445.11800000000005,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 385.11800000000005,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 36.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 8.4,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.75908,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 367.08820000000003,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1515.7176000000002,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 184.5797,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 224.75199999999992,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 196.63326999999998,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 34.49106666666667,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 23.0744,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 917.20632,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 433.3333333333333,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 101.33675,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 52.0446,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 130.77857142857144,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 127.0175744680851,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 181.33444444444444,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 303.4541818181819,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 563.7225714285714,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 14.735555555555555,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 36.754666666666665,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 197.4433333333333,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 228.86307692307696,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 709.1149999999999,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 768.1184615384616,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 111.27950000000001,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 350.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 5.060533333333334,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 305.90683333333334,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 146.08879999999996,
              "hasRDI": true,
              "daily": 224.75199999999992,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 39.326654,
                  "hasRDI": true,
                  "daily": 196.63326999999998,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.034,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 54.254706,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 35.87229399999999,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 103.4732,
              "hasRDI": true,
              "daily": 34.49106666666667,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 97.7046,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 5.7686,
                  "hasRDI": true,
                  "daily": 23.0744,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 11.364400000000002,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 458.60316,
              "hasRDI": true,
              "daily": 917.20632,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 1300.0,
              "hasRDI": true,
              "daily": 433.3333333333333,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 2432.082,
              "hasRDI": true,
              "daily": 101.33675,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 520.446,
              "hasRDI": true,
              "daily": 52.0446,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 549.27,
              "hasRDI": true,
              "daily": 130.77857142857144,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 5969.826,
              "hasRDI": true,
              "daily": 127.0175744680851,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 32.6402,
              "hasRDI": true,
              "daily": 181.33444444444444,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 33.379960000000004,
              "hasRDI": true,
              "daily": 303.4541818181819,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 3946.058,
              "hasRDI": true,
              "daily": 563.7225714285714,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 132.62,
              "hasRDI": true,
              "daily": 14.735555555555555,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 33.0792,
              "hasRDI": true,
              "daily": 36.754666666666665,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 2.3693199999999996,
              "hasRDI": true,
              "daily": 197.4433333333333,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 2.97522,
              "hasRDI": true,
              "daily": 228.86307692307696,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 113.45839999999998,
              "hasRDI": true,
              "daily": 709.1149999999999,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 9.98554,
              "hasRDI": true,
              "daily": 768.1184615384616,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 445.11800000000005,
              "hasRDI": true,
              "daily": 111.27950000000001,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 385.11800000000005,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 36.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 8.4,
              "hasRDI": true,
              "daily": 350.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.75908,
              "hasRDI": true,
              "daily": 5.060533333333334,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 367.08820000000003,
              "hasRDI": true,
              "daily": 305.90683333333334,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1515.7176000000002,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/1b6db37170674072ab0d9be273bdf5af?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      },
      {
        "recipe": {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_26ce45124bb04a7683a4fda0e288b13b",
          "label": "Proper turkey gravy",
          "image": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65ab2bbf544725781a6c62bdc2477d9d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0952b5ed473d8cd567b288b8a8507a2e17325db62f0e5646251363fcb41e4793",
          "images": {
            "THUMBNAIL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65ab2bbf544725781a6c62bdc2477d9d-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4bc897c2b7b921c00f12fba94f1d60156c84e5c86c9165ecb7604aed541b55a5",
              "width": 100,
              "height": 100
            },
            "SMALL": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65ab2bbf544725781a6c62bdc2477d9d-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=67807d4bfab45a053f2f4365bf4687582918ecc03b22530b4dc8699bbe3ca12c",
              "width": 200,
              "height": 200
            },
            "REGULAR": {
              "url": "https://edamam-product-images.s3.amazonaws.com/web-img/65a/65ab2bbf544725781a6c62bdc2477d9d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLWVhc3QtMSJIMEYCIQD7eRLscHS8adM9tbL9YRFaCcj3FBOiLaOGn2K6gyZ9VAIhAJTw9fsCrJT3UsjRvWZxdcCqQJGu1nUuTgnW6YY8so0rKrkFCE0QABoMMTg3MDE3MTUwOTg2Igxa40p7BmBARxxDO10qlgVJl51PvMdBmNvdP4yTK8sTfaw1k1uugzoqH74jIcL6gGRHuIV4h6WwRICxUSCY%2B31GTpTd8%2Br6svpaPLQXlTOZjw78gqlMSlXYxdKxpFlBhst2eWBZN%2Fmjsy1vaWWBerlW%2FvGo8FxUm01wMcJDDubH%2FBlS7yaG%2B4AUgzEXzu9%2FBWeEYfDXdYxoOUzNd4TFgNRn64SuNRB7qWNfuJRc2YzfVKXmpsJ1LXb2Vws%2FvE8U3b7D%2FOTuFwMpBrPMroy2gqHV1iFmGYDyc8rT0%2FzbySlRYjRdNoVd12NYPsL00W2iZZb3qHOQQ%2BWLBlA4bpilSU0gNNau9EawoEHGd9EIXWiGM257cn2W1W0Gyvf6uB5mZnbhFsEvQ0M4mQFXoPlV6LStmmBdntgjt48rmgabDbWtYvf9ljyI6FJg%2BXItZi5Y9%2Brbau03HjtYp9D4D88aYPNaiTTb2hORmqt8IWg2tDq44mXPxd7J6EEwi9zOTIFNxd0FA0fEKtSnYXftvY9dKIsgxmrpl9474CWe8NxIAPw9T1DoLaesgqz%2ByuTbJ7W2m8UY3qkeS7elyrr9tAhxIikFauzxnHvyrt%2FxXtwWirl18Gjqr8nCGSBpnE3V%2FHTfHnml2GmKy6KbgB5HsJG5b9457%2FBDu7Y%2BumhZwqTrwwVkebCHNT2zYDdfIOswbn7gu%2FwY95y5Z1JxotO%2BXv8xqwWWWCxkuikmsgUh1JQHtBDyJYVqzt9sJUckTd43fA%2F%2Bx94U%2FQWPRsWiO4ZrOJoaNWsszTXSW5rlV6S4JtbLWcScZ5ixKCxHQxpytCGXtLemqbzFJqmIFwHrC%2BQ2HHSirjYl9kG77OQQ1139gjzW2%2B0pHSQ7a0vFmSu%2BRtYWtLkWH68De%2B2tvzDmxI62BjqwAVX1yK1U2K4OzUp9mG9RpBnxorIjfwkVgUm9NH9bVuP4PDviQUGgYCmjoTwqs6WUdHcjAFa2dyGkVCWf9Ma58SAorzCtvuQHKdgPPNJX%2BAIDaBoQJAN2x2L7LQdrRJtXl7%2Bvlofaij5silgMj28XHk7H0JH3VN6twdZUlqMsc6rbtuKS4icxvOPOhmHF7JZGIyAq5lS2jJ8YrS4xaGLlQ%2B4ggo9jFmwf7J1MTF3VmG66&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240819T212033Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFBSKOA2GG%2F20240819%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=0952b5ed473d8cd567b288b8a8507a2e17325db62f0e5646251363fcb41e4793",
              "width": 300,
              "height": 300
            }
          },
          "source": "BBC Good Food",
          "url": "https://www.bbcgoodfood.com/recipes/proper-turkey-gravy",
          "shareAs": "http://www.edamam.com/recipe/proper-turkey-gravy-26ce45124bb04a7683a4fda0e288b13b/turkey",
          "yield": 8.0,
          "dietLabels": [],
          "healthLabels": [
            "Mediterranean",
            "Dairy-Free",
            "Egg-Free",
            "Peanut-Free",
            "Tree-Nut-Free",
            "Soy-Free",
            "Fish-Free",
            "Shellfish-Free",
            "Pork-Free",
            "Red-Meat-Free",
            "Crustacean-Free",
            "Celery-Free",
            "Mustard-Free",
            "Sesame-Free",
            "Lupine-Free",
            "Mollusk-Free",
            "No oil added",
            "Kosher"
          ],
          "cautions": [
            "Sulfites"
          ],
          "ingredientLines": [
            "2 chopped onions",
            "1 large carrot, chopped",
            "turkey neck (optional)",
            "1.3l turkey or chicken stock",
            "3 tbsp plain flour",
            "5 tbsp white wine or water"
          ],
          "ingredients": [
            {
              "text": "2 chopped onions",
              "quantity": 2.0,
              "measure": "<unit>",
              "food": "onions",
              "weight": 250.0,
              "foodCategory": "vegetables",
              "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
              "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
            },
            {
              "text": "1 large carrot, chopped",
              "quantity": 1.0,
              "measure": "<unit>",
              "food": "carrot",
              "weight": 72.0,
              "foodCategory": "vegetables",
              "foodId": "food_ai215e5b85pdh5ajd4aafa3w2zm8",
              "image": "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg"
            },
            {
              "text": "turkey neck (optional)",
              "quantity": 0.0,
              "measure": null,
              "food": "turkey neck",
              "weight": 0.0,
              "foodCategory": "Poultry",
              "foodId": "food_ae6sr37a7i6dv2b3hd2lpb116hg1",
              "image": null
            },
            {
              "text": "1.3l turkey or chicken stock",
              "quantity": 1.2999999523162842,
              "measure": "liter",
              "food": "chicken stock",
              "weight": 1318.7468370005295,
              "foodCategory": "canned soup",
              "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
              "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
            },
            {
              "text": "3 tbsp plain flour",
              "quantity": 3.0,
              "measure": "tablespoon",
              "food": "flour",
              "weight": 23.437499999603745,
              "foodCategory": "grains",
              "foodId": "food_ahebfs0a985an4aubqaebbipra58",
              "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
            },
            {
              "text": "5 tbsp white wine or water",
              "quantity": 5.0,
              "measure": "tablespoon",
              "food": "white wine",
              "weight": 73.49999999875733,
              "foodCategory": "wines",
              "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
              "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
            }
          ],
          "calories": 749.8513613177292,
          "totalCO2Emissions": 13341.682095580354,
          "co2EmissionsClass": "F",
          "totalWeight": 1737.6843369988906,
          "totalTime": 75.0,
          "cuisineType": [
            "american"
          ],
          "mealType": [
            "snack"
          ],
          "dishType": [
            "condiments and sauces"
          ],
          "totalNutrients": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 749.8513613177292,
              "unit": "kcal"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 16.47744954400247,
              "unit": "g"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 4.397545471771086,
              "unit": "g"
            },
            "FATRN": {
              "label": "Trans",
              "quantity": 0.0,
              "unit": "g"
            },
            "FAMS": {
              "label": "Monounsaturated",
              "quantity": 7.736637216342737,
              "unit": "g"
            },
            "FAPU": {
              "label": "Polyunsaturated",
              "quantity": 3.0216676378094913,
              "unit": "g"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 96.59317584578403,
              "unit": "g"
            },
            "CHOCDF.net": {
              "label": "Carbohydrates (net)",
              "quantity": 89.69436334579473,
              "unit": "g"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 6.898812499989301,
              "unit": "g"
            },
            "SUGAR": {
              "label": "Sugars",
              "quantity": 35.617881274595376,
              "unit": "g"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 39.11753279237166,
              "unit": "g"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 39.56240511001589,
              "unit": "mg"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 1949.6317269106871,
              "unit": "mg"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 130.9530301098446,
              "unit": "mg"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 98.89612347980975,
              "unit": "mg"
            },
            "K": {
              "label": "Potassium",
              "quantity": 2057.3473038492493,
              "unit": "mg"
            },
            "FE": {
              "label": "Iron",
              "quantity": 3.9830371076931206,
              "unit": "mg"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 2.6963080717964765,
              "unit": "mg"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 492.3041459894913,
              "unit": "mg"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 614.3874683700052,
              "unit": "µg"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 25.38549367400106,
              "unit": "mg"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 0.6558813929496476,
              "unit": "mg"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 1.250594811450105,
              "unit": "mg"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 22.20630877460207,
              "unit": "mg"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 1.2508580705695271,
              "unit": "mg"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 133.946091849911,
              "unit": "µg"
            },
            "FOLFD": {
              "label": "Folate (food)",
              "quantity": 133.946091849911,
              "unit": "µg"
            },
            "FOLAC": {
              "label": "Folic acid",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "µg"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "µg"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 0.9348865510999211,
              "unit": "mg"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 13.505806173994898,
              "unit": "µg"
            },
            "WATER": {
              "label": "Water",
              "quantity": 1568.8711462133613,
              "unit": "g"
            }
          },
          "totalDaily": {
            "ENERC_KCAL": {
              "label": "Energy",
              "quantity": 37.49256806588646,
              "unit": "%"
            },
            "FAT": {
              "label": "Fat",
              "quantity": 25.34992237538842,
              "unit": "%"
            },
            "FASAT": {
              "label": "Saturated",
              "quantity": 21.98772735885543,
              "unit": "%"
            },
            "CHOCDF": {
              "label": "Carbs",
              "quantity": 32.19772528192801,
              "unit": "%"
            },
            "FIBTG": {
              "label": "Fiber",
              "quantity": 27.595249999957204,
              "unit": "%"
            },
            "PROCNT": {
              "label": "Protein",
              "quantity": 78.23506558474332,
              "unit": "%"
            },
            "CHOLE": {
              "label": "Cholesterol",
              "quantity": 13.187468370005297,
              "unit": "%"
            },
            "NA": {
              "label": "Sodium",
              "quantity": 81.23465528794529,
              "unit": "%"
            },
            "CA": {
              "label": "Calcium",
              "quantity": 13.09530301098446,
              "unit": "%"
            },
            "MG": {
              "label": "Magnesium",
              "quantity": 23.546696066621365,
              "unit": "%"
            },
            "K": {
              "label": "Potassium",
              "quantity": 43.77334689040956,
              "unit": "%"
            },
            "FE": {
              "label": "Iron",
              "quantity": 22.127983931628446,
              "unit": "%"
            },
            "ZN": {
              "label": "Zinc",
              "quantity": 24.51189156178615,
              "unit": "%"
            },
            "P": {
              "label": "Phosphorus",
              "quantity": 70.32916371278448,
              "unit": "%"
            },
            "VITA_RAE": {
              "label": "Vitamin A",
              "quantity": 68.26527426333391,
              "unit": "%"
            },
            "VITC": {
              "label": "Vitamin C",
              "quantity": 28.206104082223405,
              "unit": "%"
            },
            "THIA": {
              "label": "Thiamin (B1)",
              "quantity": 54.65678274580397,
              "unit": "%"
            },
            "RIBF": {
              "label": "Riboflavin (B2)",
              "quantity": 96.19960088077731,
              "unit": "%"
            },
            "NIA": {
              "label": "Niacin (B3)",
              "quantity": 138.78942984126294,
              "unit": "%"
            },
            "VITB6A": {
              "label": "Vitamin B6",
              "quantity": 96.21985158227132,
              "unit": "%"
            },
            "FOLDFE": {
              "label": "Folate equivalent (total)",
              "quantity": 33.48652296247775,
              "unit": "%"
            },
            "VITB12": {
              "label": "Vitamin B12",
              "quantity": 0.0,
              "unit": "%"
            },
            "VITD": {
              "label": "Vitamin D",
              "quantity": 0.0,
              "unit": "%"
            },
            "TOCPHA": {
              "label": "Vitamin E",
              "quantity": 6.232577007332807,
              "unit": "%"
            },
            "VITK1": {
              "label": "Vitamin K",
              "quantity": 11.25483847832908,
              "unit": "%"
            }
          },
          "digest": [
            {
              "label": "Fat",
              "tag": "FAT",
              "schemaOrgTag": "fatContent",
              "total": 16.47744954400247,
              "hasRDI": true,
              "daily": 25.34992237538842,
              "unit": "g",
              "sub": [
                {
                  "label": "Saturated",
                  "tag": "FASAT",
                  "schemaOrgTag": "saturatedFatContent",
                  "total": 4.397545471771086,
                  "hasRDI": true,
                  "daily": 21.98772735885543,
                  "unit": "g"
                },
                {
                  "label": "Trans",
                  "tag": "FATRN",
                  "schemaOrgTag": "transFatContent",
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Monounsaturated",
                  "tag": "FAMS",
                  "schemaOrgTag": null,
                  "total": 7.736637216342737,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Polyunsaturated",
                  "tag": "FAPU",
                  "schemaOrgTag": null,
                  "total": 3.0216676378094913,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Carbs",
              "tag": "CHOCDF",
              "schemaOrgTag": "carbohydrateContent",
              "total": 96.59317584578403,
              "hasRDI": true,
              "daily": 32.19772528192801,
              "unit": "g",
              "sub": [
                {
                  "label": "Carbs (net)",
                  "tag": "CHOCDF.net",
                  "schemaOrgTag": null,
                  "total": 89.69436334579473,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Fiber",
                  "tag": "FIBTG",
                  "schemaOrgTag": "fiberContent",
                  "total": 6.898812499989301,
                  "hasRDI": true,
                  "daily": 27.595249999957204,
                  "unit": "g"
                },
                {
                  "label": "Sugars",
                  "tag": "SUGAR",
                  "schemaOrgTag": "sugarContent",
                  "total": 35.617881274595376,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                },
                {
                  "label": "Sugars, added",
                  "tag": "SUGAR.added",
                  "schemaOrgTag": null,
                  "total": 0.0,
                  "hasRDI": false,
                  "daily": 0.0,
                  "unit": "g"
                }
              ]
            },
            {
              "label": "Protein",
              "tag": "PROCNT",
              "schemaOrgTag": "proteinContent",
              "total": 39.11753279237166,
              "hasRDI": true,
              "daily": 78.23506558474332,
              "unit": "g"
            },
            {
              "label": "Cholesterol",
              "tag": "CHOLE",
              "schemaOrgTag": "cholesterolContent",
              "total": 39.56240511001589,
              "hasRDI": true,
              "daily": 13.187468370005297,
              "unit": "mg"
            },
            {
              "label": "Sodium",
              "tag": "NA",
              "schemaOrgTag": "sodiumContent",
              "total": 1949.6317269106871,
              "hasRDI": true,
              "daily": 81.23465528794529,
              "unit": "mg"
            },
            {
              "label": "Calcium",
              "tag": "CA",
              "schemaOrgTag": null,
              "total": 130.9530301098446,
              "hasRDI": true,
              "daily": 13.09530301098446,
              "unit": "mg"
            },
            {
              "label": "Magnesium",
              "tag": "MG",
              "schemaOrgTag": null,
              "total": 98.89612347980975,
              "hasRDI": true,
              "daily": 23.546696066621365,
              "unit": "mg"
            },
            {
              "label": "Potassium",
              "tag": "K",
              "schemaOrgTag": null,
              "total": 2057.3473038492493,
              "hasRDI": true,
              "daily": 43.77334689040956,
              "unit": "mg"
            },
            {
              "label": "Iron",
              "tag": "FE",
              "schemaOrgTag": null,
              "total": 3.9830371076931206,
              "hasRDI": true,
              "daily": 22.127983931628446,
              "unit": "mg"
            },
            {
              "label": "Zinc",
              "tag": "ZN",
              "schemaOrgTag": null,
              "total": 2.6963080717964765,
              "hasRDI": true,
              "daily": 24.51189156178615,
              "unit": "mg"
            },
            {
              "label": "Phosphorus",
              "tag": "P",
              "schemaOrgTag": null,
              "total": 492.3041459894913,
              "hasRDI": true,
              "daily": 70.32916371278448,
              "unit": "mg"
            },
            {
              "label": "Vitamin A",
              "tag": "VITA_RAE",
              "schemaOrgTag": null,
              "total": 614.3874683700052,
              "hasRDI": true,
              "daily": 68.26527426333391,
              "unit": "µg"
            },
            {
              "label": "Vitamin C",
              "tag": "VITC",
              "schemaOrgTag": null,
              "total": 25.38549367400106,
              "hasRDI": true,
              "daily": 28.206104082223405,
              "unit": "mg"
            },
            {
              "label": "Thiamin (B1)",
              "tag": "THIA",
              "schemaOrgTag": null,
              "total": 0.6558813929496476,
              "hasRDI": true,
              "daily": 54.65678274580397,
              "unit": "mg"
            },
            {
              "label": "Riboflavin (B2)",
              "tag": "RIBF",
              "schemaOrgTag": null,
              "total": 1.250594811450105,
              "hasRDI": true,
              "daily": 96.19960088077731,
              "unit": "mg"
            },
            {
              "label": "Niacin (B3)",
              "tag": "NIA",
              "schemaOrgTag": null,
              "total": 22.20630877460207,
              "hasRDI": true,
              "daily": 138.78942984126294,
              "unit": "mg"
            },
            {
              "label": "Vitamin B6",
              "tag": "VITB6A",
              "schemaOrgTag": null,
              "total": 1.2508580705695271,
              "hasRDI": true,
              "daily": 96.21985158227132,
              "unit": "mg"
            },
            {
              "label": "Folate equivalent (total)",
              "tag": "FOLDFE",
              "schemaOrgTag": null,
              "total": 133.946091849911,
              "hasRDI": true,
              "daily": 33.48652296247775,
              "unit": "µg"
            },
            {
              "label": "Folate (food)",
              "tag": "FOLFD",
              "schemaOrgTag": null,
              "total": 133.946091849911,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Folic acid",
              "tag": "FOLAC",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin B12",
              "tag": "VITB12",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin D",
              "tag": "VITD",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": true,
              "daily": 0.0,
              "unit": "µg"
            },
            {
              "label": "Vitamin E",
              "tag": "TOCPHA",
              "schemaOrgTag": null,
              "total": 0.9348865510999211,
              "hasRDI": true,
              "daily": 6.232577007332807,
              "unit": "mg"
            },
            {
              "label": "Vitamin K",
              "tag": "VITK1",
              "schemaOrgTag": null,
              "total": 13.505806173994898,
              "hasRDI": true,
              "daily": 11.25483847832908,
              "unit": "µg"
            },
            {
              "label": "Sugar alcohols",
              "tag": "Sugar.alcohol",
              "schemaOrgTag": null,
              "total": 0.0,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            },
            {
              "label": "Water",
              "tag": "WATER",
              "schemaOrgTag": null,
              "total": 1568.8711462133613,
              "hasRDI": false,
              "daily": 0.0,
              "unit": "g"
            }
          ]
        },
        "_links": {
          "self": {
            "title": "Self",
            "href": "https://api.edamam.com/api/recipes/v2/26ce45124bb04a7683a4fda0e288b13b?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1"
          }
        }
      }
    ]
  }
];

export default foundRecipes;