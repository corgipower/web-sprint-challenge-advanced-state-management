1. What problem does the context API help solve?
    
    Carrying state down the component tree without prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    actions: perform the action as described in the reducer
    reducers: define what should be done for each action
    store: holds state for all components, which is why it's known as "single source of truth" 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global to all components, Component state is local to that component. Use Application state if it's going to be reused in most components, use local state if it's only needed in a few components

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    distinguishes between a function and a non function in the action and performs async functions

1. What is your favorite state management system you've learned and this sprint? Please explain why!
    Depends on the use case. Redux for larger apps because props can be brought in only when needed, context for smaller apps, because components are less modular.