import React, {useEffect} from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { fetchCalendarMeals } from '../../services/calendarService';
import { findRecipeByUri } from "../../services/recipeService";
import { set } from 'date-fns';


export default function NutriChart() {
  const [events, setEvents] = React.useState([]);
  const [eventRecipes, setEventRecipes] = React.useState([]);

  let chartRecipe = {
    "recipe": {
        "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_14cf40f94311490abeaad8b1df95f12e",
        "label": "Basic Turkey Gravy Recipe",
        "image": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDBFPs%2FlFNPV6PsD3mEOtmC2%2BXVzxsV6NAMYF0Y2dFKRwIgOab86RdXjcPh%2BPjcpMoEB6aT9OuLi34zoLQGQLdsSWsquAUIFxAAGgwxODcwMTcxNTA5ODYiDO73PzPpbazb01HI6iqVBbDNlV%2FZNvenFFICjTcmmY79Dj6Lg8u7Hg7RKtG6OfVZdQE3M1lYD%2B05KNdBbv7IBPKEhbm7p8XYPj1yhOJEWKI76uxCstPayTOeRuCwEB5rAledX03lKKtcoZa4eK5Sp4G0uaXMNK0f8dfKGU6BXXhoHT4iAlBP2VwJtof%2BaCUIaTcjPTWSg%2FFy7ZhZNNuXMNZrdRMx7U%2F%2BLDSEmluWdWu4SwaPN7gLYeAn6spkBZD%2Br8KI%2FR9pm1yZ0XTzUzNAT%2BlkmbDddiCApLL8vWDtJ95SSRu2DIjwqktA1jnuWxUGLwh3o8gHhy4aqSMU3utqKTEb6655%2B9whrD9EqSUk0npyTGiLxeV513yp3GmfIiH%2Fi2drCqGa%2FxHFDyPx0cXZ18zJgtRf7mOJTY2S53Fa31dVN6As72HYwhkwLClovezNdlIK1DizeqMnqR6oCvFIKGZcHBEY3zSX1MJkNIVUMSuUusiq53RPfOOWniHWAcSK0w%2FjVwEKNWITaRWD%2FaqMfu3f3TnPZzOz1jzwcwLTSL0bYjVKn1S2Y0UB5KJuoVHMd0rG57l5MLSN41oOf14ts7mOqWnQDb8XipPdSZ2gtE%2BCWwXUs2Nb6i4eJOn1XC2ZNWsRBH3MjdYVTs1pthlT8o2111EupRQOkU0i021DsmDP205CkZnrty2ObEgFVARy9nbCgTEGLoH7HBi989aykkZT3nFODSHULISnZc0yBKuVaIoxUbcCCwXU3kYVh3t20ciStvowFCM97DOPNhXtXDkXHDrKszbw8%2FzG9d7lp1pYWuqWO2TkdmcfXa1Snfy2F1kJtUT6l2RR5GgHCtCUFxxl0D4rptyVnFfIVgDDAymGH%2BWpjCDBnF06X91rBm%2FziuHJEkEwoN6CtgY6sQELvIffLDqWGob0oC0pCSPP2Iv%2FyTz3DRoOZoa5YuNdKS%2FeXvc%2BNYxlcg0Av53yqHMNi1vHK9lNeDy%2FpwWD9GKs7tYHckYHNkkouN4A%2BQHajqCgG6FwPrNFQ1MnIZkUuAP4EotqAkDJ60yoRBV8ycBWrXgGTNaGYPPumcUqfzcNfaWFThGGcaMHHGLIcotB6GWv6AsCjBsICSQ7HYD%2BBs8mXMyq7XBpyeOLO6K%2Ffx%2BIGZ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240817T152305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB64KCGDV%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c60fbe2cd2160b2f7f5131bcba0a8a38f45b25bc49753d47bb7d6a0245cffa8",
        "images": {
            "THUMBNAIL": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDBFPs%2FlFNPV6PsD3mEOtmC2%2BXVzxsV6NAMYF0Y2dFKRwIgOab86RdXjcPh%2BPjcpMoEB6aT9OuLi34zoLQGQLdsSWsquAUIFxAAGgwxODcwMTcxNTA5ODYiDO73PzPpbazb01HI6iqVBbDNlV%2FZNvenFFICjTcmmY79Dj6Lg8u7Hg7RKtG6OfVZdQE3M1lYD%2B05KNdBbv7IBPKEhbm7p8XYPj1yhOJEWKI76uxCstPayTOeRuCwEB5rAledX03lKKtcoZa4eK5Sp4G0uaXMNK0f8dfKGU6BXXhoHT4iAlBP2VwJtof%2BaCUIaTcjPTWSg%2FFy7ZhZNNuXMNZrdRMx7U%2F%2BLDSEmluWdWu4SwaPN7gLYeAn6spkBZD%2Br8KI%2FR9pm1yZ0XTzUzNAT%2BlkmbDddiCApLL8vWDtJ95SSRu2DIjwqktA1jnuWxUGLwh3o8gHhy4aqSMU3utqKTEb6655%2B9whrD9EqSUk0npyTGiLxeV513yp3GmfIiH%2Fi2drCqGa%2FxHFDyPx0cXZ18zJgtRf7mOJTY2S53Fa31dVN6As72HYwhkwLClovezNdlIK1DizeqMnqR6oCvFIKGZcHBEY3zSX1MJkNIVUMSuUusiq53RPfOOWniHWAcSK0w%2FjVwEKNWITaRWD%2FaqMfu3f3TnPZzOz1jzwcwLTSL0bYjVKn1S2Y0UB5KJuoVHMd0rG57l5MLSN41oOf14ts7mOqWnQDb8XipPdSZ2gtE%2BCWwXUs2Nb6i4eJOn1XC2ZNWsRBH3MjdYVTs1pthlT8o2111EupRQOkU0i021DsmDP205CkZnrty2ObEgFVARy9nbCgTEGLoH7HBi989aykkZT3nFODSHULISnZc0yBKuVaIoxUbcCCwXU3kYVh3t20ciStvowFCM97DOPNhXtXDkXHDrKszbw8%2FzG9d7lp1pYWuqWO2TkdmcfXa1Snfy2F1kJtUT6l2RR5GgHCtCUFxxl0D4rptyVnFfIVgDDAymGH%2BWpjCDBnF06X91rBm%2FziuHJEkEwoN6CtgY6sQELvIffLDqWGob0oC0pCSPP2Iv%2FyTz3DRoOZoa5YuNdKS%2FeXvc%2BNYxlcg0Av53yqHMNi1vHK9lNeDy%2FpwWD9GKs7tYHckYHNkkouN4A%2BQHajqCgG6FwPrNFQ1MnIZkUuAP4EotqAkDJ60yoRBV8ycBWrXgGTNaGYPPumcUqfzcNfaWFThGGcaMHHGLIcotB6GWv6AsCjBsICSQ7HYD%2BBs8mXMyq7XBpyeOLO6K%2Ffx%2BIGZ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240817T152305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB64KCGDV%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5251dbe5beadf5e3a9f6b76c1e3627f0bf1658755005d8c1d4acb332886d5b8",
                "width": 100,
                "height": 100
            },
            "SMALL": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDBFPs%2FlFNPV6PsD3mEOtmC2%2BXVzxsV6NAMYF0Y2dFKRwIgOab86RdXjcPh%2BPjcpMoEB6aT9OuLi34zoLQGQLdsSWsquAUIFxAAGgwxODcwMTcxNTA5ODYiDO73PzPpbazb01HI6iqVBbDNlV%2FZNvenFFICjTcmmY79Dj6Lg8u7Hg7RKtG6OfVZdQE3M1lYD%2B05KNdBbv7IBPKEhbm7p8XYPj1yhOJEWKI76uxCstPayTOeRuCwEB5rAledX03lKKtcoZa4eK5Sp4G0uaXMNK0f8dfKGU6BXXhoHT4iAlBP2VwJtof%2BaCUIaTcjPTWSg%2FFy7ZhZNNuXMNZrdRMx7U%2F%2BLDSEmluWdWu4SwaPN7gLYeAn6spkBZD%2Br8KI%2FR9pm1yZ0XTzUzNAT%2BlkmbDddiCApLL8vWDtJ95SSRu2DIjwqktA1jnuWxUGLwh3o8gHhy4aqSMU3utqKTEb6655%2B9whrD9EqSUk0npyTGiLxeV513yp3GmfIiH%2Fi2drCqGa%2FxHFDyPx0cXZ18zJgtRf7mOJTY2S53Fa31dVN6As72HYwhkwLClovezNdlIK1DizeqMnqR6oCvFIKGZcHBEY3zSX1MJkNIVUMSuUusiq53RPfOOWniHWAcSK0w%2FjVwEKNWITaRWD%2FaqMfu3f3TnPZzOz1jzwcwLTSL0bYjVKn1S2Y0UB5KJuoVHMd0rG57l5MLSN41oOf14ts7mOqWnQDb8XipPdSZ2gtE%2BCWwXUs2Nb6i4eJOn1XC2ZNWsRBH3MjdYVTs1pthlT8o2111EupRQOkU0i021DsmDP205CkZnrty2ObEgFVARy9nbCgTEGLoH7HBi989aykkZT3nFODSHULISnZc0yBKuVaIoxUbcCCwXU3kYVh3t20ciStvowFCM97DOPNhXtXDkXHDrKszbw8%2FzG9d7lp1pYWuqWO2TkdmcfXa1Snfy2F1kJtUT6l2RR5GgHCtCUFxxl0D4rptyVnFfIVgDDAymGH%2BWpjCDBnF06X91rBm%2FziuHJEkEwoN6CtgY6sQELvIffLDqWGob0oC0pCSPP2Iv%2FyTz3DRoOZoa5YuNdKS%2FeXvc%2BNYxlcg0Av53yqHMNi1vHK9lNeDy%2FpwWD9GKs7tYHckYHNkkouN4A%2BQHajqCgG6FwPrNFQ1MnIZkUuAP4EotqAkDJ60yoRBV8ycBWrXgGTNaGYPPumcUqfzcNfaWFThGGcaMHHGLIcotB6GWv6AsCjBsICSQ7HYD%2BBs8mXMyq7XBpyeOLO6K%2Ffx%2BIGZ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240817T152305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB64KCGDV%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9973fe7a67f5491e4483b3ac9de48be1bca525bdb69b445fe4401051e8f0021b",
                "width": 200,
                "height": 200
            },
            "REGULAR": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDBFPs%2FlFNPV6PsD3mEOtmC2%2BXVzxsV6NAMYF0Y2dFKRwIgOab86RdXjcPh%2BPjcpMoEB6aT9OuLi34zoLQGQLdsSWsquAUIFxAAGgwxODcwMTcxNTA5ODYiDO73PzPpbazb01HI6iqVBbDNlV%2FZNvenFFICjTcmmY79Dj6Lg8u7Hg7RKtG6OfVZdQE3M1lYD%2B05KNdBbv7IBPKEhbm7p8XYPj1yhOJEWKI76uxCstPayTOeRuCwEB5rAledX03lKKtcoZa4eK5Sp4G0uaXMNK0f8dfKGU6BXXhoHT4iAlBP2VwJtof%2BaCUIaTcjPTWSg%2FFy7ZhZNNuXMNZrdRMx7U%2F%2BLDSEmluWdWu4SwaPN7gLYeAn6spkBZD%2Br8KI%2FR9pm1yZ0XTzUzNAT%2BlkmbDddiCApLL8vWDtJ95SSRu2DIjwqktA1jnuWxUGLwh3o8gHhy4aqSMU3utqKTEb6655%2B9whrD9EqSUk0npyTGiLxeV513yp3GmfIiH%2Fi2drCqGa%2FxHFDyPx0cXZ18zJgtRf7mOJTY2S53Fa31dVN6As72HYwhkwLClovezNdlIK1DizeqMnqR6oCvFIKGZcHBEY3zSX1MJkNIVUMSuUusiq53RPfOOWniHWAcSK0w%2FjVwEKNWITaRWD%2FaqMfu3f3TnPZzOz1jzwcwLTSL0bYjVKn1S2Y0UB5KJuoVHMd0rG57l5MLSN41oOf14ts7mOqWnQDb8XipPdSZ2gtE%2BCWwXUs2Nb6i4eJOn1XC2ZNWsRBH3MjdYVTs1pthlT8o2111EupRQOkU0i021DsmDP205CkZnrty2ObEgFVARy9nbCgTEGLoH7HBi989aykkZT3nFODSHULISnZc0yBKuVaIoxUbcCCwXU3kYVh3t20ciStvowFCM97DOPNhXtXDkXHDrKszbw8%2FzG9d7lp1pYWuqWO2TkdmcfXa1Snfy2F1kJtUT6l2RR5GgHCtCUFxxl0D4rptyVnFfIVgDDAymGH%2BWpjCDBnF06X91rBm%2FziuHJEkEwoN6CtgY6sQELvIffLDqWGob0oC0pCSPP2Iv%2FyTz3DRoOZoa5YuNdKS%2FeXvc%2BNYxlcg0Av53yqHMNi1vHK9lNeDy%2FpwWD9GKs7tYHckYHNkkouN4A%2BQHajqCgG6FwPrNFQ1MnIZkUuAP4EotqAkDJ60yoRBV8ycBWrXgGTNaGYPPumcUqfzcNfaWFThGGcaMHHGLIcotB6GWv6AsCjBsICSQ7HYD%2BBs8mXMyq7XBpyeOLO6K%2Ffx%2BIGZ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240817T152305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB64KCGDV%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5c60fbe2cd2160b2f7f5131bcba0a8a38f45b25bc49753d47bb7d6a0245cffa8",
                "width": 300,
                "height": 300
            },
            "LARGE": {
                "url": "https://edamam-product-images.s3.amazonaws.com/web-img/f97/f978c76d14c7f22281f37e4b17697f56-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLWVhc3QtMSJHMEUCIQDBFPs%2FlFNPV6PsD3mEOtmC2%2BXVzxsV6NAMYF0Y2dFKRwIgOab86RdXjcPh%2BPjcpMoEB6aT9OuLi34zoLQGQLdsSWsquAUIFxAAGgwxODcwMTcxNTA5ODYiDO73PzPpbazb01HI6iqVBbDNlV%2FZNvenFFICjTcmmY79Dj6Lg8u7Hg7RKtG6OfVZdQE3M1lYD%2B05KNdBbv7IBPKEhbm7p8XYPj1yhOJEWKI76uxCstPayTOeRuCwEB5rAledX03lKKtcoZa4eK5Sp4G0uaXMNK0f8dfKGU6BXXhoHT4iAlBP2VwJtof%2BaCUIaTcjPTWSg%2FFy7ZhZNNuXMNZrdRMx7U%2F%2BLDSEmluWdWu4SwaPN7gLYeAn6spkBZD%2Br8KI%2FR9pm1yZ0XTzUzNAT%2BlkmbDddiCApLL8vWDtJ95SSRu2DIjwqktA1jnuWxUGLwh3o8gHhy4aqSMU3utqKTEb6655%2B9whrD9EqSUk0npyTGiLxeV513yp3GmfIiH%2Fi2drCqGa%2FxHFDyPx0cXZ18zJgtRf7mOJTY2S53Fa31dVN6As72HYwhkwLClovezNdlIK1DizeqMnqR6oCvFIKGZcHBEY3zSX1MJkNIVUMSuUusiq53RPfOOWniHWAcSK0w%2FjVwEKNWITaRWD%2FaqMfu3f3TnPZzOz1jzwcwLTSL0bYjVKn1S2Y0UB5KJuoVHMd0rG57l5MLSN41oOf14ts7mOqWnQDb8XipPdSZ2gtE%2BCWwXUs2Nb6i4eJOn1XC2ZNWsRBH3MjdYVTs1pthlT8o2111EupRQOkU0i021DsmDP205CkZnrty2ObEgFVARy9nbCgTEGLoH7HBi989aykkZT3nFODSHULISnZc0yBKuVaIoxUbcCCwXU3kYVh3t20ciStvowFCM97DOPNhXtXDkXHDrKszbw8%2FzG9d7lp1pYWuqWO2TkdmcfXa1Snfy2F1kJtUT6l2RR5GgHCtCUFxxl0D4rptyVnFfIVgDDAymGH%2BWpjCDBnF06X91rBm%2FziuHJEkEwoN6CtgY6sQELvIffLDqWGob0oC0pCSPP2Iv%2FyTz3DRoOZoa5YuNdKS%2FeXvc%2BNYxlcg0Av53yqHMNi1vHK9lNeDy%2FpwWD9GKs7tYHckYHNkkouN4A%2BQHajqCgG6FwPrNFQ1MnIZkUuAP4EotqAkDJ60yoRBV8ycBWrXgGTNaGYPPumcUqfzcNfaWFThGGcaMHHGLIcotB6GWv6AsCjBsICSQ7HYD%2BBs8mXMyq7XBpyeOLO6K%2Ffx%2BIGZ8%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240817T152305Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFB64KCGDV%2F20240817%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=99a619caa15ddab858f5eddb5caa6ab2b921095e0f3276759236dbc1934a907f",
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
            "href": "https://api.edamam.com/api/recipes/v2/14cf40f94311490abeaad8b1df95f12e?type=public&app_id=9cf8e5c7&app_key=f7b7c5856e28029b8e7ab08182ab9fe1",
            "title": "Self"
        }
    }
}

  let xAxisData = [];
  let seriesData = [];
  let chartData = [];
  let dataPoint = [];
  let xAxisObj = {};
    
  const iterate = (obj) => {
    Object.keys(obj).forEach(key => {

    // console.log(`key: ${key}, value: ${obj[key]}`);

    if (typeof obj[key] === 'object' && obj[key] !== null) {

            chartData.push(obj[key]);
        }
    })
    // chartData.push(xAxisData, seriesData);
    return (chartData);
  }

  // console.log(iterate(chartRecipe.recipe.totalDaily));
  let dataToChart = iterate(chartRecipe.recipe.totalDaily);
  // console.log(dataToChart);

  const chartSetting = {
    xAxis: [
      {
        label: 'Recommended Daily Intake (%)',
        min: 0,
        max: 100,
     },
    ],
    width: 800,
    height: 600,
    
    // sx: {
    //   [`.${axisClasses.left} .${axisClasses.label}`]: {
    //     transform: 'translate(-10px, 0)',
    //   },
    // },
  };



  const currentEvents = events;
  const uriObject = [];
  for (let i = 0; i < currentEvents.length; i++) {
    // console.log(encodeURIComponent(currentEvents[i].uri));
    uriObject.push(encodeURIComponent(currentEvents[i].uri));
  }
  const queryString= uriObject.join('&uri=');

  useEffect(() => {
    // Fetch all meals when the component mounts
    fetchCalendarMeals()
      .then(setEvents)
      .catch((error) => {
        console.error("There was an error fetching the meals", error);
      });
  }, []);

  useEffect(() => {
    // Fetch all meals when the component mounts
    findRecipeByUri(queryString)
      .then(response => {
        setEventRecipes(response);
      })
      .catch((error) => {
        console.error("There was an error fetching by URI", error);
      });
  }, []);

  // useEffect(() => {
  //   // Fetch all meals when the component mounts
  //   findRecipeByUri(queryString)
  //     .then(response => {
  //       setEventRecipes(response);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching by URI", error);
  //     });
  // }, []);

  // console.log("EVENT", eventRecipes[0]);
  // console.log(Date(currentEvents[0].start));

  // const calendarObject = {};
  // for (let i = 0; i < currentEvents.length; i++) {
  //   console.log(currentEvents[i].start);
  // }

  const valueFormatter = value => `${parseFloat(value.toFixed(2))}%`

  return (        
    <div className="mt-5 px-0 container-fluid">
    <div className="card">
      <div className="card-header">Nutritional Analysis</div>
    <BarChart
      dataset={chartData}
      yAxis={[{ scaleType: 'band', dataKey: 'label' }]}
      series={[{ dataKey: 'quantity', valueFormatter }]}
      layout="horizontal"
      grid={{ vertical: true }}
      {...chartSetting}
    />
    </div>
    </div>
  );
}