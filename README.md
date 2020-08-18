# dispatch-task

## summary

This is a basic api that handles deliveries for a courier. The api will show couriers along with their capacity and inventory. It will also be able to update the current inventory of the drivers

## Setup

The application is a simple express app than can be served locally by running below commands

`npm i`

`cp .env.example .env && npm start`

The application will start ion port 8080 so the endpoint will be

`localhost:8080/courier`

## Endpoints

There are 6 endpoints which will control the main CRUD for the api, below are some basic examples of usage

Search for all couriers and their inventory

```bash
curl -X GET http://localhost:3000/couriers/
```

Search for one Courier by their ID

```bash
curl -X GET http://localhost:3000/couriers/1
```

Search couriers by the max capacity

```bash
curl -X GET http://localhost:3000/couriers/lookup --data '
{
  "capacity_required": 45
}'
```

Create a new courier

```bash
curl -X POST http://localhost:3000/couriers/ --data '
{
  "max_capacity": 45
}'
```

Update a courier capacity

```bash
curl -X PATCH http://localhost:3000/couriers/1 --data '
{
  "max_capacity": 50
}'
```

Update courier with how much inventory they have, this will be used for the amount of things they pickup. It will increase their inventory by what was sent
```bash
curl -X POST http://localhost:3000/couriers/pickup/1 --data '
{
  "quantity": 5
}'
```
Update courier with how much inventory they have, this will be decrease their inventory depending on the parcels they drop off
```bash
curl -X POST http://localhost:3000/couriers/dropoff/1 --data '
{
  "quantity": 5
}'
```

## How did it go

went pretty well overall, I had issues with typescript and the latest version of jest. just downgraded and resolved that issue. Some of the endpoints are very basic crud so have only included a few of the basic tests, but wouldnt normally test basic 3rd party functions. I have added in tests for the helper i created.

## How can it be improved

Currently there isnt a very good validation inplace, It would be ideal to better sanitize and validate the input data for some of the requests.
The search function can be updated to add more filter options to better the results
The courier module can be slightly refactored to have files per function.
Can better improve the endpoints, rather than have so many, can rather control them in less endpoints and determine what is needed by the input data.
Add in a easy way for this to be deployed.
