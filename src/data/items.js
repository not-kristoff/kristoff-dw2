// This is an _object_: it lets us group related things together
const item = {
    title:"Title",
    quote:"This is the quote"};

// We could access stuff from within this like so:

// item.title
// item.quote


// To use images in Astro we have to import them:

import quote1image from "../assets/image-sample.jpg"
    

// We can make an array of 

export const items = [
    {title:'quote 1',quote:'this is a quote', image:quote1image},
    {title:'quote 2',quote:'this is a quote', image:quote1image},
    {title:'quote 3',quote:'this is a quote', image:quote1image}];


// Arrow function



const myFunction = (parameter)=>{
    // all the stuff in this will run when you call the function


    // we can return a value 
    return 0;
    
}



