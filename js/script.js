// Copyright (c) 2020 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function gets the weather today.
 * The "async" is there because it will take time for the internet to return the value
 */
async function getJoke() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://official-joke-api.appspot.com/random_joke")
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    const setup = jsonData.setup
    const punchline = jsonData.punchline

    // output
    document.getElementById("jokes").innerHTML =
    "Joke: " + setup + "<br>" + 
    "Punchline: " + punchline + "<br>" + 
    "HAHAHAHA"
  } catch (error) {
    console.error("Error getting jokes:", error)
    document.getElementById("jokes").innerHTML = "Sorry, something went wrong!"
  }
}