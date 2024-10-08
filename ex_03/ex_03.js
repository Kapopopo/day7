function map(elements, modifier)
{
    let i = 0;
    const final_array = [];

    while (i < elements.length) {
	    final_array[final_array.length] = modifier(elements[i]);
        i++;
    }
    return final_array;
}

function isEven(number) {
    return number % 2 == 0;
}

console.log(map([5, 8, 10], isEven));
