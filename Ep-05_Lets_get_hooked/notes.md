# Two types of `Export/Import` :-
  1) `Default export/import` :-
      * export default Component;
      * import Component from "path"
   
  2) `Named Export/Import`
      * export const Component;
      * import {Component} from "path";  
  
  Note :- It is important to know the use of {} while importing, because it use for named component.

  3) Can we use `both named export and export default component` in same file?  
    ans- Yes, we can use it but `not more than one default export`, but it can be have as `many as named export` as you need. 
     
# What is `Virtual DOM` ?   
 ans:- Virtual DOM is representation of actual DOM which means it convert the actual DOM into Object where `diff algorithm` find out and compare between the previous and new actual dom and reconcile it quickly if any update has been made. So, what is actual DOM ? `Actual DOM` is `div tag, img tag, heading tag etc`  .  

 # Why `React is fast` ?  
 ans:- Because, it has `virtual DOM, diff algorithm` which is very efficient, it can do efficient DOM manupulation, it can find out the `diff` and update the UI.  

 #### So, basically it is all the part of `React Fiber Architecture`. 

 ### `React Fiber Architecture:-`  
 ans:- It is an ongoing reimpletation of React's core algorithm i.e `diff algo (reconciliation algo) that is popularly known as Virtual DOM` . It's goal is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is `incremental rendering`: the ability to split rendering work into chunks and spread it out over multiple frames. And all these updates using `setState`.    


