1. What problem does the context API help solve?

	Getting state to further down the component tree without prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	actions - are called from the component and fire the reducer code
	reducers - change state as needed and return results for each action
	store - holds state for everything
	
	because when state is changed, it's updated in the store
	
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
	
	application state is global throughtout the entire app
	component state is local to the components defining and using it
	
	use component state unless you need global

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	it's a middleware package that allows us to use async code by intercepting actions
	
1. What is your favorite state management system you've learned and this sprint? Please explain why!

	I like both redux and context for different reasons - context is much less code to implement it and is nice if you only need state management in a few components. redux is nice for more complex state management.
