function abbrevName(name){

    name = name.toUpperCase();
    
    const nameParts = name.split(' ');
    
    const firstInitial = nameParts[0][0]
    
    const secondInitial = nameParts[1][0];
    
    return `${firstInitial}.${secondInitial}`;
    
    }