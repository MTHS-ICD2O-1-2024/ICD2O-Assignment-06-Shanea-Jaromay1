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
async function getCoffee() {
  // the "try" is here because the internet may not be working
  // it is like an "if ... else" statement"
  try {
    const resultJSON = await fetch("https://coffee.alexflipnote.dev/random.json")
    const jsonData = await resultJSON.json()
    console.log(jsonData)
    const imageSrc = jsonData.random.json[0].imageSrc

    // output
    document.getElementById("coffee-pics").innerHTML = tempCelsius.toFixed(1) + " °C"
  } catch (error) {
    console.error(error)
  }
}