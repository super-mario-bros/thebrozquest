function createChoice(choice){
    const label = document.createElement('label');
    const input = document.createElement('input');
    
    input.type = 'radio';
    input.name = 'choice';
    input.required = true;
    input.value = choice.id;
    
    label.textContent = choice.description;
    label.appendChild(input);
    
    return label;
}

export default createChoice;