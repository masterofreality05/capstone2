"use strict";
/** Routes for recipes. */
const express = require("express");
const { ensureCorrectUserOrAdmin, ensureLoggedIn} = require("../middleware/auth");
const { BadRequestError } = require("../expressError");
const Recipe = require("../models/recipes");
const Ingrediant = require("../models/ingrediant")
const db = require("../db");
const router = express.Router();

/**This route will be used to get the recipes saved to the favourites of a user */
router.get("/:recipe", async function (req, res, next) {
    try {
        //commented out for the moment ensureCorrectUserOrAdmin
        let userRecipes = Recipe.get()
        return userRecipes.data
    } catch (err) {
      return next(err);
    }
  });
  /**Add a new recipe, alongside ingrediants and recipe-ingrediant relations to the database */
  router.post("/add", async function (req, res, next) {
    try {
        //commented out for now  ensureLoggedIn, (middleware)
        console.log("inside our recipe post route:", req.body)
        const {label, image_url, link, ingrediants} = req.body
        let Individual_ingrediants = ingrediants.split(" ")
        let newRecipe = await Recipe.addNew(label, image_url, link)
        for(let ingrediant of Individual_ingrediants){
            let newIngrediant = await Ingrediant.addNew(ingrediant)
            console.log("our newly added ingrediant is:", newIngrediant)
            await Recipe.addNewIngrediantRelation(newRecipe.id, newIngrediant.id);
        }
        console.log("new recipe added!", newRecipe)
    } catch (err) {
      return next(err);
    }
  });
/**This function is used behind the scenes when a user searches based on a keyword and stores all
 * referenced recipes in our database for later use
 */
  router.post("/addSearched", async function (req, res, next) {
    try {
        //commented out for now  ensureLoggedIn, (middleware)
        console.log("inside our addSearched post request for recipes:", req.body.recipe.label)
        const {label, url, image, ingredients} = req.body.recipe
        let newRecipe = await Recipe.addNew(label, image, url)
        for(let ingrediant of ingredients){
          /// need to change this to ingredients.food 
            let newIngrediant = await Ingrediant.addNew(ingrediant)
            await Recipe.addNewIngrediantRelation(newRecipe.id, newIngrediant.id);
        }
    } catch (err) {
      return next(err);
    }
  });

  router.post("/addIngrediantRelation", async function (req, res, next) {
    try {
        //commented out for now  ensureLoggedIn, (middleware)
        const {ingrediant_id, recipe_id} = req.body
        await Recipe.addNewIngrediantRelation(recipe_id, ingrediant_id);
        }
     catch (err) {
      return next(err);
    }
  });

module.exports = router;