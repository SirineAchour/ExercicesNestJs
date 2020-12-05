export enum ErrorMessage{
    'notEmpty' = `Vous devez spécifier un/une $property`,
    'minLength' = `$property doit avoir une taille min de $constraint1`,
    'maxLength' = `$property doit avoir une taille max de $constraint1`,
    'isString' = `$property doit etre une chaine de caractères`,
    'isIn' = `$property doit etre dans [$constraint1]`
}