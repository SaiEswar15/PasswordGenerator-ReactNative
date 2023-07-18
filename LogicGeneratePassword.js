generatePassword(12,"eswarzki");

function createPassword(size,str)
{
    let result = "";
    for (let i = 0;i<size;i++)
    {
        characterIndex = Math.round(Math.random() * str.length);
        result += str.charAt(characterIndex);
    }
    console.log(result);
}