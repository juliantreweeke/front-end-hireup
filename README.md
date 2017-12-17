

# Frontend Assessment - Marvel Character Search

A web app using the Marvel API to search for Marvel super hero's.

## Technologies

This application was developed using React with Create React App.

Start the app via - Yarn start
Running on http://localhost:3000/          

## Testing

Testing is done with Jest and Enzyme.
Tests can be run via - Yarn Test.
Dependencies: yarn add react-addons-test-utils enzyme --dev.

This was my first time using Jest and Enzyme and as such I ran out of time and only completed basic testing.
I struggled to mock a fetch request and had to move on. Given more time I would like to test all functions and user interactions.

## Styling

I decided not to use a CSS framework for this project and do it from scratch. I felt it was overkill to use a css framework for a app this size.
In any case I found this more enjoyable and find I always learn a lot writing CSS without a framework.


If I had more time I would have converted the css to sass and refactored styles.


## Things I would have liked to polish/bugs

-The loader isn't the same design as in the brief.
With more time I would search deeper to find the exact svg.

-There is a 1px border top on the drop down that when I get rid of, messes up previous CSS styling.

-If you put only one letter in the search bar the query isn't sent to the proxy server?
I am not sure if that is a condition of the api's nameStartsWith= query.

-The scroll bar is not styled! I had trouble trying to customize the scrollbar to match the briefs image.
Maybe using a CSS framework or plugin could have solved this problem.
