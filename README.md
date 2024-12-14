# Learn React by building a real world SPA

- Interesting .reduce usage in CountryList

- When adding the deleteCity functionality I kept running into problems.. We added a handleClick function to preventDefault when the delete X was clicked but I removed that after adding in the deleteCity function and I placed the deleteCity(id) straight into the onClick for the button. If someone told me this then i would assume that when I clicked delete it would remove the city and try open it and fail but what actually happened is that the function was called immediately upon render and deleted every city in the cities.json file. Not exactly sure why but I had to actually add the deleteCity function to the handleClick function so the preventDefault was still triggered.
