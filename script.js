/**
 * Counter Component
 */
const MAXIMUM_NUMBER_OF_CHARACTERS = 150;
const textAreaEl = document.querySelector('.form__textarea');
const counterEl = document.querySelector('.counter');

const inputHandler = (event) =>
{
    // determine number of characters in textarea
    const numberOfCharacters = event.target.value.length;

    // calculate number of characters left (MAXIMUM_NUMBER_OF_CHARACTERS - numberOfCharacters)
    const numberOfCharactersLeft = MAXIMUM_NUMBER_OF_CHARACTERS - numberOfCharacters;

    // update counter element
    counterEl.textContent = numberOfCharactersLeft;
}

textAreaEl.addEventListener('input', inputHandler);
