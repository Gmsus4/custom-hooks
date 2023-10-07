export const todoReducer = ( initialState, action ) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload ] //Lo que tengo que regresar es un nuevo state

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload) //Voy a regresar todos los todos, siempre y cuando el todo.id sea diferente de el todo.id (action.payload)
        
        case '[TODO] Toggle Todo':
            return initialState.map(todo => {
                if(todo.id === action.payload){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }
                return todo;
            })
        
        default:
            return initialState;
    }
}