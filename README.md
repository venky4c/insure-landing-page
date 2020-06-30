This project is implemented using Bootstrap and React.
Though the React part is not very challenging, the CSS part is very much so. There are two different versions of layouts for the Mobile and Desktop. Infact, this was the deciding 
factor for me to prefer Bootstrap over CSS grid. 

My Learnings from this project:

CSS: 
1. Bootstrap makes it easy to implement a Navbar with Breadcrumb feature for mobile. Also, it makes it easy to have different ordering of columns between Desktop and mobile.
2. I learnt that we can center items in Grid layout using 'place-contents' property that centers both along inline and block axes. To achieve the same for Flex display, I used 
'align-items: center;'.
3. We can use clip text (this site: https://bennettfeely.com/clippy has some nice utilities) to position images using z-axis and position: absolute/relative features. 
Use z-axis:-1 to make the background passive and z-axis:2 to make it stand out on top of something.
4.It is easy to align h tags to center using text-align property.
5. We can align button's to center using 'margin: 2em auto'.
6. I can create gutters on either side of the page by simply adding margin property to the body like so: margin: 0 30rem;
7. We can use anchor tag and id attribute to access any section of the same page. This comes in handy in the mobile mode, as we need to scroll down quite a bit.

SASS:
The major major takeaway from this project would be my decision to use SASS pre-compiler for this project. This is the first time I am using it. I was cursing myself for having
postponed using this wonderful technology which gives you, the ability to nest your CSS selectors. Using variables and functions in CSS also helps you to write clean looking css.

Js: 
This is one project, where Js requirements were negligible or I can say zero. 

React: 
I was tempted to use React as there were lot of svg images. Later I learnt that I need not pass any props to them for any conditional rendering. However searching on the 
net for implementing SVG's gave me a gem of article by Robin Wieruch in 'How to use SVG Icons as React Components?'. I have bookmarked it for later use, :-)

On the whole it took me more time than expected to implement this CSS heavy project. But this would remain close to my heart for I know that, the time I spent in doing this 
would help me reduce the time by so much in my future projects.
