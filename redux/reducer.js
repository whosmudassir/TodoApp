export const todoreducer=(state=0, action)=>{
    switch(action.type){
        case 'ADD_TODO' : return 0;
        case 'DELETE_TODO':return 0;
        default : return state;
    }
}