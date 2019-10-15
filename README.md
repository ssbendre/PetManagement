
# PetManagement App

This Node.js app using [Express 4](http://expressjs.com/).

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/) installed.

```sh
git clone git@github.com:ssbendre/PetManagement.git
cd PetManagement
npm install
npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Docker

```
sudo docker build -t pet-management .
sudo docker run -p 3000:3000 -d pet-management
```

## API Calls

### Get list of all owners

HTTP: GET
http://localhost:3000/listOwners

### Get list of pets by owner

HTTP: GET
http://localhost:3000/listPetsForOwner/<owner phone>

example: http://localhost:3000/listPetsForOwner/567898888

### Create pets details

HTTP: POST
http://localhost:3000/addPets

request body - 

[
	{
		"Owner": {
			"name":"asdfgh",
			"address":"cvbn",
			"phone":"123456",
			"email":"dfghjk",
			"Pets": [{
				"name":"fghjkl",
				"colour":"hjkl",
				"age":"4567",
				"breed":"jkl"
			},{
				"name":"fghjkl",
				"colour":"hjkl",
				"age":"4567",
				"breed":"jkl"
			},
			{
				"name":"fghjkl",
				"colour":"hjkl",
				"age":"4567",
				"breed":"jkl"
			}]
		}
	},
	{
		"Owner": {
			"name":"asdfgh",
			"address":"cvbn",
			"phone":"567898888",
			"email":"dfghjk",
			"Pets": [{
				"name":"fghjkl",
				"colour":"hjkl",
				"age":"4567",
				"breed":"jkl"
			}]
		}
	}
]

