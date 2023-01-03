
# LAB | JavaScript: exercises with objects and arrays


## Tests

This LAB is equipped with unit tests to provide automated feedback on your lab progress. In case you want to check the tests, they are in the `tests/movies.spec.js` file.

To run the tests and your JavaScript code, open the `SpecRunner.html` file.

## Iteration 0: Movies array

In the **`src/data.js`** file, you will find an array of info about **the best 250 movies of all times** according to [IMDB Ranking](http://www.imdb.com/chart/top?ref_=nv_mv_250_6) that you will use to display what each iteration asks! 

Here is an example of how the data is displayed:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```



You will be digging deeper into some "facts" that this data set has. For example, we can use this data set to find which is the most popular movie, what is the average duration of the movie, the list of movies by some director, etc. 

In this iteration, no action is required, but here comes your challenge: In the following iterations, you will use your JS knowledge to manipulate this data.


### Iteration 1: All directors

We need to get the array of all directors. Since this is a warm up, we will give you a hint: you have to _map_ through the array of movies and get all the directors into one array as a final result. Go ahead and create a function named `getAllDirectors()` that receives an array of movies as an argument and returns a new (_mapped_) array.


#### Bonus - Iteration 1.1: _Clean_ the array of directors

It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (meaning, without duplicates)? _Don't prioritize the bonus part now, you can come back to it when you are done with the mandatory iterations._ :wink:


### Iteration 2: Steven Spielberg. The best?

One of the most famous directors in cinema is **[Steven Spielberg](https://en.wikipedia.org/wiki/Steven_Spielberg)**, and he has some really awesome drama movies that are on our list, but we want to know how many of them are there.

Go ahead and create a `howManyMovies()` function that receives an array as a parameter and `filter` :eyes: the array so we can have only the **drama** movies where **Steven Spielberg** is the director.


### Iteration 3: All scores average

These are the best movies based on their scores, so supposedly all of them have a remarkable score. In this iteration, we want to know the average score of all of them and display it on the console. Create a `scoresAverage()` function that receives an array as a parameter and solves the challenge.

The score must be returned rounded to 2 decimals!

**:bulb: Maybe you want to _"reduce"_ the data to a single value. :wink:**


### Iteration 4: Drama movies

Drama is the genre that repeats the most on our `array`. Apparently, people love drama! :eyes:

Create a `dramaMoviesScore()` function that receives an array as a parameter to get the average score of all drama movies! Let's see if it is better than the general average.

Again, rounded to 2 decimals!


### Iteration 5: Order by year

We need to sort the movies in ascending order by their release year. This should be easy using one of the **methods** we have just learned. :wink:
Create a function `orderByYear()` that receives an array as parameter and returns a _new sorted array_.

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_3db351079827c0acba42cf1e397dd8a3.gif)

If two movies have the same year, order them in alphabetical order by their title! :heavy_check_mark:


:warning: **Important:** Your function should *return a new array*, containing the movies ordered by the year. Your function should not modify (mutate) the original array. You may need to do some research on how to make a "copy" or "clone" an array.


### Iteration 6: Alphabetic order

Another popular way to order the movies is to sort them alphabetically using the `title` key. However, in this case, we only need to print the title of the first 20. Easy peasy for an expert like you. :wink:

Create a `orderAlphabetically()` function, that receives an array and returns an array of first 20 titles, alphabetically ordered. Return only the title of each movie, and if the array you receive has less than 20 movies, return all of them.


:warning: **Important:** Your function should *return a new array*, containing movie objects sorted alphabetically. Your function should not modify (mutate) the original array. You may need to do some research on how to make a "copy" or "clone" an array.


### BONUS - Iteration 7: Time format

We get the info from the **IMDB** web page, but the duration info was saved in a format that difficult us a lot to compare movies.

Finding the longest movie is almost impossible using that format, so let's change it!

- Create a `turnHoursToMinutes()` function that receives an array as parameter, and with some _magic_ implemented by you - replaces the duration info of each of the movies for its equivalent in minutes. For example:

```javascript
{
  "title":"The Shawshank Redemption",
  "year":1994,
  "director":"Frank Darabont",
  "duration":"2h 22min",
  "genre":["Crime","Drama"],
  "score":9.3
}
```

Should be:

```javascript
{
  "title": "The Shawshank Redemption",
  "year": 1994,
  "director": "Frank Darabont",
  "duration": 142,
  "genre": ["Crime","Drama"],
  "score": 9.3
}
```

:warning: **Important:** Your function should *return a new array*, containing movie objects with the duration time in minutes. Your function should not modify (mutate) the original array.

### BONUS - Iteration 8: Best yearly score average

We always hear so much about classic movies, but we want to know which year has the best average score, so we can declare the **BEST YEAR FOR CINEMA** officially!

Go ahead and find which year have the best average score for the movies that were released on that year!
Create `bestYearAvg()` function that receives an array of movies and gives us an answer which year was the best year for cinema and what was its average score. The `bestYearAvg()` should return a **string** with the following structure:
<br>

**The best year was \<YEAR\> with an average score of \<RATE\>**

![](https://s3-eu-west-1.amazonaws.com/ih-materials/uploads/upload_dfc3fe557576abca4dba274e3aabe9a3.gif)
