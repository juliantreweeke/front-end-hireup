

## Marvel Character Search

A web app using the Marvel api to search for Marvel super heros.

## Technologies

This application was developed using Create React App

## Testing

Testing is done with Jest and Enzyme.
Tests can be run via - Yarn Test

I haven't done much testing and this was my first time using Jest and Enzyme, so this is the part that I didn't get to complete in this project. The tests I did write are very very basic and some currently don't pass.
I found it difficult to mock a fetch call to do any proper testing with and I got stumped with it and had to move on.
If I had more time I would have wrote a test for every function and user interaction.
In future I am going to start writing projects with testing first!

## Styling

I decided to not use a css framework for this project and do it from scratch.
I found this more fun and I always learn alot doing projects this way.
I also thought it was overkill to use a css framework for a app this size.

I tried to make the styling as pixel perfect as I could to the brief.
I wasn't sure on the dimensions from the brief images so I just tried to make it look as close as possible.
If I had more time I would have converted the css to sass and refactored styles.

## Things I would have like to polish/bugs

-The loader isn't the same design as in the brief.
With more time I would search deeper to find the exact svg.

-There is a 1px border top on the drop down that when I got rid of messed with previous css styling.

-If you put only one letter in the search bar the query isn't sent to the proxy server?
I am not sure if that is a condition of the api's nameStartsWith= query.

-The scroll bar is not styled! I had trouble trying to customize the scrollbar to match the briefs image.
Maybe using a css framework or plugin could have solved this problem.
