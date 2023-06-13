//Basico
enum Color {
  Red,
  Green,
  Blue,
}
let selectedColor: Color = Color.Green; // Uso de la enumeración

//intermedio
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
let playerDirection: Direction = Direction.Up; // Uso de la enumeración con valores personalizados

//Avanzado
enum HttpStatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}
function handleResponse(statusCode: HttpStatusCode) {
  console.log(`Response received with status code: ${statusCode}`); // Uso de la enumeración en una función
}
handleResponse(HttpStatusCode.OK); // Llamada a la función con un valor de la enumeración

