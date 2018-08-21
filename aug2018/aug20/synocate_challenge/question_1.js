const https = require('https');
/*
 * Complete the function below.
 * Use console.log to print the result, you should not return from the function.
 */
function getMovieTitles(substr) {
  let titles = [];

  const url = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}`;

  https.get(url, (res) => {
    let total;
    let movieTitles = [];
    let data;

    res.on('data', (d) => {
      const response = JSON.parse(d);
      // check if results come with more than 1 page
      total = response.total;
      data = response.data;
      const numPages = Math.ceil(total / 10);

      if (total > 10) {

        for (let i = 2; i <= numPages; i++) {
          const url2 = `https://jsonmock.hackerrank.com/api/movies/search/?Title=${substr}&page=${i}`;

          // additional https get requests for remaining pages of results
          https.get(url2, (res) => {

            res.on('data', d => {
              const innerResponse = JSON.parse(d);
              data = data.concat(innerResponse.data);

              // must return result here due to asynchronous https requests
              for (let j = 0; j < data.length; j++) {
                movieTitles.push(data[j]["Title"]);
              }

              // sort titles in ascending alphabetical order
              movieTitles = movieTitles.sort((a, b) => {
                if (a < b) return -1;
                if (a === b) return 0;
                if (a > b) return 1;
              });

              movieTitles.forEach(title => console.log(title));
              return movieTitles;
            })
          })
        }
      } else {
        // data has less than or equal to 10 results, additional request unnecessary
        for (let j = 0; j < data.length; j++) {
          movieTitles.push(data[j]["Title"]);
        }

        // sort titles in ascending alphabetical order
        movieTitles = movieTitles.sort((a, b) => {
          if (a < b) return -1;
          if (a === b) return 0;
          if (a > b) return 1;
        });

        movieTitles.forEach(title => console.log(title));
        return movieTitles;
      }
    })
  })
}

