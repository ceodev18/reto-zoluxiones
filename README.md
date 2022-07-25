# reto-tecnico-zoluxiones-6
Tipo de Llamadas

GET endpoint/v1/swapi/{resource}/{id}

<img width="867" alt="Screen Shot 2022-07-25 at 07 50 35" src="https://user-images.githubusercontent.com/20958764/180782043-c83aca17-79e3-41d2-a51e-d0daec9ed967.png">


GET endpoint/v1/todos/{todoId}

<img width="849" alt="Screen Shot 2022-07-25 at 07 50 40" src="https://user-images.githubusercontent.com/20958764/180782147-b1e273fb-11c1-4fc1-b020-44ef791768f3.png">

<img width="897" alt="Screen Shot 2022-07-25 at 07 50 46" src="https://user-images.githubusercontent.com/20958764/180782184-8b07bab8-bb37-4368-a0fb-5e2d3640c04d.png">


POST endpoint/v1/todos

body

{
	"id": 1,
  "resource": "people",
  "gender": "male",
  "homeworld":  "https://swapi.py4e.com/api/planets/20/" 
}

<img width="779" alt="Screen Shot 2022-07-25 at 07 50 53" src="https://user-images.githubusercontent.com/20958764/180782067-ba5551d3-0b6c-4b8f-a4c9-74e6d46ae11f.png">


Para desplegar
- Modificar en variables.tf 

variable "aws_account_id" {
  type    = string
  default = "xxxxxxx"
}

- Ejectuar "terraform init -upgrade"
- Ejectuar "terraform deploy"


Puntos de evaluación:

· Mínimo 2 endpoints, GET para recuperar la información y POST para crear un elemento [OK]

·Integración con una base de datos (DynamoDB o MySQL) [OK]

·Integración con SWAPI [OK]

·Uso de Serverless Framework [OK]

·Uso de Node.js [OK]

·Respeto de las buenas prácticas de desarrollo [OK]

·Traducción de campos de inglés a español [NO]

Puntos bonus:

·Documentación de uso [OK]

·Pruebas unitarias [NO]

·Documentación en Open API/Swagger [NO]

·Desplegar sin errores en AWS con el comando deploy del framework serverless [OK]

·Mayor complejidad de Integración [OK]
