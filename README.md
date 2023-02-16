# Project REST-Rant

REST-Rant is an app where users can review restaurants.

| Method  | Path  | Purpose |
| :---: | :---: | :---: |
| GET | / | Home page |
| GET | /restaurants | Restaurants INDEX page |
| POST | /restaurants | Create a new restaurant |
| GET | /restaurants/new | Form page for creating a new restaurant |
| GET | /restaurants/:id | Details about a particular restaurant |
| PUT | /restaurants/:id | Update a particular restaurant |
| GET | /restaurants/:id/edit | Form page for editing an existing restaurant |
| DELETE |	/restaurants/:id	| Delete a particular restaurant |
| POST |	/restaurants/:id/rant	| Create a rant (comment) about a particular restaurant |
| DELETE |	/restaurants/:id/rant/:rantId	| Delete a rant (comment) about a particular restaurant |
| GET |	*	| 404 page (matches any route not defined above) |